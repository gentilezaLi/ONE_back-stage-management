(window["webpackJsonpexam-back"]=window["webpackJsonpexam-back"]||[]).push([[15],{739:function(e,t,a){},815:function(e,t,a){"use strict";a.r(t);a(159);var n,r=a(78),l=a(46),i=a(47),c=a(49),m=a(48),d=a(50),u=(a(342),a(68)),o=(a(726),a(725)),s=(a(724),a(723)),p=a(1),b=a.n(p),f=(a(739),a(97)),E=s.a.Option,y=o.a.Column,k=u.a.create({name:"detailRead"})(n=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={bans:[],data:[]},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(f.i)().then((function(t){console.log(t),e.setState({bans:t.result.map((function(e,t){return e.key=t,e}))})}))}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state.data;return b.a.createElement("div",{className:"rea"},b.a.createElement("div",{className:"btn"},b.a.createElement(u.a,{onSubmit:this.handleSubmit,layout:"inline"},b.a.createElement(u.a.Item,{label:"\u72b6\u6001"},e("status")(b.a.createElement(s.a,null,b.a.createElement(E,{value:"200"},"200")))),b.a.createElement(u.a.Item,{label:"\u73ed\u7ea7"},e("class")(b.a.createElement(s.a,{placeholder:"\u8bf7\u9009\u62e9\u73ed\u7ea7\u540d"},this.state.bans.map((function(e,t){return b.a.createElement(E,{value:e.grade_name,key:e.grade_id},e.grade_name)}))))),b.a.createElement(r.a,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"))),b.a.createElement(o.a,{dataSource:t,rowKey:function(e){return e.grade_id}},b.a.createElement(y,{title:"\u73ed\u7ea7",dataIndex:"grade_id",key:"grade_id"}),b.a.createElement(y,{title:"\u59d3\u540d",dataIndex:"student_name",key:"student_name"}),b.a.createElement(y,{title:"\u9605\u5377\u72b6\u6001",dataIndex:"marking_status",key:"marking_status"}),b.a.createElement(y,{title:"\u5f00\u59cb\u65f6\u95f4",dataIndex:"start_time",key:"start_time"}),b.a.createElement(y,{title:"\u7ed3\u675f\u65f6\u95f4",dataIndex:"end_time",key:"end_time"}),b.a.createElement(y,{title:"\u6210\u6750\u7387",dataIndex:"yield",key:"yield"}),b.a.createElement(y,{title:"\u64cd\u4f5c",render:function(e,t){return b.a.createElement("span",null,b.a.createElement("a",null,"\u6279\u5377"))}})))}}]),t}(p.Component))||n;t.default=k}}]);
//# sourceMappingURL=15.cb892f09.chunk.js.map