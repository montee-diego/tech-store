(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[360],{8871:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[id]",function(){return n(387)}])},6050:function(t,e,n){"use strict";var r=n(5893),i=n(5221),a=n(1664),c=n.n(a),s=n(8453),o=n.n(s);e.Z=function(t){var e=t.product;return(0,r.jsx)(c(),{href:"/product/".concat(e.id),children:(0,r.jsxs)("a",{className:o().card,children:[(0,r.jsx)("div",{className:o().image,children:(0,r.jsx)("img",{src:e.image.url,alt:"product image"})}),(0,r.jsxs)("div",{className:o().info,children:[e.quantity<1&&(0,r.jsx)("span",{className:o().nostock,children:"NO STOCK"}),(0,r.jsx)("div",{className:o().flex,children:e.isOnSale?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:o().sale,children:(0,i.ED)(e.price)}),(0,r.jsx)("h3",{className:o().oldprice,children:(0,i.ED)(e.listPrice)}),(0,r.jsxs)("span",{className:o().save,children:["Save ",(0,i.iJ)(e.listPrice,e.price),"%"]})]}):(0,r.jsx)("h3",{children:(0,i.ED)(e.price)})}),(0,r.jsx)("p",{children:e.title})]})]})})}},1955:function(t,e,n){"use strict";var r=n(5893),i=n(9921),a=n.n(i);e.Z=function(t){var e=t.stock,n=t.quantity,i=t.setQuantity;return(0,r.jsxs)("div",{className:a().quantity,children:[(0,r.jsx)("input",{className:a().lbtn,type:"button",value:"-",onClick:function(){i(Math.max(1,n-1))},disabled:e<1}),(0,r.jsx)("input",{className:a().value,type:"number",name:"quantity",id:"quantity",value:n,size:3,readOnly:!0,disabled:e<1}),(0,r.jsx)("input",{className:a().rbtn,type:"button",value:"+",onClick:function(){i(Math.min(e,n+1))},disabled:e<1})]})}},387:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return k},default:function(){return P}});var r=n(5893),i=n(7294),a=n(1163),c=n(2006),s=n(5221),o=n(9008),l=n.n(o),u=n(6050),d=n(1955),_=n(1664),f=n.n(_),m=n(3955),h=n.n(m),p=function(t){var e=t.href,n=t.title;return(0,r.jsx)(f(),{href:e,children:(0,r.jsx)("a",{className:h().link,children:n})})},x=n(305),y=n.n(x),j=function(t){var e=t.id,n=t.name,i=t.brand;return(0,r.jsxs)("div",{className:y().flex,children:[(0,r.jsx)(p,{href:"/category/".concat(e),title:n}),(0,r.jsx)("img",{src:"/tech-store/img/chevron-right-solid.svg",alt:">"}),(0,r.jsx)("h1",{children:i})]})},v=n(4454),g=n.n(v),N=function(t){var e=t.seller;return(0,r.jsxs)("div",{className:g().seller,children:[(0,r.jsxs)("span",{children:["Sold by ",(0,r.jsx)("strong",{children:e.name})]}),e.isOfficial&&(0,r.jsx)("img",{src:"/tech-store/img/circle-check-solid.svg",alt:"&check;"})]})},b=n(5287),S=n.n(b),k=!0,P=function(t){var e=t.product,n=(0,a.useRouter)(),o=(n.query.id,(0,c.i)().findIndex((function(t){return t.product.id===e.id}))>=0),_=(0,i.useState)(1),f=_[0],m=_[1],h=(0,i.useState)(o),p=h[0],x=h[1];return(0,i.useEffect)((function(){x((0,c.i)().findIndex((function(t){return t.product.id===e.id}))>=0)}),[e.id]),(0,r.jsxs)("section",{children:[(0,r.jsx)(l(),{children:(0,r.jsxs)("title",{children:["Tech Store | ",e.title]})}),(0,r.jsx)(j,{id:e.category.id,name:e.category.name,brand:e.brand}),(0,r.jsxs)("div",{className:S().product,children:[(0,r.jsxs)("div",{className:S().details,children:[(0,r.jsx)("div",{className:S().image,children:(0,r.jsx)("img",{src:e.image.url,alt:e.title})}),(0,r.jsxs)("div",{className:S().info,children:[(0,r.jsx)("h2",{children:e.title}),(0,r.jsx)(N,{seller:e.sellers[0]}),(0,r.jsx)("p",{className:S().description,children:e.description}),(0,r.jsx)("h3",{className:e.isOnSale?S().oldprice:"",children:(0,s.ED)(e.listPrice)}),e.isOnSale&&(0,r.jsxs)("h3",{className:S().sale,children:[(0,s.ED)(e.price)," (",(0,s.iJ)(e.listPrice,e.price),"%)"]}),e.quantity>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:S().quantity,children:[(0,r.jsx)(d.Z,{stock:e.quantity,quantity:f,setQuantity:m}),(0,r.jsxs)("span",{className:S().stock,children:[e.quantity," in Stock."]})]}),p?(0,r.jsx)("button",{className:"".concat(S().purchase," ").concat(S().added),disabled:e.quantity<1,onClick:function(t){t.preventDefault(),n.push("/cart")},children:"In Cart"}):(0,r.jsx)("button",{className:S().purchase,disabled:e.quantity<1,onClick:function(t){var n={product:{id:e.id,image:{url:e.image.url},price:e.price,quantity:e.quantity,title:e.title},quantity:f};(0,s.Xq)(n),(0,c.i)(JSON.parse(localStorage.getItem("cart")||"[]")),x(!0)},children:"Purchase"})]}):(0,r.jsx)("p",{className:S().nostock,children:"This product is out of stock."})]})]}),(0,r.jsxs)("div",{className:S().about,children:[(0,r.jsx)("h2",{children:"About this product"}),(0,r.jsx)("div",{className:S().line}),(0,r.jsx)("div",{className:S().aboutlist,dangerouslySetInnerHTML:{__html:e.about.html}})]})]}),(0,r.jsxs)("h1",{className:S().similar,children:["Browse more ",e.category.name]}),(0,r.jsx)("div",{className:S().grid,children:e.category.products.map((function(t){return(0,r.jsx)(u.Z,{product:t},t.id)}))})]})}},5221:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{ED:function(){return a},Xq:function(){return s},h2:function(){return o},iJ:function(){return c},xu:function(){return l}});var a=function(t){return Intl.NumberFormat(void 0,{style:"currency",currency:"EUR"}).format(t)},c=function(t,e){return Math.round(100*Math.abs((e-t)/t))},s=function(t){var e=JSON.parse(localStorage.getItem("cart")||"[]"),n=e.findIndex((function(e){return e.product.id===t.product.id}));-1!==n?e[n].quantity+=t.quantity:e=i(e).concat([t]),localStorage.setItem("cart",JSON.stringify(e))},o=function(t){var e=JSON.parse(localStorage.getItem("cart")||"[]").filter((function(e){return e.product.id!==t}));localStorage.setItem("cart",JSON.stringify(e))},l=function(t,e){var n=JSON.parse(localStorage.getItem("cart")||"[]"),r=n.findIndex((function(e){return e.product.id===t}));-1!==r&&(n[r].quantity=e,localStorage.setItem("cart",JSON.stringify(n)))}},5287:function(t){t.exports={product:"Product_product__03_Hw",details:"Product_details__OMEfA",image:"Product_image__F2aS0",info:"Product_info__NOQ1g",description:"Product_description__wwpon",oldprice:"Product_oldprice__0qnMb",sale:"Product_sale__DmkZb",quantity:"Product_quantity__TGWXW",stock:"Product_stock__V_HU4",nostock:"Product_nostock__EzFtr",purchase:"Product_purchase__MHGtk",added:"Product_added__CEtDa",about:"Product_about__DndcK",line:"Product_line__kP8f0",aboutlist:"Product_aboutlist__LZ0_K",grid:"Product_grid__tv0GF"}},8453:function(t){t.exports={card:"Card_card__xuvEK",image:"Card_image__ofF0E",info:"Card_info__ofjfT",flex:"Card_flex__OcFZ3",sale:"Card_sale__ODjp4",oldprice:"Card_oldprice__PRbPp",save:"Card_save__UXVQg",nostock:"Card_nostock__2zLWb"}},305:function(t){t.exports={flex:"Location_flex__9O4X5"}},3955:function(t){t.exports={link:"NavLink_link__Jy7vb"}},9921:function(t){t.exports={quantity:"Quantity_quantity__uL94C",value:"Quantity_value__y7L4t",lbtn:"Quantity_lbtn__PGq4l",rbtn:"Quantity_rbtn__iYa1z"}},4454:function(t){t.exports={seller:"Seller_seller__zZdBw"}},9008:function(t,e,n){t.exports=n(3121)}},function(t){t.O(0,[774,888,179],(function(){return e=8871,t(t.s=e);var e}));var e=t.O();_N_E=e}]);