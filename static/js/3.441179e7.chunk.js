(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{289:function(e,t,a){e.exports={img:"ProfileInfo_img__1cK5H",avatarBig:"ProfileInfo_avatarBig__1QUoG"}},290:function(e,t,a){e.exports={item:"Post_item__3OcjE",active:"Post_active__i-6EL",avatar:"Post_avatar__1AKHH",like:"Post_like__1jU1G",likeCount:"Post_likeCount__1ygw2"}},291:function(e,t,a){e.exports={wrapper:"MyPosts_wrapper__1Vzvv"}},292:function(e,t,a){"use strict";a.r(t);var n=a(36),s=a(37),r=a(39),o=a(38),u=a(0),l=a.n(u),i=a(289),c=a.n(i),p=a(31),m=a(125),f=a.n(m),d=a(128),g=function(e){var t=Object(u.useState)(!1),a=Object(d.a)(t,2),n=a[0],s=a[1],r=Object(u.useState)(e.status),o=Object(d.a)(r,2),i=o[0],c=o[1];Object(u.useEffect)((function(){c(e.status)}),[e.status]);return l.a.createElement("div",null,n?l.a.createElement("div",null,l.a.createElement("input",{onChange:function(e){c(e.target.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(i)},value:i})):l.a.createElement("div",null,l.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"------")))},h=function(e){return e.profile?l.a.createElement("div",null,l.a.createElement("img",{className:c.a.img,src:"https://cdn.pixabay.com/photo/2020/04/05/21/02/panoramic-5007742_960_720.jpg",alt:"img"}),l.a.createElement("img",{className:c.a.avatarBig,src:e.profile.photos.large?e.profile.photos.large:f.a,alt:""}),l.a.createElement("div",null,l.a.createElement(g,{status:e.status,updateStatus:e.updateStatus}),l.a.createElement("span",null,"\u041e\u0431\u043e \u043c\u043d\u0435:",e.profile.aboutMe),l.a.createElement("span",null,"\u0418\u043c\u044f: ",e.profile.fullName))):l.a.createElement(p.a,null)},E=a(94),b=a(290),v=a.n(b),_=function(e){return l.a.createElement("div",{className:v.a.item},l.a.createElement("img",{className:v.a.avatar,src:"https://cdn.pixabay.com/photo/2017/05/06/18/12/avatar-2290470_960_720.jpg",alt:""}),l.a.createElement("p",null,e.message),l.a.createElement("p",{className:v.a.likeCount},e.likes),l.a.createElement("div",{className:v.a.like},"Like"))},j=a(291),P=a.n(j),O=a(89),k=a(127),S=a(33),y=a(86),x=l.a.memo((function(e){console.log("render");var t=e.posts.map((function(e){return l.a.createElement(_,{message:e.message,likes:e.likes,key:e.id})}));return l.a.createElement("div",{className:P.a.wrapper},l.a.createElement("h3",null,"My posts"),l.a.createElement(N,{onSubmit:function(t){e.addPost(t.newPostText)}}),t)})),w=Object(y.a)(10),N=Object(k.a)({form:"addPost"})((function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement(O.a,{component:S.b,name:"newPostText",validate:[y.b,w]}),l.a.createElement("button",null,"Add post"))})),C=x,I=a(11),U=Object(I.b)((function(e){return{posts:e.profilePage.postData,messageText:e.profilePage.messageText}}),(function(e){return{addPost:function(t){e(Object(E.a)(t))}}}))(C),A=function(e){return l.a.createElement("div",null,l.a.createElement(h,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),l.a.createElement(U,null))},B=a(28),M=a(7),T=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return l.a.createElement(A,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(l.a.Component);t.default=Object(M.d)(Object(I.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:E.d,getStatus:E.c,updateStatus:E.e}),B.f)(T)}}]);
//# sourceMappingURL=3.441179e7.chunk.js.map