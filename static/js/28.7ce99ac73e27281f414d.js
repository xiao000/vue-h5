webpackJsonp([28],{H1JS:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{topTitle:"公告详情",list:"",title:"",add_time:""}},filters:{formatDate:function(t){var e=new Date(1e3*t),i=e.getFullYear(),n=e.getMonth()+1;n=n<10?"0"+n:n;var a=e.getDate();a=a<10?"0"+a:a;var s=e.getHours();s=s<10?"0"+s:s;var r=e.getMinutes();r=r<10?"0"+r:r;var o=e.getSeconds();return i+"-"+n+"-"+a+" "+s+":"+r+":"+(o=o<10?"0"+o:o)}},mounted:function(){this.getNotice()},methods:{getNotice:function(){var t=this;t.$request({method:"POST",url:"/index/notice"}).then(function(e){e.data.forEach(function(e){e.notice_id==t.$route.params.id&&(t.list=e.content.replace(/<img/g,"<img style='max-width:100%;height:auto;'"),t.title=e.title,t.add_time=e.add_time)})}).catch(function(t){})}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"noticeDetails"},[i("h5",[t._v(t._s(t.title))]),t._v(" "),i("span",{staticClass:"time"},[t._v(t._s(t.add_time))]),t._v(" "),i("div",{domProps:{innerHTML:t._s(t.list)}},[t._v(t._s(t.list))])])},staticRenderFns:[]};var s=i("VU/8")(n,a,!1,function(t){i("uY17")},"data-v-9c4fcd2e",null);e.default=s.exports},uY17:function(t,e){}});
//# sourceMappingURL=28.7ce99ac73e27281f414d.js.map