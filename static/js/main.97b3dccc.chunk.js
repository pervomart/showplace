(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/cs2.0fe4027b.jpg"},195:function(e,t,a){e.exports=a(306)},274:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);a(196),a(222),a(224),a(225),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264);var n=a(0),c=a.n(n),r=a(70),l=a.n(r),i=a(29),s=a.n(i),o=a(44),u=a.n(o),m=a(73),d=a(45),f=a(111),p=a.n(f),h=a(110),E=a.n(h),b=(a(273),a(50)),v=a.n(b),g=a(51),j=a.n(g),O=a(71),U=a.n(O),y=a(43),G=a.n(y),w=a(74),x=a.n(w),k=a(106),A=a.n(k),I=a(52),K=a.n(I),V=a(105),W=a.n(V),_=(a(274),function(e){var t=e.id,a=e.go;e.fetchedUser,e.fetchedGeo;return c.a.createElement(v.a,{id:t},c.a.createElement(j.a,null,"\u0427\u0442\u043e\u0437\u0434\u0435\u0441\u044c?!"),c.a.createElement(A.a,null,c.a.createElement(x.a,{size:"m"},c.a.createElement("div",{class:"c1",style:{width:224,height:96}},"\u041f\u0435\u0440\u0432\u044b\u0439")),c.a.createElement(x.a,{size:"m"},c.a.createElement("div",{style:{width:224,height:96}},c.a.createElement("img",{src:W.a,alt:""})))),c.a.createElement(G.a,{title:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f"},c.a.createElement(K.a,null,c.a.createElement(U.a,{size:"xl",level:"2",onClick:a,"data-to":"home"},"\u041c\u043e\u0451 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"))))}),z=a(109),S=a.n(z),C=a(107),J=a.n(C),B=a(108),N=a.n(B),P=a(53),T=a.n(P),q=a(72),D=a.n(q),F=a(75),H=Object(F.b)(),L=function(e){return c.a.createElement(v.a,{id:e.id},c.a.createElement(j.a,{left:c.a.createElement(S.a,{onClick:e.go,"data-to":"main"},H===F.a?c.a.createElement(J.a,null):c.a.createElement(N.a,null))},"\u041c\u043e\u0451 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),e.fetchedUser&&c.a.createElement(G.a,{title:"\u041a\u0442\u043e \u0443 \u043d\u0430\u0441 \u0442\u0443\u0442 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u0442?"},c.a.createElement(T.a,{before:e.fetchedUser.photo_200?c.a.createElement(D.a,{src:e.fetchedUser.photo_200}):null,description:e.fetchedUser.city&&e.fetchedUser.city.title?e.fetchedUser.city.title:""},"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name))),e.fetchedGeo&&c.a.createElement(G.a,{title:"\u041c\u044b \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u043b\u0438, \u0433\u0434\u0435 \u0442\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0448\u044c\u0441\u044f."},c.a.createElement(T.a,null,"".concat(e.fetchedGeo.lat," ").concat(e.fetchedGeo.long))),c.a.createElement(K.a,null,"\u042d\u0442\u043e \u0442\u0432\u043e\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b"))},M=function(){var e=Object(n.useState)("main"),t=Object(d.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),i=Object(d.a)(l,2),o=i[0],f=i[1],h=Object(n.useState)(null),b=Object(d.a)(h,2),v=b[0],g=b[1],j=Object(n.useState)(c.a.createElement(E.a,{size:"large"})),O=Object(d.a)(j,2),U=O[0],y=O[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,s.a.send("VKWebAppGetGeodata",{});case 5:a=e.sent,f(t),g(a),y(null),setInterval(Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetGeodata",{});case 2:a=e.sent,g(a);case 4:case"end":return e.stop()}}),e)}))),5e3);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var G=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(p.a,{activePanel:a,popout:U},c.a.createElement(_,{id:"main",go:G}),c.a.createElement(L,{id:"home",fetchedUser:o,fetchedGeo:v,go:G}))};s.a.send("VKWebAppInit"),l.a.render(c.a.createElement(M,null),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.97b3dccc.chunk.js.map