!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"content",(function(){return o})),n.d(t,"main",(function(){return c}));const o=document.getElementById("content");!function(){const e=document.createElement("img");e.id="logo",e.src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJXgxhRno2pt0Bh7N7pmLQXGyzU7abQaja-8b-W_yk-Lx2rn0W&usqp=CAU",o.appendChild(e);const t=document.createElement("h1");t.id="logoName",t.textContent="Doughkemon",o.appendChild(t);const n=document.createElement("div");n.id="main",o.appendChild(n);const c=document.createElement("h2");c.id="tagLine",c.textContent="Gotta munch 'em all!",n.appendChild(c);const r=document.createElement("ul");r.id="navBar";const a=document.createElement("li");a.id="home",a.textContent="Home";const i=document.createElement("li");i.id="menu",i.textContent="Menu";const d=document.createElement("li");d.id="about",d.textContent="About",r.appendChild(a),r.appendChild(i),r.appendChild(d),o.appendChild(r)}();const c=document.getElementById("main");document.querySelectorAll("#navBar li").forEach(e=>e.addEventListener("click",e=>{let t=e.target.id;switch(c.innerHTML="",t){case"menu":!function(){const e=document.createElement("div");e.id="container",c.appendChild(e);const t=document.createElement("h2");t.id="title",t.textContent="Menu",e.appendChild(t);const n=document.createElement("h3");n.textContent="Bulbasaurus veggie feast",e.appendChild(n);const o=document.createElement("h3");o.textContent="Charizard's fiery surprise",e.appendChild(o);const r=document.createElement("h3");r.textContent="I choose you Pikachu!",e.appendChild(r)}();break;case"about":!function(){const e=document.createElement("div");e.id="container",main.appendChild(e);const t=document.createElement("h2");t.id="about",t.textContent="It all started as a dream during the coronavirus crisis of '20. A sourdough starter was born that we only know as the 'Doughkemon'. This starter then bred an entire sub species of delicious pizza.",e.appendChild(t)}();break;case"home":!function(){const e=document.createElement("h2");e.id="tagLine",e.textContent="Gotta munch 'em all!",c.appendChild(e)}()}}))}]);