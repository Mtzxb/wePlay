(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/account/addAccount"],{"115b":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{accountForm:{username:"",account:"",password:"",theserver:"",owner:"",remark:"",isOnline:0},accountFormArr:[["username","游戏昵称"],["account","账号"],["password","密码"],["theserver","服务器"],["owner","号主"],["remark","备注"]]}},methods:{formSubmit:function(){var n=this.accountForm,e=[{name:"account",type:"required",errmsg:"账号为必填项"},{name:"password",type:"required",errmsg:"密码为必填项"}],a=this.$validate.validate(n,e);if(!a.isOk)return t.showToast({icon:"none",title:a.errmsg}),!1;t.request({url:"/v1/addAccount",data:n,method:"POST",success:function(n){"添加成功"==n.data&&(t.showToast({icon:"none",title:n.data}),setTimeout(function(){t.switchTab({url:"/pages/account/index"})},1e3))}})},backList:function(){t.navigateBack({delta:1})},changeOnlie:function(t){0==this.accountForm.isOnline?this.accountForm.isOnline=1:this.accountForm.isOnline=0}}};n.default=e}).call(this,e("543d")["default"])},"3ff7":function(t,n,e){"use strict";e.r(n);var a=e("115b"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=r.a},7987:function(t,n,e){"use strict";var a=e("9e85"),r=e.n(a);r.a},"9e85":function(t,n,e){},dd0c:function(t,n,e){"use strict";(function(t){e("7aeb"),e("921b");a(e("66fd"));var n=a(e("edf7"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},e467:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r})},edf7:function(t,n,e){"use strict";e.r(n);var a=e("e467"),r=e("3ff7");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("7987");var c=e("2877"),o=Object(c["a"])(r["default"],a["a"],a["b"],!1,null,null,null);n["default"]=o.exports}},[["dd0c","common/runtime","common/vendor"]]]);