(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{194:function(e,t,a){e.exports=a(305)},273:function(e,t,a){},305:function(e,t,a){"use strict";a.r(t);a(195),a(221),a(223),a(224),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263);var n=a(0),c=a.n(n),r=a(70),l=a.n(r),i=a(29),s=a.n(i),o=a(45),u=a.n(o),m=a(72),d=a(46),p=a(110),f=a.n(p),h=a(109),E=a.n(h),b=(a(272),a(51)),g=a.n(b),v=a(52),j=a.n(v),y=a(71),O=a.n(y),U=a(40),G=a.n(U),w=a(73),k=a.n(w),x=a(104),A=a.n(x),I=a(44),K=a.n(I),V=(a(273),function(e){var t=e.id,a=e.go;e.fetchedUser,e.fetchedGeo;return c.a.createElement(g.a,{id:t},c.a.createElement(j.a,{separator:"hide"},"i\u0427\u0442\u043e\u0417\u0434\u0435\u0441\u044c"),c.a.createElement(A.a,null,c.a.createElement(k.a,{size:"m"},c.a.createElement("div",{class:"topcard c1",style:{width:259,height:152}},"\u041f\u0435\u0440\u0432\u044b\u0439")),c.a.createElement(k.a,{size:"m"},c.a.createElement("div",{class:"topcard c2",style:{width:259,height:152}},"\u0412\u0442\u043e\u0440\u043e\u0439"))),c.a.createElement(G.a,{title:"\u0421\u0442\u0440\u0430\u043d\u0430"},c.a.createElement(K.a,null,c.a.createElement("input",{type:"submit",style:"background-image: url(../../img/ros.png);"}))),c.a.createElement(G.a,{title:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f"},c.a.createElement(K.a,null,c.a.createElement(O.a,{size:"xl",level:"2",onClick:a,"data-to":"home"},"\u041c\u043e\u0451 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"))))}),W=a(107),_=a.n(W),z=a(105),S=a.n(z),C=a(106),J=a.n(C),B=a(53),N=a.n(B),P=a(108),T=a.n(P),q=a(74),D=Object(q.b)(),F=function(e){return c.a.createElement(g.a,{id:e.id},c.a.createElement(j.a,{left:c.a.createElement(_.a,{onClick:e.go,"data-to":"main"},D===q.a?c.a.createElement(S.a,null):c.a.createElement(J.a,null))},"\u041c\u043e\u0451 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),e.fetchedUser&&c.a.createElement(G.a,{title:"\u041a\u0442\u043e \u0443 \u043d\u0430\u0441 \u0442\u0443\u0442 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u0442?"},c.a.createElement(N.a,{before:e.fetchedUser.photo_200?c.a.createElement(T.a,{src:e.fetchedUser.photo_200}):null,description:e.fetchedUser.city&&e.fetchedUser.city.title?e.fetchedUser.city.title:""},"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name))),e.fetchedGeo&&c.a.createElement(G.a,{title:"\u041c\u044b \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u043b\u0438, \u0433\u0434\u0435 \u0442\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0448\u044c\u0441\u044f."},c.a.createElement(N.a,null,"".concat(e.fetchedGeo.lat," ").concat(e.fetchedGeo.long))),c.a.createElement(K.a,null,"\u042d\u0442\u043e \u0442\u0432\u043e\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b"))},H=function(){var e=Object(n.useState)("main"),t=Object(d.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),i=Object(d.a)(l,2),o=i[0],p=i[1],h=Object(n.useState)(null),b=Object(d.a)(h,2),g=b[0],v=b[1],j=Object(n.useState)(c.a.createElement(E.a,{size:"large"})),y=Object(d.a)(j,2),O=y[0],U=y[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,s.a.send("VKWebAppGetGeodata",{});case 5:a=e.sent,p(t),v(a),U(null),setInterval(Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetGeodata",{});case 2:a=e.sent,v(a);case 4:case"end":return e.stop()}}),e)}))),5e3);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var G=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(f.a,{activePanel:a,popout:O},c.a.createElement(V,{id:"main",go:G}),c.a.createElement(F,{id:"home",fetchedUser:o,fetchedGeo:g,go:G}))};s.a.send("VKWebAppInit"),l.a.render(c.a.createElement(H,null),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.88d3095a.chunk.js.map