/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[111,13,14,20,26,27,28,29,33,39,46,47,49,55,60],{237:function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return o})),n.d(e,"__assign",(function(){return l})),n.d(e,"__rest",(function(){return c})),n.d(e,"__decorate",(function(){return d})),n.d(e,"__param",(function(){return f})),n.d(e,"__metadata",(function(){return v})),n.d(e,"__awaiter",(function(){return m})),n.d(e,"__generator",(function(){return _})),n.d(e,"__exportStar",(function(){return h})),n.d(e,"__values",(function(){return C})),n.d(e,"__read",(function(){return y})),n.d(e,"__spread",(function(){return w})),n.d(e,"__spreadArrays",(function(){return k})),n.d(e,"__await",(function(){return S})),n.d(e,"__asyncGenerator",(function(){return x})),n.d(e,"__asyncDelegator",(function(){return T})),n.d(e,"__asyncValues",(function(){return j})),n.d(e,"__makeTemplateObject",(function(){return A})),n.d(e,"__importStar",(function(){return O})),n.d(e,"__importDefault",(function(){return E}));var r=function(t,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},r(t,b)};function o(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}var l=function(){return l=Object.assign||function(t){for(var s,i=1,e=arguments.length;i<e;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},l.apply(this,arguments)};function c(s,t){var e={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&t.indexOf(p)<0&&(e[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)t.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(e[p[i]]=s[p[i]])}return e}function d(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l}function f(t,e){return function(n,r){e(n,r,t)}}function v(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function m(t,e,n,r){return new(n||(n=Promise))((function(o,l){function c(t){try{f(r.next(t))}catch(t){l(t)}}function d(t){try{f(r.throw(t))}catch(t){l(t)}}function f(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(c,d)}f((r=r.apply(t,e||[])).next())}))}function _(t,body){var e,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function l(l){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=body.call(t,o)}catch(t){l=[6,t],n=0}finally{e=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}function h(t,e){for(var p in t)e.hasOwnProperty(p)||(e[p]=t[p])}function C(t){var e="function"==typeof Symbol&&t[Symbol.iterator],i=0;return e?e.call(t):{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}}}function y(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),l=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l}function w(){for(var t=[],i=0;i<arguments.length;i++)t=t.concat(y(arguments[i]));return t}function k(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var e=Array(s),n=0;for(i=0;i<t;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)e[n]=a[r];return e}function S(t){return this instanceof S?(this.v=t,this):new S(t)}function x(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,g=n.apply(t,e||[]),q=[];return i={},r("next"),r("throw"),r("return"),i[Symbol.asyncIterator]=function(){return this},i;function r(t){g[t]&&(i[t]=function(e){return new Promise((function(a,b){q.push([t,e,a,b])>1||o(t,e)}))})}function o(t,e){try{(n=g[t](e)).value instanceof S?Promise.resolve(n.value.v).then(l,c):d(q[0][2],n)}catch(t){d(q[0][3],t)}var n}function l(t){o("next",t)}function c(t){o("throw",t)}function d(t,e){t(e),q.shift(),q.length&&o(q[0][0],q[0][1])}}function T(t){var i,p;return i={},e("next"),e("throw",(function(t){throw t})),e("return"),i[Symbol.iterator]=function(){return this},i;function e(e,n){i[e]=t[e]?function(r){return(p=!p)?{value:S(t[e](r)),done:"return"===e}:n?n(r):r}:n}}function j(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,e=t[Symbol.asyncIterator];return e?e.call(t):(t=C(t),i={},n("next"),n("throw"),n("return"),i[Symbol.asyncIterator]=function(){return this},i);function n(e){i[e]=t[e]&&function(n){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(n=t[e](n)).done,n.value)}))}}}function A(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function O(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function E(t){return t&&t.__esModule?t:{default:t}}},238:function(t,e,n){},239:function(t,e,n){"use strict";n.r(e);var r={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var r=t.querySelectorAll(".menu-expand"),o=r.length,l=0;l<o;l++)r[l].addEventListener("click",(function(t){d(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){f()}));var d=function(t){t.currentTarget.parentElement.classList.toggle("active")},f=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},o=(n(247),n(38)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("White Paper")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Comprar Creditos de Carbono")])],1),t._v(" "),n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[n("span",[t._v("Serviços")])]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/"}},[n("span",[t._v("Neutralize emissões de gases de efeito estufa (burn)")])])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/"}},[n("span",[t._v("Transferência de Titularidade (IHS Markit)")])])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact"}},[n("span",[t._v("Contato")])])],1)])])])}),[],!1,null,null,null);e.default=component.exports},240:function(t,e,n){},241:function(t,e,n){"use strict";n.r(e);var footer=n(251),r=n(248),o=n(249),l=n(250),c={components:{FooterAbout:r.default,FooterWidgetLink:o.default,FooterWidgetApps:l.default},data:function(){return{data:footer}}},d=n(38),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-copyright-area section-space--pb_30"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-md-6 text-center text-md-left"},[n("span",{staticClass:"copyright-text"},[t._v(t._s(t.data.footerBottom.copyright))])]),t._v(" "),n("div",{staticClass:"col-md-6 text-center text-md-right"},[n("ul",{staticClass:"list ht-social-networks solid-rounded-icon"},[n("li",{staticClass:"item"},[n("a",{staticClass:"social-link hint--bounce hint--top hint--primary",attrs:{href:t.data.footerBottom.twitterUrl,target:"_blank","aria-label":"Twitter"}},[n("i",{staticClass:"fab fa-twitter link-icon"})])]),t._v(" "),n("li",{staticClass:"item"},[n("a",{staticClass:"social-link hint--bounce hint--top hint--primary",attrs:{href:t.data.footerBottom.fbUrl,target:"_blank","aria-label":"Facebook"}},[n("i",{staticClass:"fab fa-facebook-f link-icon"})])]),t._v(" "),n("li",{staticClass:"item"},[n("a",{staticClass:"social-link hint--bounce hint--top hint--primary",attrs:{href:t.data.footerBottom.instagramUrl,target:"_blank","aria-label":"Instagram"}},[n("i",{staticClass:"fab fa-instagram link-icon"})])]),t._v(" "),n("li",{staticClass:"item"},[n("a",{staticClass:"social-link hint--bounce hint--top hint--primary",attrs:{href:t.data.footerBottom.linkedinUrl,target:"_blank","aria-label":"Linkedin"}},[n("i",{staticClass:"fab fa-linkedin link-icon"})])])])])])])])}),[],!1,null,null,null);e.default=component.exports},242:function(t,e,n){"use strict";n.r(e);var r={components:{MobileNavMenu:n(239).default},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},o=(n(252),n(38)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"offcanvas-menu",attrs:{id:"offcanvas-menu"}},[n("div",{staticClass:"offcanvas-menu__inner"},[n("div",{staticClass:"offcanvas-menu__header"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-md-6 col-8"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/images/logo/logo-dark.png",alt:"logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-md-6 col-4"},[n("div",{staticClass:"text-right"},[n("span",{staticClass:"mobile-navigation-close-icon",on:{click:function(e){return t.mobiletoggleClass("removeClass","active")}}})])])])])]),t._v(" "),n("MobileNavMenu")],1)])}),[],!1,null,"6915806d",null);e.default=component.exports;installComponents(component,{MobileNavMenu:n(239).default})},243:function(t,e,n){"use strict";n.r(e);var r=n(38),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,n){"use strict";n.r(e);var r=n(38),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{staticClass:"has-children has-children--multilevel-submenu"},[n("n-link",{attrs:{to:"/pt/quem-somos"}},[n("span",[t._v("Sobre o ACS Token")])]),t._v(" "),n("ul",{staticClass:"submenu"},[n("li",[n("n-link",{attrs:{to:"/pt/quem-somos"}},[n("span",[t._v("Quem Somos")])])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/pt/whitepaper"}},[n("span",[t._v("White-Paper")])])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/pt/sisa"}},[n("span",[t._v("Sobre o SISA")])])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/pt/cdsa"}},[n("span",[t._v("Sobre a CDSA")])])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/pt/shiboleth"}},[n("span",[t._v("Sobre a Shiboleth")])])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/pt/comprar-creditos-de-carbono"}},[n("span",[t._v("Comprar Créditos de Carbono")])])],1),t._v(" "),n("li",{staticClass:"has-children has-children--multilevel-submenu"},[n("n-link",{attrs:{to:"/"}},[n("span",[t._v("Serviços")])]),t._v(" "),n("ul",{staticClass:"submenu"},[n("li",[n("n-link",{attrs:{to:"/pt/processo-burn"}},[n("span",[t._v("Neutralição de Gases de Efeito Estufa (Burn)")])])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/pt/processo-transferencia-titularidade"}},[n("span",[t._v("Transferência de Titularidade (IHS Markit)")])])],1)])],1),t._v(" "),n("li",{staticClass:"has-children has-children--multilevel-submenu"},[n("n-link",{attrs:{to:"/pt/blog"}},[n("span",[t._v("Biblioteca")])]),t._v(" "),n("ul",{staticClass:"submenu"},[n("li",[n("n-link",{attrs:{to:"/pt/blog"}},[n("span",[t._v("Artigos e Matérias")])])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/pt/download"}},[n("span",[t._v("Downloads")])])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/pt/video"}},[n("span",[t._v("Vídeos")])])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/pt/link"}},[n("span",[t._v("Links Interessantes")])])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/pt/glossario"}},[n("span",[t._v("Glossário")])])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact"}},[n("span",[t._v("Contato")])])],1)])}),[],!1,null,null,null);e.default=component.exports},245:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(237).__importDefault(n(246));e.default=r.default},246:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(237),o=r.__importDefault(n(7));e.default=o.default.extend({props:{threshold:{required:!1,type:Number,default:0},headerClass:{required:!1,type:String,default:"vue-fixed-header"},fixedClass:{required:!1,type:String,default:"vue-fixed-header--isFixed"},hideScrollUp:{required:!1,type:Boolean,default:!1}},data:function(){return{check:null,isFixed:!1,lastScrollTop:0}},mounted:function(){this.main(),this.registerEvent()},beforeDestroy:function(){this.removeEvent()},methods:{getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop},main:function(){var t=this;this.lastScrollTop=this.getScrollTop(),this.check=function(){var e=t,n=e.threshold,r=e.hideScrollUp,o=t.getScrollTop(),l=o>n,c=(o>=t.lastScrollTop||!r)&&l;t.lastScrollTop=o,t.isFixed!==c&&(t.isFixed=c,t.$emit("change",t.isFixed))}},registerEvent:function(){window.addEventListener("scroll",this.check)},removeEvent:function(){window.removeEventListener("scroll",this.check)}},render:function(t){var e,n=this.$slots.default;if(!n||!r.__spreadArrays(n)[0])return t();var o=r.__spreadArrays(n)[0],l=t(o.tag,o.data,o.children||o.text);return l.data=l.data||{class:""},"string"==typeof l.data.class&&(l.data.class=l.data.class.split(" ")),Array.isArray(l.data.class)&&(l.data.class=r.__spreadArrays(l.data.class).reduce((function(a,b){var t;return r.__assign(r.__assign({},a),((t={})[b]=!0,t))}),{})),l.data.class=r.__assign(r.__assign({},l.data.class),((e={})[this.headerClass]=!0,e[this.fixedClass]=!!this.isFixed,e)),l.data.class=Object.entries(l.data.class).map((function(t){var e=t[0];return t[1]?e:null})).filter((function(t){return t})).join(" "),l}})},247:function(t,e,n){"use strict";n(238)},248:function(t,e,n){"use strict";n.r(e);var r={props:["footerAbout"]},o=n(38),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-widget"},[n("div",{staticClass:"footer-widget__logo mb-30"},[n("n-link",{attrs:{to:"/"}},[n("img",{staticClass:"img-fluid",attrs:{src:t.footerAbout.logo,alt:"logo"}})])],1),t._v(" "),n("ul",{staticClass:"footer-widget__list"},[n("li",[t._v(t._s(t.footerAbout.address))]),t._v(" "),n("li",[n("a",{staticClass:"hover-style-link",attrs:{href:"mailto:contact@mitech.com"}},[t._v(t._s(t.footerAbout.email))])]),t._v(" "),n("li",[n("a",{staticClass:"hover-style-link text-black font-weight--bold",attrs:{href:"tel:123344556"}},[t._v(t._s(t.footerAbout.telephone))])]),t._v(" "),n("li",[n("a",{staticClass:"hover-style-link text-color-primary",attrs:{href:"https://hasthemes.com/",target:"_blank"}},[t._v(t._s(t.footerAbout.web))])])])])}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,n){"use strict";n.r(e);var r={props:["title","navLists"]},o=n(38),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-widget"},[n("h6",{staticClass:"footer-widget__title mb-20"},[t._v(t._s(t.title))]),t._v(" "),n("ul",{staticClass:"footer-widget__list"},t._l(t.navLists,(function(nav){return n("li",{key:nav.id},[n("n-link",{staticClass:"hover-style-link",attrs:{to:nav.navUrl}},[t._v("\n                "+t._s(nav.navTitle)+"\n            ")])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,n){"use strict";n.r(e);var r={props:["footerApps"]},o=n(38),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-widget"},[n("h6",{staticClass:"footer-widget__title mb-30"},[t._v(t._s(t.footerApps.footerWidgetTitleFour))]),t._v(" "),n("ul",{staticClass:"footer-widget__list"},[n("li",[n("a",{staticClass:"image_btn",attrs:{href:t.footerApps.androidUrl,target:"_blank"}},[n("img",{staticClass:"img-fluid",attrs:{src:t.footerApps.android,alt:"thumbnail"}})])]),t._v(" "),n("li",[n("a",{staticClass:"image_btn",attrs:{href:t.footerApps.appleUrl,target:"_blank"}},[n("img",{staticClass:"img-fluid",attrs:{src:t.footerApps.apple,alt:"thumbnail"}})])])])])}),[],!1,null,null,null);e.default=component.exports},251:function(t){t.exports=JSON.parse('{"footerAboutData":{"logo":"/images/logo/dark-logo-160x48.png","address":"Av. Getulio Vargas, 1782 - Bosque - Rio Branco - Acre","telephone":"+55 (81) 989196969","email":"contato@acstoken.com.br","web":"acstoken.com.br"},"footerWidgetTitleOne":"","navListOne":[{"navTitle":"","navUrl":"/"},{"navTitle":"","navUrl":"/"},{"navTitle":"","navUrl":"/"},{"navTitle":"","navUrl":"/"}],"footerWidgetTitleTwo":"","navListTwo":[{"navTitle":"","navUrl":"/"},{"navTitle":"","navUrl":"/"},{"navTitle":"","navUrl":"/"}],"footerWidgetTitleThree":"","navListThree":[{"navTitle":"","navUrl":""},{"navTitle":"","navUrl":""}],"footerAppData-old":{"footerWidgetTitleFour":"Apps Store","android":"/images/icons/google-play.jpg","androidUrl":"https://www.android.com/","apple":"/images/icons/apple-store.jpg","appleUrl":"https://www.apple.com/"},"footerAppData":{"footerWidgetTitleFour":"Apps Store","android":"/images/icons/google-play.jpg","androidUrl":"https://www.android.com/","apple":"/images/icons/apple-store.jpg","appleUrl":"https://www.apple.com/"},"footerBottom":{"copyright":"ACS Token | CDSA | Informações: +55 (81) 98919.6969 | contato@acstoken.com.br","fbUrl":"https://www.facebook.com/acstoken/","twitterUrl":"https://twitter.com/acstoken","instagramUrl":"https://www.instagram.com/acstoken","linkedinUrl":"https://www.linkedin.com/company/acstoken/"}}')},252:function(t,e,n){"use strict";n(240)},253:function(t,e,n){"use strict";n.r(e);var r=n(245),o=n.n(r),l=n(243),c=n(244),d={components:{HeaderTop:l.default,Navigation:c.default,FixedHeader:o.a},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},f=n(38),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-area header-area--default"},[n("HeaderTop"),t._v(" "),n("fixed-header",{attrs:{threshold:300}},[n("div",{staticClass:"header-bottom-wrap"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"header default-menu-style position-relative"},[n("div",{staticClass:"header__logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{staticClass:"img-fluid",attrs:{src:"/images/logo/logo-dark.png",alt:"Brand Logo"}})])],1),t._v(" "),n("div",{staticClass:"header-midle-box"},[n("div",{staticClass:"header-bottom-wrap d-md-block d-none"},[n("div",{staticClass:"header-bottom-inner"},[n("div",{staticClass:"header-bottom-left-wrap"},[n("div",{staticClass:"header__navigation d-none d-xl-block"},[n("nav",{staticClass:"navigation-menu primary--menu"},[n("Navigation")],1)])])])])]),t._v(" "),n("div",{staticClass:"header-right-box"},[n("div",{staticClass:"header-right-inner",attrs:{id:"hidden-icon-wrapper"}}),t._v(" "),n("div",{staticClass:"mobile-navigation-icon d-block d-xl-none",attrs:{id:"mobile-menu-trigger"},on:{click:function(e){return t.mobiletoggleClass("addClass","active")}}},[n("i")])])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderTop:n(243).default,Navigation:n(244).default})},254:function(t){t.exports=JSON.parse('{"ctaOne":{"title":"Neutralize emissões de gases de efeito estufa com o ACS Token","buttonTalk":"/","buttonInfo":"/"},"ctaTwo":{"title":"Neutralize emissões de gases de efeito estufa com o ACS Token","subTitle":"Challenges are just opportunities in disguise."},"ctaFour":{"title":"Neutralize emissões de gases de efeito estufa com o <span>ACS Token</span>","subTitle":"Resources","image":"/images/banners/managed-it-services-book-cover.png"}}')},255:function(t,e,n){"use strict";n.r(e);var r={props:["items","breadcrumbTitle"]},o=n(38),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-area bg-cover",style:{backgroundImage:"url('/images/bg/title-bar-01-bg.jpg')"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"breadcrumb_box text-center"},[n("h2",{staticClass:"breadcrumb-title"},[t._v(t._s(t.breadcrumbTitle))]),t._v(" "),n("ul",{staticClass:"breadcrumb-list"},[n("b-breadcrumb",{staticClass:"breadcrumb-item",attrs:{items:t.items}})],1)])])])])])}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,n){"use strict";n.r(e);var r=n(254),o={data:function(){return{data:r}}},l=n(38),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cta-image-area_one section-space--ptb_80 cta-bg-image_one",style:{backgroundImage:"url('/images/f1.jpg')"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-xl-8 col-lg-7"},[n("div",{staticClass:"cta-content md-text-center"},[n("h3",{staticClass:"heading text-white",domProps:{innerHTML:t._s(t.data.ctaOne.title)}},[t._v(t._s(t.data.ctaOne.title))])])]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-5"},[n("div",{staticClass:"cta-button-group--one text-center"},[n("n-link",{staticClass:"btn btn--white btn-one",attrs:{to:"/"}},[n("span",{staticClass:"btn-icon mr-2"},[n("i",{staticClass:"far fa-comment-alt-dots"})]),t._v(" Let's talk\n                    ")]),t._v(" "),n("n-link",{staticClass:"btn btn--secondary btn-two",attrs:{to:"/"}},[n("span",{staticClass:"btn-icon mr-2"},[n("i",{staticClass:"far fa-info-circle"})]),t._v(" Get info\n                    ")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports},257:function(t,e,n){"use strict";n.r(e);var r={props:["title","subTitle"]},o=n(38),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title-wrap text-center"},[n("h6",{staticClass:"section-sub-title mb-20"},[t._v(t._s(t.subTitle))]),t._v(" "),n("h3",{staticClass:"heading",domProps:{innerHTML:t._s(t.title)}},[t._v(t._s(t.title))])])}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,n){"use strict";n.r(e);var r={props:["project"]},o=n(38),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("n-link",{staticClass:"projects-wrap style-01 wow move-up",attrs:{to:""+t.project.url}},[n("div",{staticClass:"projects-image-box"},[n("div",{staticClass:"projects-image"},[n("img",{staticClass:"img-fluid",attrs:{src:t.project.image,alt:"project image"}})]),t._v(" "),n("div",{staticClass:"content"},[n("h6",{staticClass:"heading"},[t._v(t._s(t.project.heading))]),t._v(" "),n("div",{staticClass:"post-categories"},[t._v("\n                "+t._s(t.project.category)+"\n            ")]),t._v(" "),n("div",{staticClass:"text"},[t._v("\n                "+t._s(t.project.desc)+"\n            ")]),t._v(" "),n("div",{staticClass:"box-projects-arrow"},[n("span",{staticClass:"button-text"},[t._v("saiba mais")]),t._v(" "),n("i",{staticClass:"fa fa-long-arrow-right ml-1"})])])])])}),[],!1,null,null,null);e.default=component.exports},264:function(t){t.exports=JSON.parse('{"sectionTitle":"Juntos podemos reduzir emissões de <span>gases do efeito estufa</span>","sectionSubTitle":"Bem-vindo ao ACS Token","projects":[{"id":1,"image":"/images/whitepaper.jpg","url":"/pt/whitepaper","heading":"ACS Token - White Paper","category":"versão 1.0","desc":"Saiba o que é e como funciona o primero ativo digital em Blockchain do mundo 100% lastreado e créditos de carbono jurisdicionais (J-REDD+) do estado do Acre"},{"id":2,"image":"/images/home2.jpg","url":"/pt/sisa","heading":"Para onde vão os recursos obtidos com o ACS Token?","category":"Lei do SISA","desc":"Descubra como são aplicados os recursos obtidos com a comercialização dos créditos de carbono."},{"id":1,"image":"/images/redd.jpg","url":"/pt/redd","heading":"Jurisdictional REDD+","category":"Meio Ambiente","desc":"Descobra porque o ACS Token é um dos melhores instrumentos para reduções de emissões de gases de efeito estufa"}],"depois":{"id":3,"image":"/images/fumaca4.jpg","url":"/pt/para-empresas","heading":"Como o ACS Token pode ser utilizado para compensar as emissões de gases do efeito estufa de uma empresa ou cidade?","category":"","desc":"Descubra como o ACS Token pode auxiliar você na redução de emissões."},"projectsTwo":[{"id":1,"image":"/images/features/case-study-image-01.png","alt":"image","heading":"Aqua Technology Case Studies","category":"Cyber Security","desc":"ARM Holdings is the world\'s leading semiconductor Intellectual Property (IP) supplier. A semiconductor is the electronic controller at the heart of many devices that we use every day."},{"id":2,"image":"/images/features/case-study-image-02.png","alt":"image","heading":"Mitech-Smart Vision","category":"Information Technology","desc":"ARM Holdings is the world\'s leading semiconductor Intellectual Property (IP) supplier. A semiconductor is the electronic controller at the heart of many devices that we use every day."}],"underHeading":"Challenges are just opportunities in disguise.","link":"/","caseStudies":{"bgImg":"/images/bg/single-case-study-bg-01.jpg"}}')},292:function(t,e,n){"use strict";n.r(e);var r=n(257),o=n(263),l=n(264),c={components:{SectionTitle:r.default,CaseStudiesItem:o.default},data:function(){return{data:l}}},d=n(38),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects-wrapper section-space--ptb_100"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("SectionTitle",{staticClass:"text-center section-space--mb_40",attrs:{title:t.data.sectionTitle,subTitle:t.data.sectionSubTitle}})],1)]),t._v(" "),n("div",{staticClass:"row"},t._l(t.data.projects,(function(t){return n("div",{key:t.id,staticClass:"col-lg-4 col-md-6"},[n("CaseStudiesItem",{attrs:{project:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:n(257).default,CaseStudiesItem:n(263).default})},359:function(t,e,n){"use strict";n.r(e);var r=n(253),o=n(255),l=n(292),c=n(256),d=n(241),f=n(242),v={components:{Header:r.default,Breadcrumbs:o.default,CaseStudiesItemWrapper:l.default,CtaThree:c.default,Footer:d.default,OffCanvasMobileMenu:f.default},head:function(){return{title:"Case Studies"}},data:function(){return{breadcrumbNavigation:[{text:"Home",to:"/"},{text:"Case Studies",active:!0}]}}},m=n(38),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("Header"),t._v(" "),n("Breadcrumbs",{attrs:{items:t.breadcrumbNavigation,breadcrumbTitle:"Case Studies"}}),t._v(" "),n("CaseStudiesItemWrapper"),t._v(" "),n("CtaThree"),t._v(" "),n("Footer"),t._v(" "),n("OffCanvasMobileMenu")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(253).default,Breadcrumbs:n(255).default,CtaThree:n(256).default,Footer:n(241).default,OffCanvasMobileMenu:n(242).default})}}]);