(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{194:function(e,t,a){e.exports=a(305)},273:function(e,t,a){},305:function(e,t,a){"use strict";a.r(t);a(195),a(221),a(223),a(224),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263);var n=a(0),c=a.n(n),r=a(69),s=a.n(r),l=a(29),i=a.n(l),o=a(44),u=a.n(o),d=a(71),m=a(45),p=a(109),f=a.n(p),h=a(108),E=a.n(h),b=(a(272),a(50)),v=a.n(b),y=a(51),g=a.n(y),j=a(52),U=a.n(j),O=a(53),w=a.n(O),x=a(103),A=a.n(x),G=a(43),k=a.n(G),_=(a(273),function(e){var t=e.id,a=e.go;e.fetchedUser,e.fetchedGeo;return c.a.createElement(v.a,{id:t},c.a.createElement(g.a,{separator:"hide"},"i\u0427\u0442\u043e\u0417\u0434\u0435\u0441\u044c"),c.a.createElement(A.a,null,c.a.createElement(w.a,{size:"m"},c.a.createElement("div",{class:"topcard c1",style:{width:259,height:152}}," ")),c.a.createElement(w.a,{size:"m"},c.a.createElement("div",{class:"topcard c2",style:{width:259,height:152}}," ")),c.a.createElement(w.a,{size:"m"},c.a.createElement("div",{class:"topcard c5",style:{width:259,height:152}}," "))),c.a.createElement(U.a,{title:"\u0421\u0442\u0440\u0430\u043d\u0430"},c.a.createElement(k.a,null,c.a.createElement("button",{class:"country c3",onClick:a,"data-to":"home"})),c.a.createElement(k.a,null,c.a.createElement("div",{class:"country c4"}," "))))}),I=a(106),K=a.n(I),V=a(104),W=a.n(V),z=a(105),S=a.n(z),C=a(70),J=a.n(C),B=a(107),N=a.n(B),P=a(72),R=Object(P.b)(),T=function(e){return c.a.createElement(v.a,{id:e.id},c.a.createElement(g.a,{left:c.a.createElement(K.a,{onClick:e.go,"data-to":"main"},R===P.a?c.a.createElement(W.a,null):c.a.createElement(S.a,null))},"\u041c\u043e\u0451 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),e.fetchedUser&&c.a.createElement(U.a,{title:"\u041a\u0442\u043e \u0443 \u043d\u0430\u0441 \u0442\u0443\u0442 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u0442?"},c.a.createElement(J.a,{before:e.fetchedUser.photo_200?c.a.createElement(N.a,{src:e.fetchedUser.photo_200}):null,description:e.fetchedUser.city&&e.fetchedUser.city.title?e.fetchedUser.city.title:""},"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name))),c.a.createElement(k.a,null,c.a.createElement("script",{type:"text/javascript",charset:"utf-8",async:!0,src:"https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A238a8393175ae4d7f3f15da54333d43f9a01ddbde552453f63e811a99bda857d&width=100%25&height=720&lang=ru_RU&scroll=true"})))},q=function(){var e=Object(n.useState)("main"),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(null),l=Object(m.a)(s,2),o=l[0],p=l[1],h=Object(n.useState)(null),b=Object(m.a)(h,2),v=b[0],y=b[1],g=Object(n.useState)(c.a.createElement(E.a,{size:"large"})),j=Object(m.a)(g,2),U=j[0],O=j[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,i.a.send("VKWebAppGetGeodata",{});case 5:a=e.sent,p(t),y(a),O(null),setInterval(Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetGeodata",{});case 2:a=e.sent,y(a);case 4:case"end":return e.stop()}}),e)}))),5e3);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var w=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(f.a,{activePanel:a,popout:U},c.a.createElement(_,{id:"main",go:w}),c.a.createElement(T,{id:"home",fetchedUser:o,fetchedGeo:v,go:w}))};i.a.send("VKWebAppInit"),s.a.render(c.a.createElement(q,null),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.dc2a8920.chunk.js.map