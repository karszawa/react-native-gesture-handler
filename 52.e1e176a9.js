(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{160:function(e,t,a){"use strict";var n=a(0),r=a(162);t.a=function(){return Object(n.useContext)(r.a)}},161:function(e,t,a){"use strict";var n=a(154),r=a(160),c=a(155),l=a(159);t.a=()=>{const{siteConfig:{baseUrl:e,themeConfig:{navbar:{logo:t={}}={}}}={}}=Object(n.a)(),{isDarkTheme:a}=Object(r.a)(),o=t.href||e;let s={};t.target?s={target:t.target}:Object(l.a)(o)||(s={rel:"noopener noreferrer",target:"_blank"});const i=t.srcDark&&a?t.srcDark:t.src;return{logoLink:o,logoLinkProps:s,logoImageUrl:Object(c.a)(i),logoAlt:t.alt}}},162:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},164:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(167),l=a(159),o=a(154),s=a(155);const i="",m="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(o.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):i),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),c=Object(n.useCallback)(()=>{a(i),r(i)},[]),l=Object(n.useCallback)(()=>{a(m),r(m)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?m:i)})},[]),{isDarkTheme:t===m,setLightTheme:c,setDarkTheme:l}},b=a(162);var d=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=u();return r.a.createElement(b.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};var h=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}};var g=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});var v=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=h();return r.a.createElement(g.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a}},e.children)},f=a(93),E=a.n(f);var k=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}}={}}=Object(o.a)(),{id:t,content:a,backgroundColor:c,textColor:l}=e,[s,i]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{const e=localStorage.getItem("docusaurus.announcement.id"),a=t!==e;localStorage.setItem("docusaurus.announcement.id",t),a&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(a||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&i(!1)},[]),!a||s?null:r.a.createElement("div",{className:E.a.announcementBar,style:{backgroundColor:c,color:l},role:"banner"},r.a.createElement("div",{className:E.a.announcementBarContent,dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("button",{type:"button",className:E.a.announcementBarClose,onClick:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),i(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},p=a(2),O=a(156),_=a.n(O),w=a(158),j=a(163),N=a(169),C=a.n(N),y=a(94),S=a.n(y);const L=()=>r.a.createElement("span",{className:_()(S.a.toggle,S.a.moon)}),T=()=>r.a.createElement("span",{className:_()(S.a.toggle,S.a.sun)});var D=function(e){const{isClient:t}=Object(o.a)();return r.a.createElement(C.a,Object(p.a)({disabled:!t,icons:{checked:r.a.createElement(L,null),unchecked:r.a.createElement(T,null)}},e))},I=a(160),x=a(168);var M=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]},B=a(35);const G=()=>({scrollX:B.a.canUseDOM?window.pageXOffset:0,scrollY:B.a.canUseDOM?window.pageYOffset:0});var H=(e,t=[])=>{const[a,r]=Object(n.useState)(G()),c=()=>{const t=G();r(t),e&&e(t)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c,{passive:!0})),t),a};var P=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[l,o]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),m=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),u=Object(x.b)(),[b,d]=M(u.hash);return H(({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<s)return;if(r)return c(!1),a(!1),void o(t);const n=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&t>=l?a(!1):t+i<n&&a(!0),o(t)},[l,s]),Object(n.useEffect)(()=>{e&&(a(!0),d(u.hash))},[u]),Object(n.useEffect)(()=>{e&&b&&c(!0)},[b]),{navbarRef:m,isNavbarVisible:t}},U=a(164),R=a(161),A=a(165),W=a(95),F=a.n(W);function V({activeBasePath:e,activeBaseRegex:t,to:a,href:n,label:c,activeClassName:l="navbar__link--active",prependBaseUrlToHref:o,...i}){const m=Object(s.a)(a),u=Object(s.a)(e),b=Object(s.a)(n,!0);return r.a.createElement(w.a,Object(p.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:o?b:n}:{isNavLink:!0,activeClassName:l,to:m,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(u)}:null},i),c)}function Y({items:e,position:t,className:a,...n}){const c=(e,t=!1)=>_()({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?r.a.createElement("div",{className:_()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},r.a.createElement(V,Object(p.a)({className:c(a)},n,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),n.label),r.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...t},a)=>r.a.createElement("li",{key:a},r.a.createElement(V,Object(p.a)({activeClassName:"dropdown__link--active",className:c(e,!0)},t)))))):r.a.createElement(V,Object(p.a)({className:c(a)},n))}function J({items:e,position:t,className:a,...n}){const c=(e,t=!1)=>_()("menu__link","navbar__link",{"menu__link--sublist":t},e);return e?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(V,Object(p.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},a)=>r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(V,Object(p.a)({activeClassName:"menu__link--active",className:c(e)},t,{onClick:n.onClick})))))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(V,Object(p.a)({className:c(a)},n)))}var K=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:a=!1}={},disableDarkMode:c=!1}},isClient:l}=Object(o.a)(),[s,i]=Object(n.useState)(!1),[m,u]=Object(n.useState)(!1),{isDarkTheme:b,setLightTheme:d,setDarkTheme:h}=Object(I.a)(),{navbarRef:g,isNavbarVisible:v}=P(a),{logoLink:f,logoLinkProps:E,logoImageUrl:k,logoAlt:O}=Object(R.a)();Object(U.a)(s);const N=Object(n.useCallback)(()=>{i(!0)},[i]),C=Object(n.useCallback)(()=>{i(!1)},[i]),y=Object(n.useCallback)(e=>e.target.checked?h():d(),[d,h]);return r.a.createElement("nav",{ref:g,className:_()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":s,[F.a.navbarHideable]:a,[F.a.navbarHidden]:!v})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:N,onKeyDown:N},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(w.a,Object(p.a)({className:"navbar__brand",to:f},E),null!=e&&r.a.createElement("strong",{className:_()("navbar__title",{[F.a.hideLogoText]:m})},e))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"left"===e.position).map((e,t)=>r.a.createElement(Y,Object(p.a)({},e,{key:t}))),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(A.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")),t.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(Y,Object(p.a)({},e,{key:t}))),!c&&r.a.createElement(D,{className:F.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:b,onChange:y}),r.a.createElement(j.a,{handleSearchBarToggle:u,isSearchBarExpanded:m}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:C}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(w.a,Object(p.a)({className:"navbar__brand",onClick:C,to:f},E),null!=k&&r.a.createElement("img",{key:l,className:"navbar__logo",src:k,alt:O}),null!=e&&r.a.createElement("strong",{className:"navbar__title"},e)),!c&&s&&r.a.createElement(D,{"aria-label":"Dark mode toggle in sidebar",checked:b,onChange:y})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>r.a.createElement(J,Object(p.a)({},e,{onClick:C,key:t}))))))))};a(96);var X=function(){const e=Object(o.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,c=Object(s.a)("/img/swmLogo.svg");return n?r.a.createElement("footer",{className:_()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"footer-container"},r.a.createElement(w.a,{className:"navbar__brand footer-image-link",to:"https://www.swmansion.com/"},null!=c&&r.a.createElement("img",{className:"navbar__logo",src:c,alt:"Software Mansion logo"})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(A.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")))):null};a(97);t.a=function(e){const{siteConfig:t={}}=Object(o.a)(),{favicon:a,title:n,themeConfig:{image:i},url:m}=t,{children:u,title:b,noFooter:h,description:g,image:f,keywords:E,permalink:p,version:O}=e,_=b?`${b} | ${n}`:n,w=f||i;let j=m+Object(s.a)(w);Object(l.a)(w)||(j=w);const N=Object(s.a)(a);return r.a.createElement(d,null,r.a.createElement(v,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),a&&r.a.createElement("link",{rel:"shortcut icon",href:N}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),w&&r.a.createElement("meta",{property:"og:image",content:j}),w&&r.a.createElement("meta",{property:"twitter:image",content:j}),w&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_}),p&&r.a.createElement("meta",{property:"og:url",content:m+p}),p&&r.a.createElement("link",{rel:"canonical",href:m+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(k,null),r.a.createElement(K,null),r.a.createElement("div",{className:"main-wrapper"},u),!h&&r.a.createElement(X,null)))}},170:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(166);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);