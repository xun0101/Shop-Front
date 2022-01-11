(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{3530:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"mt-5",attrs:{id:"admin"}},[r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("b-nav",{attrs:{pills:"",justified:""}},[r("b-nav-item",{attrs:{to:"/admin/products",exact:"","exact-active-class":"active"}},[e._v("商品管理")]),r("b-nav-item",{attrs:{to:"/admin/orders",exact:"","exact-active-class":"active"}},[e._v("訂單管理")])],1)],1),r("b-col",{attrs:{cols:"12"}},[r("router-view")],1)],1)],1)},n=[],i=r("2877"),o={},s=Object(i["a"])(o,a,n,!1,null,null,null);t["default"]=s.exports},aa93:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"adminproduct"}},[r("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-product",modifiers:{"modal-product":!0}}],staticClass:"my-3",attrs:{block:"",variant:"success"}},[e._v("新增")]),r("b-table",{ref:"table",attrs:{items:e.products,fields:e.fields},scopedSlots:e._u([{key:"cell(image)",fn:function(t){return[t.item.image?r("img",{staticStyle:{height:"50px"},attrs:{src:t.item.image}}):e._e()]}},{key:"cell(sell)",fn:function(t){return[e._v(e._s(t.item.sell?"v":""))]}},{key:"cell(action)",fn:function(t){return[r("b-btn",{attrs:{variant:"success"},on:{click:function(r){return e.editProduct(t.index)}}},[e._v("編輯")])]}}])}),r("b-modal",{attrs:{id:"modal-product",title:e.form._id.length>0?"編輯商品":"新增商品",centered:"","ok-variant":"success","ok-title":"送出","cancel-variant":"danger","cancel-title":"取消","ok-disabled":e.modalSubmitting,"cancel-disabled":e.modalSubmitting},on:{ok:e.submitModal,hidden:e.resetForm}},[r("b-form-group",{attrs:{label:"商品名稱","label-for":"input-name",description:"必填欄位","invalid-feedback":"商品名稱必填",state:e.state.name}},[r("b-form-input",{attrs:{id:"input-name",type:"text",required:"",placeholder:"請輸入商品名稱",state:e.state.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{label:"商品價格","label-for":"input-price",description:"必填欄位","invalid-feedback":"價格必須是 0 元以上",state:e.state.price}},[r("b-form-input",{attrs:{id:"input-price",type:"number",min:"0",required:"",placeholder:"請輸入商品價格",state:e.state.price},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",e._n(t))},expression:"form.price"}})],1),r("b-form-group",{attrs:{label:"商品分類","label-for":"input-category",description:"必填欄位","invalid-feedback":"分類必填",state:e.state.category}},[r("b-form-select",{attrs:{id:"input-category",required:"",options:e.categories,placeholder:"請輸入商品分類",state:e.state.category},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}})],1),r("b-form-group",{attrs:{label:"商品說明","label-for":"input-description",description:"必填欄位","invalid-feedback":"說明必填",state:e.state.description}},[r("b-form-textarea",{attrs:{id:"input-description",required:"",rows:"3","max-rows":"6",placeholder:"請輸入商品說明"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),r("b-form-group",{attrs:{label:"上架"}},[r("b-form-radio",{attrs:{value:!0},model:{value:e.form.sell,callback:function(t){e.$set(e.form,"sell",t)},expression:"form.sell"}},[e._v("上架")]),r("b-form-radio",{attrs:{value:!1},model:{value:e.form.sell,callback:function(t){e.$set(e.form,"sell",t)},expression:"form.sell"}},[e._v("下架")])],1),r("img-inputer",{attrs:{accept:"image/*",theme:"light",size:"large","bottom-text":"點選或拖拽圖片以修改","hover-text":"點選或拖拽圖片以修改",placeholder:"點選或拖拽選擇圖片","max-size":1024,"exceed-size-text":"檔案大小不能超過"},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1)],1)},n=[],i=r("5530"),o=r("1da1"),s=(r("96cf"),r("b0c0"),{data:function(){return{fields:[{key:"image",label:"圖片"},{key:"name",label:"名稱"},{key:"price",label:"價格"},{key:"category",label:"分類"},{key:"description",label:"說明"},{key:"sell",label:"上架"},{key:"action",label:"操作"}],products:[],modalSubmitting:!1,categories:[{text:"請選擇分類",value:""},"飾品","皮件","鞋子"],form:{name:"",price:null,description:"",image:null,sell:!1,category:"",_id:"",index:-1}}},computed:{state:function(){return{name:0!==this.form.name.length||null,price:null===this.form.price?null:this.form.price>=0,category:0!==this.form.category.length||null}}},methods:{submitModal:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n,o,s,l,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.preventDefault(),t.state.name&&t.state.price&&t.state.category){r.next=4;break}return t.$swal({icon:"error",title:"錯誤",text:"缺少必填欄位"}),r.abrupt("return");case 4:for(n in t.modalSubmitting=!0,a=new FormData,t.form)"_id"!==n&&a.append(n,t.form[n]);if(r.prev=7,0!==t.form._id.length){r.next=16;break}return r.next=11,t.api.post("/products",a,{headers:{authorization:"Bearer "+t.user.token}});case 11:o=r.sent,s=o.data,t.products.push(s.result),r.next=22;break;case 16:return r.next=18,t.api.patch("/products/"+t.form._id,a,{headers:{authorization:"Bearer "+t.user.token}});case 18:l=r.sent,c=l.data,t.products[t.form.index]=Object(i["a"])(Object(i["a"])({},t.form),{},{image:c.result.image}),t.$refs.table.refresh();case 22:t.$bvModal.hide("modal-product"),r.next=29;break;case 25:r.prev=25,r.t0=r["catch"](7),console.log(r.t0),t.$swal({icon:"error",title:"錯誤",text:r.t0.response.data.message});case 29:t.modalSubmitting=!1;case 30:case"end":return r.stop()}}),r,null,[[7,25]])})))()},resetForm:function(e){this.modalSubmitting?e.preventDefault():this.form={name:"",price:0,description:"",image:null,sell:!1,category:"",_id:"",index:-1}},editProduct:function(e){this.form=Object(i["a"])(Object(i["a"])({},this.products[e]),{},{image:null,index:e}),this.$bvModal.show("modal-product")}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/products/all",{headers:{authorization:"Bearer "+e.user.token}});case 3:r=t.sent,a=r.data,e.products=a.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),l=s,c=r("2877"),u=Object(c["a"])(l,a,n,!1,null,null,null);t["default"]=u.exports},b0c0:function(e,t,r){var a=r("83ab"),n=r("5e77").EXISTS,i=r("e330"),o=r("9bf2").f,s=Function.prototype,l=i(s.toString),c=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=i(c.exec),d="name";a&&!n&&o(s,d,{configurable:!0,get:function(){try{return u(c,l(this))[1]}catch(e){return""}}})},c732:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"text-center"},[e._v("請選擇管理項目")])},n=[],i=r("2877"),o={},s=Object(i["a"])(o,a,n,!1,null,null,null);t["default"]=s.exports},ec5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"adminorders"}},[r("b-table",{attrs:{items:e.orders,fields:e.fields},scopedSlots:e._u([{key:"cell(user)",fn:function(t){return[e._v(e._s(t.item.user.account))]}},{key:"cell(date)",fn:function(t){return[e._v(e._s(new Date(t.item.date).toLocaleString("zh-tw")))]}},{key:"cell(products)",fn:function(t){return[r("ul",e._l(t.item.products,(function(t){return r("li",{key:t._id},[e._v(e._s(t.product.name)+" x "+e._s(t.quantity))])})),0)]}}])})],1)},n=[],i=r("1da1"),o=(r("96cf"),{data:function(){return{orders:[],fields:[{key:"_id",label:"單號"},{key:"user",label:"使用者"},{key:"date",label:"日期"},{key:"products",label:"商品"}]}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/orders/all",{headers:{authorization:"Bearer "+e.user.token}});case 3:r=t.sent,a=r.data,e.orders=a.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"取得訂單失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),s=o,l=r("2877"),c=Object(l["a"])(s,a,n,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=admin.82bb2a6d.js.map