(window["webpackJsonpexam-back"]=window["webpackJsonpexam-back"]||[]).push([[19],{785:function(e,t,a){},818:function(e,t,a){"use strict";a.r(t);var r,n,i,l,c,s,o,m,d=a(91),u=(a(159),a(78)),p=(a(736),a(734)),h=a(46),y=a(47),f=a(49),v=a(48),b=a(50),E=(a(342),a(68)),O=a(1),g=a.n(O),I=(a(785),a(343),a(123)),_=(a(216),a(80)),w=(a(724),a(723)),j=a(97),U=a(149),N=a.n(U),k=w.a.Option,S=E.a.create()(r=function(e){function t(){var e,a;Object(h.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){if(!e){t.addPassWord=N.a.encode(t.addPassWord,"xxx"),console.log(t,"values"),Object(j.f)(t).then((function(e){1===e.code&&(_.a.success("\u6dfb\u52a0\u6210\u529f"),a.props.form.resetFields())})).catch((function(e){_.a.error("\u6b64\u7528\u6237\u5df2\u5b58\u5728")}))}}))},a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return g.a.createElement(E.a,{onSubmit:this.handleSubmit},g.a.createElement(E.a.Item,{className:"addUserItem"},t("addUserName",{rules:[{required:!0,message:"Please input your username!"}]})(g.a.createElement(I.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}))),g.a.createElement(E.a.Item,{className:"addUserItem"},t("addPassWord",{rules:[{required:!0,message:"Please input your password!"}]})(g.a.createElement(I.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),g.a.createElement(E.a.Item,{className:"addUserItem"},t("identityId",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8eab\u4efd!"}]})(g.a.createElement(w.a,{placeholder:"\u8bf7\u9009\u62e9\u8eab\u4efd"},this.props.identityId?this.props.identityId.map((function(e){return g.a.createElement(k,{key:e.id,value:e.type_id},e.identity)})):null))),g.a.createElement(E.a.Item,null,g.a.createElement(u.a,{type:"primary",htmlType:"submit"},"\u786e\u5b9a"),g.a.createElement(u.a,{style:{marginLeft:8},onClick:function(){e.props.form.resetFields()}},"\u91cd\u7f6e")))}}]),t}(O.Component))||r,A=a(36),F=a.n(A),D=a(59),C=w.a.Option,P=E.a.create()(n=function(e){function t(){var e,a;Object(h.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).state={userName:[]},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(){var e=Object(D.a)(F.a.mark((function e(t,r){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=5;break}return e.next=3,Object(j.O)(r);case 3:(n=e.sent).code?(_.a.success(n.msg),a.props.form.resetFields()):_.a.error(n.msg);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(j.P)().then((function(t){e.setState({userName:t})}))}},{key:"render",value:function(){var e=this,t=(this.state.userName,this.props.form.getFieldDecorator);return g.a.createElement(E.a,{onSubmit:this.handleSubmit},g.a.createElement(E.a.Item,{className:"addUserItem"},t("addUserName",{rules:[{required:!0,message:"Please input your username!"}]})(g.a.createElement(I.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}))),g.a.createElement(E.a.Item,{className:"addUserItem"},t("identityId",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8eab\u4efdid"}]})(g.a.createElement(w.a,{placeholder:"\u8bf7\u9009\u62e9\u8eab\u4efdid"},this.props.identityId?this.props.identityId.map((function(e){return g.a.createElement(C,{key:e.id,value:e.type_id},e.identity)})):null))),g.a.createElement(E.a.Item,null,g.a.createElement(u.a,{type:"primary",htmlType:"submit"},"\u786e\u5b9a"),g.a.createElement(u.a,{style:{marginLeft:8},onClick:function(){e.props.form.resetFields()}},"\u91cd\u7f6e")))}}]),t}(O.Component))||n,q=E.a.create()(i=function(e){function t(){var e,a;Object(h.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){e||Object(j.c)(t).then((function(e){1===e.code&&_.a.success("\u8eab\u4efd\u6dfb\u52a0\u6210\u529f")})).catch((function(e){_.a.error("\u6b64\u8eab\u4efd\u5df2\u5b58\u5728")}))}))},a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return g.a.createElement(E.a,{onSubmit:this.handleSubmit},g.a.createElement(E.a.Item,{className:"addUserItem"},t("identityName",{rules:[{required:!0,message:"Please input your identityName!"}]})(g.a.createElement(I.a,{placeholder:"\u8bf7\u8f93\u5165\u8eab\u4efd\u540d\u79f0"}))),g.a.createElement(E.a.Item,{className:"typeId"},t("typeId",{rules:[{required:!0,message:"Please input your typeId!"}]})(g.a.createElement(I.a,{placeholder:"\u8bf7\u8f93\u5165\u8eab\u4efdtype\u503c"}))),g.a.createElement(E.a.Item,null,g.a.createElement(u.a,{type:"primary",htmlType:"submit"},"\u786e\u5b9a"),g.a.createElement(u.a,{style:{marginLeft:8},onClick:function(){e.props.form.resetFields()}},"\u91cd\u7f6e")))}}]),t}(O.Component))||i,x=E.a.create()(l=function(e){function t(){var e,a;Object(h.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){e||Object(j.a)(t).then((function(e){1===e.code&&_.a.success("\u6dfb\u52a0\u6210\u529f")})).catch((function(e){_.a.success("\u6dfb\u52a0\u5931\u8d25!")}))}))},a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return g.a.createElement(E.a,{onSubmit:this.handleSubmit},g.a.createElement(E.a.Item,{className:"addUserItem"},t("apiName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165api\u63a5\u53e3\u6743\u9650\u540d\u79f0!"}]})(g.a.createElement(I.a,{placeholder:"\u8bf7\u8f93\u5165api\u63a5\u53e3\u6743\u9650\u540d\u79f0"}))),g.a.createElement(E.a.Item,{className:"addUserItem"},t("apiUrl",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165api\u63a5\u53e3\u6743\u9650url!"}]})(g.a.createElement(I.a,{placeholder:"\u8bf7\u8f93\u5165api\u63a5\u53e3\u6743\u9650url"}))),g.a.createElement(E.a.Item,{className:"addUserItem"},t("apiMethod",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165api\u63a5\u53e3\u6743\u9650\u65b9\u6cd5!"}]})(g.a.createElement(I.a,{placeholder:"\u8bf7\u8f93\u5165api\u63a5\u53e3\u6743\u9650\u65b9\u6cd5"}))),g.a.createElement(E.a.Item,null,g.a.createElement(u.a,{type:"primary",htmlType:"submit"},"\u786e\u5b9a"),g.a.createElement(u.a,{style:{marginLeft:8},onClick:function(){e.props.form.resetFields()}},"\u91cd\u7f6e")))}}]),t}(O.Component))||l,L=w.a.Option,T=E.a.create()(c=function(e){function t(){var e,a;Object(h.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){e||console.log("Received values of form: ",t)}))},a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return g.a.createElement(E.a,{onSubmit:this.handleSubmit},g.a.createElement(E.a.Item,{className:"addUserItem"},t("view",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5df2\u6709\u89c6\u56fe!"}]})(g.a.createElement(w.a,{placeholder:"\u8bf7\u9009\u62e9\u5df2\u6709\u89c6\u56fe"},this.props.viewAuthority?this.props.viewAuthority.map((function(e){return g.a.createElement(L,{key:e.view_authority_id,value:e.view_id},e.view_authority_text)})):null))),g.a.createElement(E.a.Item,null,g.a.createElement(u.a,{type:"primary",htmlType:"submit"},"\u786e\u5b9a"),g.a.createElement(u.a,{style:{marginLeft:8},onClick:function(){e.props.form.resetFields()}},"\u91cd\u7f6e")))}}]),t}(O.Component))||c,z=w.a.Option,M=E.a.create()(s=function(e){function t(){var e,a;Object(h.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).state={apiAuthority:[]},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){e||console.log(t)}))},a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=this.props.identityId,r=this.state.apiAuthority;return g.a.createElement(E.a,{onSubmit:this.handleSubmit},g.a.createElement(E.a.Item,{className:"addUserItem"},t("identityId",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8eab\u4efdid!"}]})(g.a.createElement(w.a,{placeholder:"\u8bf7\u9009\u62e9\u8eab\u4efdid"},a?a.map((function(e){return g.a.createElement(z,{key:e.key,value:e.identity_id},e.identity_text)})):null))),g.a.createElement(E.a.Item,{className:"addUserItem"},t("apiId",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9api\u63a5\u53e3\u6743\u9650id!"}]})(g.a.createElement(w.a,{placeholder:"\u8bf7\u9009\u62e9api\u63a5\u53e3\u6743\u9650id"},r?r.map((function(e){return g.a.createElement(z,{key:e.api_authority_id,value:e.api_authority_id},e.api_authority_text)})):null))),g.a.createElement(E.a.Item,null,g.a.createElement(u.a,{type:"primary",htmlType:"submit"},"\u786e\u5b9a"),g.a.createElement(u.a,{style:{marginLeft:8},onClick:function(){e.props.form.resetFields()}},"\u91cd\u7f6e")))}},{key:"componentDidMount",value:function(){}}]),t}(O.Component))||s,W=w.a.Option,B=E.a.create()(o=function(e){function t(){var e,a;Object(h.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){e||console.log("Received values of form: ",t)}))},a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=this.props,r=a.identityId,n=a.viewAuthority;return g.a.createElement(E.a,{onSubmit:this.handleSubmit},g.a.createElement(E.a.Item,{className:"addUserItem"},t("identityId",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8eab\u4efdid!"}]})(g.a.createElement(w.a,{placeholder:"\u8bf7\u9009\u62e9\u8eab\u4efdid"},r?r.map((function(e){return g.a.createElement(W,{key:e.key,value:e.identity_id},e.identity_text)})):null))),g.a.createElement(E.a.Item,{className:"addUserItem"},t("viewId",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u89c6\u56fe\u6743\u9650id!"}]})(g.a.createElement(w.a,{placeholder:"\u8bf7\u9009\u62e9\u89c6\u56fe\u6743\u9650id"},n?n.map((function(e){return g.a.createElement(W,{key:e.view_authority_id,value:e.view_id},e.view_authority_text)})):null))),g.a.createElement(E.a.Item,null,g.a.createElement(u.a,{type:"primary",htmlType:"submit"},"\u786e\u5b9a"),g.a.createElement(u.a,{style:{marginLeft:8},onClick:function(){e.props.form.resetFields()}},"\u91cd\u7f6e")))}}]),t}(O.Component))||o;function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var J=E.a.create()(m=function(e){function t(){var e,a;Object(h.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(n)))).state={size:"\u6dfb\u52a0\u7528\u6237",identityId:[],viewAuthority:[]},a.handleSizeChange=function(e){a.setState({size:e.target.value})},a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.size,a=e.identityId,r=e.viewAuthority;return g.a.createElement("div",{className:"addUser"},g.a.createElement("div",{className:"\r addUser_wrapper \r addUser_wrapper_left \r addUser_wrapper_top \r addUser_wrapper_right \r addUser_wrapper_bottom\r "},g.a.createElement("div",{className:"addUserItem"},g.a.createElement(p.a.Group,{value:t,onChange:this.handleSizeChange},g.a.createElement(p.a.Button,{value:"\u6dfb\u52a0\u7528\u6237"},"\u6dfb\u52a0\u7528\u6237"),g.a.createElement(p.a.Button,{value:"\u66f4\u65b0\u7528\u6237"},"\u66f4\u65b0\u7528\u6237"))),"\u6dfb\u52a0\u7528\u6237"===t?g.a.createElement(S,{identityId:a}):g.a.createElement(P,{identityId:a})),g.a.createElement("div",{className:"\r addUser_wrapper\r addUser_wrapper_top \r addUser_wrapper_right \r addUser_wrapper_bottom\r "},g.a.createElement("div",{className:"addUserItem"},g.a.createElement(u.a,{type:"primary",ghost:!0},"\u6dfb\u52a0\u8eab\u4efd")),g.a.createElement(q,null)),g.a.createElement("div",{className:"\r addUser_wrapper \r addUser_wrapper_top \r addUser_wrapper_right \r addUser_wrapper_bottom\r "},g.a.createElement("div",{className:"addUserItem"},g.a.createElement(u.a,{type:"primary",ghost:!0},"\u6dfb\u52a0api\u63a5\u53e3\u6743\u9650")),g.a.createElement(x,null)),g.a.createElement("div",{className:"\r addUser_wrapper \r addUser_wrapper_left \r addUser_wrapper_right \r addUser_wrapper_bottom\r "},g.a.createElement("div",{className:"addUserItem"},g.a.createElement(u.a,{type:"primary",ghost:!0},"\u6dfb\u52a0\u89c6\u56fe\u63a5\u53e3\u6743\u9650")),g.a.createElement(T,{viewAuthority:r})),g.a.createElement("div",{className:"\r addUser_wrapper \r addUser_wrapper_right \r addUser_wrapper_bottom\r "},g.a.createElement("div",{className:"addUserItem"},g.a.createElement(u.a,{type:"primary",ghost:!0},"\u7ed9\u8eab\u4efd\u8bbe\u7f6eapi\u63a5\u53e3\u6743\u9650")),g.a.createElement(M,{identityId:a})),g.a.createElement("div",{className:"\r addUser_wrapper \r addUser_wrapper_right \r addUser_wrapper_bottom\r "},g.a.createElement("div",{className:"addUserItem"},g.a.createElement(u.a,{type:"primary",ghost:!0},"\u7ed9\u8eab\u4efd\u8bbe\u7f6e\u8bd5\u56fe\u6743\u9650")),g.a.createElement(B,{identityId:a,viewAuthority:r})))}},{key:"componentDidMount",value:function(){var e=this;Object(j.G)().then((function(t){e.setState({identityId:t.map((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{key:e.id})}))})}))}}]),t}(O.Component))||m;t.default=J}}]);
//# sourceMappingURL=19.fd255634.chunk.js.map