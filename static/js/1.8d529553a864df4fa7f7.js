webpackJsonp([1],{"0opn":function(t,e){},D9FY:function(t,e){},GPy5:function(t,e){},MI2U:function(t,e){},"P/bi":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("bOdI"),s=n.n(i),a=function(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1},o=function(t,e){for(var n=null,i=e[0],s=0;s<e.length;s++)n=Math.abs(t-i),Math.abs(t-e[s])<n&&(i=e[s]);return i};function r(t){var e=window.getComputedStyle(t,null).width;return"100%"===e||"auto"===e?0:parseInt(e,10)}var l={isNumber:function(t){return"number"==typeof t},of:function(t,e){if(l.isNumber(t)&&l.isNumber(e))return t/100*e},from:function(t,e){if(l.isNumber(t)&&l.isNumber(e))return t/e*100}},c=/\s+/,u=Object.prototype.toString,h=function(t){return new d(t)};function d(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}d.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array();return~a(e,t)||e.push(t),this.el.className=e.join(" "),this},d.prototype.remove=function(t){if("[object RegExp]"===u.call(t))return this.removeMatching(t);if(this.list)return this.list.remove(t),this;var e=this.array(),n=a(e,t);return~n&&e.splice(n,1),this.el.className=e.join(" "),this},d.prototype.removeMatching=function(t){for(var e=this.array(),n=0;n<e.length;n++)t.test(e[n])&&this.remove(e[n]);return this},d.prototype.toggle=function(t,e){return this.list?(void 0!==e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):(void 0!==e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},d.prototype.array=function(){var t=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(c);return""===t[0]&&t.shift(),t},d.prototype.has=d.prototype.contains=function(t){return this.list?this.list.contains(t):!!~a(this.array(),t)};var p=m;function m(t){if(t)return function(t){for(var e in m.prototype)t[e]=m.prototype[e];return t}(t)}m.prototype.on=m.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},m.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},m.prototype.off=m.prototype.removeListener=m.prototype.removeAllListeners=m.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},!arguments.length)return this._callbacks={},this;var n,i=this._callbacks["$"+t];if(!i)return this;if(1===arguments.length)return delete this._callbacks["$"+t],this;for(var s=0;s<i.length;s++)if((n=i[s])===e||n.fn===e){i.splice(s,1);break}return this},m.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n)for(var i=0,s=(n=n.slice(0)).length;i<s;++i)n[i].apply(this,e);return this},m.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},m.prototype.hasListeners=function(t){return!!this.listeners(t).length};var f={bind:function(t,e,n,i){var s=window.addEventListener?"addEventListener":"attachEvent",a="addEventListener"!==s?"on":"";return t[s](a+e,n,i||!1),n},unbind:function(t,e,n,i){var s="addEventListener"!=(window.addEventListener?"addEventListener":"attachEvent")?"on":"",a=window.removeEventListener?"removeEventListener":"detachEvent";return t[a](s+e,n,i||!1),n}};function v(t,e){this.obj=e||{},this.el=t}p(v.prototype),v.prototype.bind=function(){var t=this.obj,e=this;function n(s){t.onmouseup&&t.onmouseup(s),f.unbind(document,"mousemove",i),f.unbind(document,"mouseup",n),e.emit("up",s)}function i(n){t.onmousemove&&t.onmousemove(n),e.emit("move",n)}return e.down=function(s){t.onmousedown&&t.onmousedown(s),f.bind(document,"mouseup",n),f.bind(document,"mousemove",i),e.emit("down",s)},f.bind(this.el,"mousedown",e.down),this},v.prototype.unbind=function(){f.unbind(this.el,"mousedown",this.down),this.down=null};var g={};"undefined"!=typeof window&&(g=window.Element.prototype);var y=g.matches||g.webkitMatchesSelector||g.mozMatchesSelector||g.msMatchesSelector||g.oMatchesSelector,b=function(t,e){if(!t||1!==t.nodeType)return!1;if(y)return y.call(t,e);for(var n=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelectorAll(t)}(e,t.parentNode),i=0;i<n.length;++i)if(n[i]===t)return!0;return!1};var _=function(t,e,n){n=n||document.documentElement;for(;t&&t!==n;){if(b(t,e))return t;t=t.parentNode}return b(t,e)?t:null};var x=w;function w(t,e){if(!(this instanceof w))return new w(t,e);if(!t)throw new Error("element required");if(!e)throw new Error("object required");this.el=t,this.obj=e,this._events={}}function C(t,e){this.element=t,this.options=e||{},this.slider=this.create("span","range-bar"),this.hasAppend=!1,null!==this.element&&"text"===this.element.type&&this.init(),this.options.step&&this.step(this.slider.offsetWidth||this.options.initialBarWidth,r(this.handle)),this.setStart(this.options.start)}w.prototype.sub=function(t,e,n){this._events[t]=this._events[t]||{},this._events[t][e]=n},w.prototype.bind=function(t,e){var n=function(t){var e=t.split(/ +/);return{name:e.shift(),selector:e.join(" ")}}(t),i=this.el,s=this.obj,a=n.name;e=e||"on"+a;var o=[].slice.call(arguments,2),r=function(){var t=[].slice.call(arguments).concat(o);s[e].apply(s,t)};return n.selector?r=function(t,e,n,i,s){return f.bind(t,n,function(n){var s=n.target||n.srcElement;n.delegateTarget=_(s,e,!0,t),n.delegateTarget&&i.call(t,n)},s)}(i,n.selector,a,r):f.bind(i,a,r),this.sub(a,e,r),r},w.prototype.unbind=function(t,e){if(0===arguments.length)return this.unbindAll();if(1===arguments.length)return this.unbindAllOf(t);var n=this._events[t];if(n){var i=n[e];i&&f.unbind(this.el,t,i)}},w.prototype.unbindAll=function(){for(var t in this._events)this.unbindAllOf(t)},w.prototype.unbindAllOf=function(t){var e=this._events[t];if(e)for(var n in e)this.unbind(t,n)},C.prototype.setStart=function(t){var e=null===t?this.options.min:t,n=l.from(e-this.options.min,this.options.max-this.options.min)||0,i=l.of(n,this.slider.offsetWidth-this.handle.offsetWidth),s=this.options.step?o(i,this.steps):i;this.setPosition(s),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},C.prototype.setStep=function(){this.step(r(this.slider)||this.options.initialBarWidth,r(this.handle))},C.prototype.setPosition=function(t){this.handle.style.left=t+"px",this.slider.querySelector(".range-quantity").style.width=t+"px"},C.prototype.onmousedown=function(t){this.options.onTouchstart(t),t.touches&&(t=t.touches[0]),this.startX=t.clientX,this.handleOffsetX=this.handle.offsetLeft,this.restrictHandleX=this.slider.offsetWidth-this.handle.offsetWidth,this.unselectable(this.slider,!0)},C.prototype.changeEvent=function(t){if("function"!=typeof Event&&document.fireEvent)this.element.fireEvent("onchange");else{var e=document.createEvent("HTMLEvents");e.initEvent("change",!1,!0),this.element.dispatchEvent(e)}},C.prototype.onmousemove=function(t){t.preventDefault(),t.touches&&(t=t.touches[0]);var e=this.handleOffsetX+t.clientX-this.startX,n=this.steps?o(e,this.steps):e;e<=0?this.setPosition(0):e>=this.restrictHandleX?this.setPosition(this.restrictHandleX):this.setPosition(n),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},C.prototype.unselectable=function(t,e){h(this.slider).has("unselectable")||!0!==e?h(this.slider).remove("unselectable"):h(this.slider).add("unselectable")},C.prototype.onmouseup=function(t){this.options.onTouchend(t),this.unselectable(this.slider,!1)},C.prototype.disable=function(t){(this.options.disable||t)&&(this.mouse.unbind(),this.touch.unbind()),this.options.disable&&(this.options.disableOpacity&&(this.slider.style.opacity=this.options.disableOpacity),h(this.slider).add("range-bar-disabled"))},C.prototype.init=function(){this.hide(),this.append(),this.bindEvents(),this.checkValues(this.options.start),this.setRange(this.options.min,this.options.max),this.disable()},C.prototype.reInit=function(t){this.options.start=t.value,this.options.min=t.min,this.options.max=t.max,this.options.step=t.step,this.disable(!0),this.init()},C.prototype.checkStep=function(t){return t<0&&(t=Math.abs(t)),this.options.step=t,this.options.step},C.prototype.setValue=function(t,e){var n=l.from(parseFloat(t),e);if("0px"===t||0===e)i=this.options.min;else{var i=l.of(n,this.options.max-this.options.min)+this.options.min;(i=this.options.decimal?Math.round(100*i)/100:Math.round(i))>this.options.max&&(i=this.options.max)}var s;s=this.element.value!==i,this.element.value=i,this.options.callback(i),s&&this.changeEvent()},C.prototype.checkValues=function(t){t<this.options.min&&(this.options.start=this.options.min),t>this.options.max&&(this.options.start=this.options.max),this.options.min>=this.options.max&&(this.options.min=this.options.max)},C.prototype.step=function(t,e){for(var n=t-e,i=l.from(this.checkStep(this.options.step),this.options.max-this.options.min),s=l.of(i,n),a=[],o=0;o<=n;o+=s)a.push(o);this.steps=a;for(var r=10;r>=0;r--)this.steps[a.length-r]=n-s*r;return this.steps},C.prototype.create=function(t,e){var n=document.createElement(t);return n.className=e,n},C.prototype.insertAfter=function(t,e){t.parentNode.insertBefore(e,t.nextSibling)},C.prototype.setRange=function(t,e){"number"!=typeof t||"number"!=typeof e||this.options.hideRange||(this.slider.querySelector(".range-min").innerHTML=this.options.minHTML||t,this.slider.querySelector(".range-max").innerHTML=this.options.maxHTML||e)},C.prototype.generate=function(){var t={handle:{type:"span",selector:"range-handle"},min:{type:"span",selector:"range-min"},max:{type:"span",selector:"range-max"},quantity:{type:"span",selector:"range-quantity"}};for(var e in t)if(t.hasOwnProperty(e)){var n=this.create(t[e].type,t[e].selector);this.slider.appendChild(n)}return this.slider},C.prototype.append=function(){if(!this.hasAppend){var t=this.generate();this.insertAfter(this.element,t)}this.hasAppend=!0},C.prototype.hide=function(){this.element.style.display="none"},C.prototype.bindEvents=function(){this.handle=this.slider.querySelector(".range-handle"),this.touch=x(this.handle,this),this.touch.bind("touchstart","onmousedown"),this.touch.bind("touchmove","onmousemove"),this.touch.bind("touchend","onmouseup"),this.mouse=new v(this.handle,this),this.mouse.bind()};var V={callback:function(){},decimal:!1,disable:!1,disableOpacity:null,hideRange:!1,min:0,max:100,start:null,step:null,vertical:!1},k=function(t,e){for(var n in e=e||{},V)null==e[n]&&(e[n]=V[n]);return new C(t,e)},S=(Boolean,Number,Number,String,String,Number,Number,Boolean,Number,Number,Number,{name:"range",props:{decimal:Boolean,value:{default:0,type:Number},min:{type:Number,default:0},minHTML:String,maxHTML:String,max:{type:Number,default:100},step:{type:Number,default:1},disabled:Boolean,disabledOpacity:Number,rangeBarHeight:{type:Number,default:1},rangeHandleHeight:{type:Number,default:30}},created:function(){this.currentValue=this.value},mounted:function(){var t=this,e=this;this.$nextTick(function(){var n={callback:function(t){e.currentValue=t},decimal:t.decimal,start:t.currentValue,min:t.min,max:t.max,minHTML:t.minHTML,maxHTML:t.maxHTML,disable:t.disabled,disabledOpacity:t.disabledOpacity,initialBarWidth:window.getComputedStyle(t.$el.parentNode).width.replace("px","")-80,onTouchstart:function(t){e.$emit("on-touchstart",t)},onTouchend:function(t){e.$emit("on-touchend",t)}};0!==t.step&&(n.step=t.step),t.range=new k(t.$el.querySelector(".vux-range-input"),n);var i=(t.rangeHandleHeight-t.rangeBarHeight)/2;t.$el.querySelector(".range-handle").style.top="-"+i+"px",t.$el.querySelector(".range-bar").style.height=t.rangeBarHeight+"px",t.handleOrientationchange=function(){t.update()},window.addEventListener("orientationchange",t.handleOrientationchange,!1)})},methods:{update:function(){console.log("update",this.currentValue);var t=this.currentValue;t<this.min&&(t=this.min),t>this.max&&(t=this.max),this.range.reInit({min:this.min,max:this.max,step:this.step,value:t}),this.currentValue=t,this.range.setStart(this.currentValue),this.range.setStep()}},data:function(){return{currentValue:0}},watch:{currentValue:function(t){this.range&&this.range.setStart(t),this.$emit("input",t),this.$emit("on-change",t)},value:function(t){this.currentValue=t},min:function(){this.update()},step:function(){this.update()},max:function(){this.update()}},beforeDestroy:function(){window.removeEventListener("orientationchange",this.handleOrientationchange,!1)}}),P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-range-input-box",staticStyle:{position:"relative","margin-right":"30px","margin-left":"50px"}},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentValue,expression:"currentValue",modifiers:{number:!0}}],staticClass:"vux-range-input",domProps:{value:t.currentValue},on:{input:function(e){e.target.composing||(t.currentValue=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])},staticRenderFns:[]};var A=n("VU/8")(S,P,!1,function(t){n("D9FY")},null,null).exports,I=n("2zJw"),T=n.n(I),N=n("IKLH"),E=n.n(N),F=n("g6T9"),$=n("mMLd"),q=n.n($),M=n("rD1q"),O=n.n(M),B=(F.a,Boolean,Number,Number,{data:function(){return{showPositionValue:!1,toastContent:"",title:"选择付款方式",butText:"下一步",btc:T.a,payment2:O.a,payment1:q.a,close:E.a,checkIcon:!1,isShow:!1,isConfirmPayment:!1,activeIndex:-1,pay_type:"",order_id:0,isShowComponents:!0,list:[]}},components:{confirmPayment:F.a},props:{isBuyingPatterns:{type:Boolean},goods_id:Number,buy_num:Number},created:function(){this.getPayment()},mounted:function(){},methods:{getPayment:function(){var t=this,e={sign:t.$store.state.user.sign,access_token:t.$store.state.user.token};t.$request({method:"POST",url:"/order/payment",data:t.$qs.stringify(e)}).then(function(e){t.list=e.data}).catch(function(t){console.log(t)})},getPaycheck:function(t,e){this.activeIndex=t,this.pay_type=e},closeFun:function(){this.$emit("closeFun")},isCloseFun:function(){this.isConfirmPayment=!1,this.$router.go(0)},submit:function(){var t=this,e={goods_id:t.goods_id,buy_num:t.buy_num,pay_type:t.pay_type,sign:t.$store.state.user.sign,access_token:t.$store.state.user.token};""!=this.pay_type?t.$request({method:"POST",url:"/order/create-order",data:t.$qs.stringify(e)}).then(function(e){t.order_id=e.data.order_id,1==t.pay_type||2==t.pay_type||7==t.pay_type?(t.isConfirmPayment=!0,t.isShowComponents=!1):t.$router.push({name:"affirmPay",params:{id:e.data.order_id}})}).catch(function(t){console.log(t)}):(t.showPositionValue=!0,t.toastContent="请选择支付方式")}}}),D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isBuyingPatterns,expression:"isBuyingPatterns"}],attrs:{id:"buyingPatterns"}},[t.isShowComponents?n("div",{staticClass:"buyingPatternsContent"},[n("div",{staticClass:"main"},[n("div",{staticClass:"titleTxt fontSize34"},[t._v("\n        "+t._s(t.title)+"\n        "),n("i",{on:{click:function(e){return t.closeFun()}}},[n("img",{attrs:{src:t.close,alt:""}})])]),t._v(" "),n("div",{staticClass:"formContent"},[t._l(t.list,function(e,i){return[n("div",{key:i,staticClass:"contentTxt"},[n("div",{staticClass:"check-icon",on:{click:function(n){return t.getPaycheck(i,e.payment_id)}}},[n("span",{staticClass:"paypaymentIcon"},[n("img",{ref:"index",refInFor:!0,attrs:{src:t.activeIndex==i?t.payment1:t.payment2,alt:""}})]),t._v(" "),n("div",{staticClass:"payName"},[n("img",{attrs:{src:e.icon,alt:""}}),t._v(t._s(e.payment_name)+"\n              ")]),t._v(" "),void 0!=e.balance?n("div",[n("div",{staticClass:"currencyVal"},[n("span",[t._v("可用："),n("i",[t._v("\n                      "+t._s(e.balance)+"\n                    ")])]),t._v(" "),n("i",[t._v("≈ ¥"+t._s(e.balance_rmb))])])]):t._e()])])]}),t._v(" "),n("div",{staticClass:"Xbut"},[n("x-button",{attrs:{type:"warn",text:t.butText},nativeOn:{click:function(e){return t.submit(e)}}})],1)],2)])]):t._e(),t._v(" "),n("toast",{attrs:{type:"text","is-show-mask":"",text:t.toastContent,position:"middle"},model:{value:t.showPositionValue,callback:function(e){t.showPositionValue=e},expression:"showPositionValue"}}),t._v(" "),n("confirm-payment",{attrs:{isConfirmPayment:t.isConfirmPayment,order_id:t.order_id},on:{isCloseFun:t.isCloseFun}})],1)},staticRenderFns:[]};var L=n("VU/8")(B,D,!1,function(t){n("xPZk")},"data-v-b3f74b36",null).exports,H=n("G/2H"),R=n.n(H),X=n("gM81"),U={data:function(){var t;return t={loading:R.a,isShow:!0,showPositionValue:!1,toastContent:"",topTitle:"购买",rangedata:10,rangedataVal:0,agreed:!1,isBuyingPatterns:!1,isdisabled:!0},s()(t,"agreed",!1),s()(t,"placeholderStart_num",""),s()(t,"form",{goods_id:0,stock:0,start_num:10,price:"0",contract_cycle:"0",exchange:"0"}),s()(t,"newVal",""),s()(t,"newValIndex",0),s()(t,"newValData",""),s()(t,"newValIndexType",0),t},filters:{uppercase:function(t){return t?t.toUpperCase():""}},components:{Range:A,buyingPatterns:L},created:function(){this.$route.params.id?this.getDetails():this.$nextTick(function(){X.a.get("order-detail")&&(this.form=X.a.get("order-detail"),this.isShow=!1)})},computed:{},methods:{getRange:function(){this.newValIndex++,this.newValIndex>=2?this.newValIndex=0:0!=Number(this.rangedataVal)&&(console.log("newValIndex:"+this.newValIndex),1==this.newValIndexType?this.newValIndexType=0:this.rangedata=parseInt(this.form.stock*(this.rangedataVal/100)))},getInp:function(t){this.newValData=t,this.newValIndex++,this.form.stock<1?this.rangedataVal=0:this.newValIndex>=2?1==this.newValIndex&&0!=this.newValData.length&&this.newValData.length<t.length?(console.log("newValData.length:"+this.newValData.length+"val.length:"+t.length),this.newValIndex=0,this.rangedataVal=t/this.form.stock*100):this.newValIndex=0:(this.rangedataVal=t/this.form.stock*100,this.newVal=this.rangedataVal,this.newValIndexType=1)},getCheckIcon:function(){1==this.agreed?(this.isdisabled=!1,this.agreed):(this.isdisabled=!0,this.agreed)},getDetails:function(){var t=this,e={sign:t.$store.state.user.sign,access_token:t.$store.state.user.token,goods_id:t.$route.params.id};t.$request({method:"POST",url:"/goods/goods-detail",data:t.$qs.stringify(e)}).then(function(e){console.log(e),0==e.code&&(t.placeholderStart_num=e.data.start_num+"份起购",t.rangedata=e.data.start_num,t.form=e.data,t.isShow=!1,X.a.set("order-detail",t.form))}).catch(function(t){console.log(t)})},closeFun:function(){this.isBuyingPatterns=!1},submit:function(){this.rangedata<this.form.start_num?(this.showPositionValue=!0,this.toastContent="购买数量最少"+this.form.start_num+"份，请重新操作"):Number(this.rangedata)>Number(this.form.stock)?(this.showPositionValue=!0,this.toastContent="购买数量超过库存，请重新操作"):0==this.isBuyingPatterns?this.isBuyingPatterns=!0:this.isBuyingPatterns=!1},getXY:function(){this.$router.push("/xieYi")}}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"payProduct"},[n("div",{staticClass:"componentsName"},[n("buying-patterns",{attrs:{isBuyingPatterns:t.isBuyingPatterns,goods_id:t.form.goods_id,buy_num:Number(t.rangedata)},on:{closeFun:t.closeFun}})],1),t._v(" "),n("div",{staticClass:"mainInfo"},[n("div",{staticClass:"productInfo"},[n("div",{staticClass:"item"},[n("span",{staticClass:"title"},[t._v("售价")]),n("span",{staticClass:"dataVal"},[t._v("¥"+t._s(parseFloat(t.form.price))+"/份")])]),t._v(" "),n("div",{staticClass:"item"},[n("span",{staticClass:"title"},[t._v("库存")]),n("span",{staticClass:"dataVal"},[t._v(t._s(t.form.stock)+"份")])]),t._v(" "),n("div",{staticClass:"numberData"},[n("span",{staticClass:"title"},[t._v("数量")]),t._v(" "),n("div",{staticClass:"dataVal numberVal"},[n("x-input",{attrs:{type:"number",placeholder:t.placeholderStart_num},on:{"on-change":function(e){return t.getInp(t.rangedata)}},model:{value:t.rangedata,callback:function(e){t.rangedata=e},expression:"rangedata"}},[n("i",{attrs:{slot:"right"},slot:"right"},[t._v("份")])])],1)]),t._v(" "),n("div",{staticClass:"numberVal_two"},[n("div",{staticClass:"tip"},[t._v("\n          预计日收益"+t._s((t.form.estimated_revenue*(t.rangedata/1024)).toFixed(8))+t._s(t._f("uppercase")(t.form.coin_type))+"≈¥\n          "+t._s((t.form.estimated_revenue*(t.rangedata/1024)*this.$store.state.user.bct_cnc).toFixed(4))+"\n        ")]),t._v(" "),n("div",{staticClass:"rangedata"},[n("range",{attrs:{rangeBarHeight:5},on:{"on-change":t.getRange},model:{value:t.rangedataVal,callback:function(e){t.rangedataVal=e},expression:"rangedataVal"}}),t._v(" "),n("span",[n("flexbox",[n("flexbox-item",[n("div",{staticClass:"flex-demo"},[t._v("0")])]),t._v(" "),n("flexbox-item",[n("div",{staticClass:"flex-demo"},[t._v("20%")])]),t._v(" "),n("flexbox-item",[n("div",{staticClass:"flex-demo"},[t._v("40%")])]),t._v(" "),n("flexbox-item",[n("div",{staticClass:"flex-demo"},[t._v("60%")])]),t._v(" "),n("flexbox-item",[n("div",{staticClass:"flex-demo"},[t._v("80%")])]),t._v(" "),n("flexbox-item",[n("div",{staticClass:"flex-demo"},[t._v("100%")])])],1)],1)],1)]),t._v(" "),n("div",{staticClass:"total"},[n("span",{staticClass:"title SumCla"},[t._v("总计")]),t._v(" "),n("div",{staticClass:"fontSize46"},[t._v("\n          "+t._s(parseFloat((t.form.price*t.rangedata).toFixed(8)))),n("i",{staticClass:"fontSize30"},[t._v("元")])]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"fontSize26"},[t._v("\n          ≈$"+t._s(parseFloat(((t.form.price*t.rangedata).toFixed(8)/t.form.exchange).toFixed(8)))+"\n        ")])]),t._v(" "),n("div",{staticClass:"item marginTop"},[n("span",{staticClass:"title"},[t._v("获赠")]),n("span",{staticClass:"dataVal"},[t._v(t._s(parseFloat((t.form.price*t.rangedata*2e-4*t.form.contract_cycle).toFixed(8)))+"算盘")])])]),t._v(" "),n("div",{staticClass:"isAgreed"},[n("check-icon",{attrs:{value:t.agreed},on:{"update:value":function(e){t.agreed=e}},nativeOn:{click:function(e){return t.getCheckIcon(e)}}},[t._v("\n        我已阅读并同意\n      ")]),t._v(" "),n("i",{staticClass:"agreement",on:{click:t.getXY}},[t._v("《比特云算矿机租赁协议》")])],1),t._v(" "),n("div",{staticClass:"butCss"},[n("x-button",{attrs:{type:"warn",text:"立即购买",disabled:t.isdisabled},nativeOn:{click:function(e){return t.submit(e)}}})],1)]),t._v(" "),n("toast",{attrs:{type:"text","is-show-mask":"",text:t.toastContent,position:"middle"},model:{value:t.showPositionValue,callback:function(e){t.showPositionValue=e},expression:"showPositionValue"}}),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"loadingImg",attrs:{src:t.loading,alt:""}})],1)},staticRenderFns:[]};var j=n("VU/8")(U,W,!1,function(t){n("0opn"),n("MI2U")},"data-v-0d4081ea",null);e.default=j.exports},bOdI:function(t,e,n){"use strict";e.__esModule=!0;var i,s=n("C4MV"),a=(i=s)&&i.__esModule?i:{default:i};e.default=function(t,e,n){return e in t?(0,a.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},g6T9:function(t,e,n){"use strict";var i=n("IKLH"),s=n.n(i),a=(Boolean,Number,{data:function(){return{showPositionValue:!1,toastContent:"",title:"确认付款",butText:"确认支付",close:s.a,checkIcon:!1,list:{order_id:"",pay_total:"",pay_coin_type:"",cell1:"订单金额",cell2:"订单信息",cell3:"付款方式"}}},props:{isConfirmPayment:{type:Boolean},order_id:Number},updated:function(){this.getData()},methods:{getPay:function(){var t=this,e={order_id:t.order_id,sign:t.$store.state.user.sign,access_token:t.$store.state.user.token};t.$request({method:"POST",url:"/order/confirm-order",data:t.$qs.stringify(e)}).then(function(e){0==e.code?(t.showPositionValue=!0,t.toastContent=e.errmsg,setTimeout(function(){t.$router.push({name:"myOrder",params:{index:"one"}})},500)):(t.showPositionValue=!0,t.toastContent=e.errmsg)}).catch(function(t){console.log(t)})},getData:function(){var t=this,e={order_id:t.order_id,sign:t.$store.state.user.sign,access_token:t.$store.state.user.token};t.$request({method:"POST",url:"/order/order-detail",data:t.$qs.stringify(e)}).then(function(e){t.list.pay_coin_type=e.data.pay_coin_type.toUpperCase(),t.list.pay_total=e.data.pay_total}).catch(function(t){console.log(t)})},isCloseFun:function(){this.$emit("isCloseFun")}}}),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isConfirmPayment,expression:"isConfirmPayment"}],attrs:{id:"confirmPayment"}},[n("div",{staticClass:"main"},[n("div",{staticClass:"titleTxt fontSize34"},[t._v("\n      "+t._s(t.title)+"\n      "),n("i",{on:{click:function(e){return t.isCloseFun()}}},[n("img",{attrs:{src:t.close,alt:""}})])]),t._v(" "),n("div",{staticClass:"formContent fontSize30"},[n("div",{staticClass:"Xcell"},[n("cell",{staticClass:"payTotal",attrs:{title:t.list.cell1,value:t.list.pay_total+t.list.pay_coin_type}}),t._v(" "),n("cell",{attrs:{title:t.list.cell2,value:"[比特云算支付订单]"+t.order_id}}),t._v(" "),n("cell",{attrs:{title:t.list.cell3,"is-link":!0,value:t.list.pay_coin_type+"余额支付"}})],1),t._v(" "),n("toast",{attrs:{type:"text","is-show-mask":"",text:t.toastContent,position:"middle"},model:{value:t.showPositionValue,callback:function(e){t.showPositionValue=e},expression:"showPositionValue"}}),t._v(" "),n("div",{staticClass:"Xbut"},[n("x-button",{attrs:{type:"warn",text:t.butText},nativeOn:{click:function(e){return t.getPay(e)}}})],1)],1)])])},staticRenderFns:[]};var r=n("VU/8")(a,o,!1,function(t){n("GPy5")},null,null);e.a=r.exports},gM81:function(t,e,n){"use strict";var i=n("mvHQ"),s=n.n(i),a={set:function(t,e){localStorage.setItem(t,s()(e))},get:function(t){return JSON.parse(localStorage.getItem(t))},remove:function(t){localStorage.removeItem(t)}};e.a=a},mMLd:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAB6ElEQVRIS7WVPYgTURSFz5mQWGmvnY2gCP4giGCjWOkuC1roWlokc0kIk9HKn8qfSiZDyPJeUljKNgqyaiXaCCKIiyAiNnbaa+XIzJUXdmQcQxKUee0997uX++47j5hzrLX7ABxQ1V1OSvILgHe+73+YlcppwcFgsK3RaLRV1QdQB/AKgAO64wocA/CTpE2SZK3b7f4oc/4Cj0ajo1mWrQPYTNP0VqfTeTut+HA4PFyr1a6TPEhytdVqvS7q/gCPx+NzWZatAbjk+/7TeWNycWvtaQD3PM9rN5vNB3nOb7DrVFUfqeopEXm/CDTXGGP2k3xGciXvfAJ2M63X6x9JthfttFx4q/NhkiR73cwnYGttqKrHReRsOSGO46Usy0KSR1xMVd94nhcFQfC4rDXGPCT50vf9aAI2xnwCcF5ENoviOI5vq+rVaWMheScIgmvF2NaFrovIHro9VdUnIrK7BF1S1Y2Zu0oulzs3xnwmecaBV1V1WUQuFiFRFD0neWIWWFVfhGF4sqgxxtwnuUFjzGUAO0XkSlHQ7/e/Adg+Zzu+93q9HSXwXQBfqwNXNorKLi9ftzRNL5R94b/WrdIHUtmTdl1XYkL5HlZimzm8aPQAbpb9o2CVhwDcWMjo86RKvqYpPvtPn+kvt01YvMsSM+8AAAAASUVORK5CYII="},rD1q:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABmElEQVRIS7WVsUtbURTGvy/hpX+D3VwEi1DtIoKjU0UK7aDp2CG5h4QM6qhTO4pDeOHeZOgoWRRE2qljQVwMhVJKFzf9G/rkvSM35ElMY5M2eXe95/7Ox3fP/S4xYjnnngF4rqpPfSnJawDfjDE//naUwzbr9fqTQqFQUVUDIABwDsAD/fINVgDcknRRFDVqtdrvQc4f4GazuZwkSRtAJ47jD9Vq9XJY8zAMX+Tz+T2SiySL5XL5or/uAbjVar1JkqQB4J0x5vMom/y+c+4lgI+5XK5SKpWO0zP3YK9UVU9VdU1Evo8DTWustQskv5B8lSrvgr2nQRD8JFkZV+lg457yMIqiee95F+yc21bVVRF5/S9KB2uttSckvxpjDrtga+0vAJsi0pkE3LvQtojM0c+pqn4SkdlJoH1+X5Fc9+Ciqm6IyNspgY9IntFauwNgRkR2pwQ+AHCTHTgzKzK7vHTc4jjeeiwXxvX+wbhl+kAye9JedSYhlHqYSWym8P6gB/D+sfyw1i4B2B8r6FN4Jl/TkJz9r8/0DiEGBrxVo2LIAAAAAElFTkSuQmCC"},xPZk:function(t,e){}});
//# sourceMappingURL=1.8d529553a864df4fa7f7.js.map