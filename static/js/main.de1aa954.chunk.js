(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t,a){e.exports=a(40)},26:function(e,t,a){},27:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),l=a.n(r),o=(a(26),a(27),a(2)),i=a(3),s=a(5),m=a(4),u=a(6),p=a(1),h=a.n(p),b={name:"",headerTagline:["Hi \ud83d\udc4b You found me! I am Derrick Lau.","Full-stack Web developer"],contactEmail:"lauf@cardiff.ac.com",abouttext:"Hi there I am a MSc student studying Computing. I started developing web apps in 2018, with experience in HTML, CSS, Javascript all the way to modern techs like React and C# asp.net core.",aboutImage:"https://live.staticflickr.com/2279/2020187066_f3bca7cbac_b.jpg",ShowAboutImage:!0,projects:[{id:1,title:"Face-detection-app",service:"Web Development (React, Express)",imageSrc:"https://live.staticflickr.com/65535/49356444676_e4b81ad664_h.jpg",url:"https://github.com/Derrick-lau/Face-detection-app/"},{id:2,title:"Library Management System",service:"Web Development (React, Express)",imageSrc:"https://live.staticflickr.com/65535/49355991563_3e7d54c7ac_h.jpg",url:"https://github.com/Derrick-lau/LMS/"},{id:3,title:"Migrating Library Management System to Java (developing......)",service:"Web Development (React-typescript, Redux, Java Spring boot)",imageSrc:"https://live.staticflickr.com/65535/49355991563_3e7d54c7ac_h.jpg",url:"https://github.com/Derrick-lau/LMS-JAVA/"},{id:4,title:"Migrating Face-detection-app to ASP.NET CORE (developing......)",service:"Web Development (React-typescript, C# ASP.NET CORE)",imageSrc:"https://live.staticflickr.com/65535/49356652602_0cab5ac61c_c.jpg",url:"https://github.com/Derrick-lau/Face-detection-network"}],social:[{name:"Github",url:"https://github.com/Derrick-lau/"},{name:"Linkedin",url:"https://www.linkedin.com/in/for-ka-l-551262168/"}]},E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"heading-background"},"SIMPLICITY"),c.a.createElement("header",null,c.a.createElement("h1",null,c.a.createElement(h.a,{bottom:!0,cascade:!0},b.name))),c.a.createElement(h.a,{bottom:!0},c.a.createElement("p",{className:"header-title"},b.headerTagline[0],c.a.createElement("br",null),b.headerTagline[1],c.a.createElement("br",null),b.headerTagline[2],c.a.createElement("br",null),c.a.createElement("a",{href:"mailto:".concat(b.contactEmail),rel:"noopener noreferrer"},c.a.createElement("button",null,"Contact")))))}}]),t}(n.Component),d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"about"},c.a.createElement("div",{className:"about-content"},c.a.createElement("h1",null,c.a.createElement(h.a,{bottom:!0,cascade:!0},"About.")),c.a.createElement(h.a,{bottom:!0},c.a.createElement("p",null,b.abouttext))),b.ShowAboutImage?c.a.createElement("img",{src:b.aboutImage,alt:"about iamge"}):null)}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,{bottom:!0},c.a.createElement("div",{className:"project"},c.a.createElement("h1",null,this.props.title),c.a.createElement("h4",null,this.props.service),c.a.createElement("a",{href:this.props.url},c.a.createElement("img",{src:this.props.imageSrc,alt:this.props.title}))))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"heading"},c.a.createElement(h.a,{bottom:!0,cascade:!0},"Projects.")),c.a.createElement("div",{className:"work-content"},b.projects.map((function(e){return c.a.createElement(f,{key:e.id,title:e.title,service:e.service,imageSrc:e.imageSrc,url:e.url})}))))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,c.a.createElement(h.a,{bottom:!0,cascade:!0}," Contact.")),c.a.createElement(h.a,{bottom:!0},c.a.createElement("div",{className:"contact-content"},c.a.createElement("h1",null,"Let\u2019s create ",c.a.createElement("br",null),c.a.createElement("span",{className:"amazing-color"},"together")),c.a.createElement("a",{href:"mailto:".concat(b.contactEmail),className:"email"},b.contactEmail),c.a.createElement("ul",null,b.social.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},e.name))}))))))}}]),t}(n.Component),k=a(8),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={},a.scrollToTop=function(){k.animateScroll.scrollToTop()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement(k.Link,{className:"link",activeClass:"active",to:"homw",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.scrollToTop},c.a.createElement("li",null,"Home")),c.a.createElement(k.Link,{className:"link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500},c.a.createElement("li",null,"About")),c.a.createElement(k.Link,{className:"link",activeClass:"active",to:"works",spy:!0,smooth:!0,offset:-70,duration:500},c.a.createElement("li",null,"Projects")),c.a.createElement(k.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},c.a.createElement("li",null,"Contact"))))}}]),t}(n.Component),y=function(){return c.a.createElement("main",null,c.a.createElement(j,null),c.a.createElement("section",{className:"App-header"},c.a.createElement(E,null)),c.a.createElement("section",{className:"About"},c.a.createElement(d,null)),c.a.createElement("section",{className:"works"},c.a.createElement(v,null)),c.a.createElement("section",{className:"contact"},c.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.de1aa954.chunk.js.map