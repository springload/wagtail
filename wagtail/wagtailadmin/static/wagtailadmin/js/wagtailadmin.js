webpackJsonp([0],{161:function(e,t,n){"use strict";function r(e){return function(t){return t(d(e)),c.getPage(e).then(function(n){t(f(e,n))},function(n){t(p(e,n))})}}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return n(_(e)),c.getPageChildren(e,{offset:t}).then(function(r){var l=r.items,i=r.meta,u=t+l.length;n(m(e,l,i)),u<i.total_count&&u<s.MAX_EXPLORER_PAGES&&n(a(e,u))},function(t){n(E(e,t))})}}function l(e){return function(t,n){var l=n(),i=l.explorer,u=l.nodes;if(i.isVisible)t(g());else{var o=u[e];t(h(e)),o||t(a(e));1!==e&&t(r(e))}}}function i(e){return function(t,n){var r=n(),l=r.nodes,i=l[e];t(v(e)),i&&!i.isFetching&&!i.children.count>0&&t(a(e))}}Object.defineProperty(t,"__esModule",{value:!0}),t.popPage=t.closeExplorer=void 0,t.toggleExplorer=l,t.pushPage=i;var u=n(584),o=n(261),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o),s=n(46),d=(0,u.createAction)("GET_PAGE_START"),f=(0,u.createAction)("GET_PAGE_SUCCESS",function(e,t){return{id:e,data:t}}),p=(0,u.createAction)("GET_PAGE_FAILURE",function(e,t){return{id:e,error:t}}),_=(0,u.createAction)("GET_CHILDREN_START",function(e){return{id:e}}),m=(0,u.createAction)("GET_CHILDREN_SUCCESS",function(e,t,n){return{id:e,items:t,meta:n}}),E=(0,u.createAction)("GET_CHILDREN_FAILURE",function(e,t){return{id:e,error:t}}),h=(0,u.createAction)("OPEN_EXPLORER",function(e){return{id:e}}),g=t.closeExplorer=(0,u.createAction)("CLOSE_EXPLORER"),v=(t.popPage=(0,u.createAction)("POP_PAGE"),(0,u.createAction)("PUSH_PAGE",function(e){return{id:e}}))},162:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),l=r(a),i=n(46),u=n(75),o=r(u),c=function(){return l.default.createElement("span",null,l.default.createElement(o.default,{name:"spinner",className:"c-spinner"})," "+i.STRINGS.LOADING)};t.default=c},163:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(16),l=r(a),i=n(12),u=r(i),o=function(e){var t=e.status;return u.default.createElement("span",{className:"o-pill c-status"+(t.live?" c-status--live":"")},t.status)};o.propTypes={status:l.default.shape({live:l.default.bool.isRequired,status:l.default.string.isRequired}).isRequired},t.default=o},164:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.POP=t.PUSH=void 0;var a=n(16),l=r(a),i=n(12),u=r(i),o=n(557),c=r(o),s=t.PUSH="push",d=t.POP="pop",f=function(e){var t=e.name,n=e.component,r=e.className,a=e.duration,l=e.children;return u.default.createElement(c.default,{component:n,transitionEnterTimeout:a,transitionLeaveTimeout:a,transitionName:"c-transition-"+t,className:r},l)};f.propTypes={name:l.default.oneOf([s,d]).isRequired,component:l.default.string,className:l.default.string,duration:l.default.number,children:l.default.node},f.defaultProps={component:"div",children:null,className:null,duration:210},t.default=f},258:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.initExplorer=t.ExplorerToggle=t.Explorer=t.Transition=t.LoadingSpinner=t.PublicationStatus=t.Icon=t.Button=void 0;var a=n(74),l=r(a),i=n(75),u=r(i),o=n(163),c=r(o),s=n(162),d=r(s),f=n(164),p=r(f),_=n(269),m=r(_);t.Button=l.default,t.Icon=u.default,t.PublicationStatus=c.default,t.LoadingSpinner=d.default,t.Transition=p.default,t.Explorer=m.default,t.ExplorerToggle=_.ExplorerToggle,t.initExplorer=_.initExplorer},261:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.getPageChildren=t.getPage=void 0;var r=n(262),a=n(46);t.getPage=function(e){var t=""+a.ADMIN_API.PAGES+e+"/";return(0,r.get)(t)},t.getPageChildren=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=a.ADMIN_API.PAGES+"?child_of="+t;return n.fields&&(l+="&fields="+e.encodeURIComponent(n.fields.join(","))),n.onlyWithChildren&&(l+="&has_children=1"),n.offset&&(l+="&offset="+n.offset),l+=a.ADMIN_API.EXTRA_CHILDREN_PARAMETERS,(0,r.get)(l)}}).call(t,n(41))},262:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=e.fetch,r=e.Headers,a=function(e){if(e.status>=200&&e.status<300)return e;throw new Error(e.statusText)},l=function(e){return e.json()},i=function(e,t){return new Promise(function(n,r){var a=setTimeout(function(){r(new Error("Response timeout"))},e);t.then(function(e){clearTimeout(a),n(e)},function(e){clearTimeout(a),r(e)})})},u=function(e,t){var u={credentials:"same-origin",headers:new r({Accept:"application/json","Content-Type":"application/json"}),method:e};return i(15e3,n(t,u)).then(a).then(l)};t.get=function(e){return u("GET",e)}}).call(t,n(41))},263:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(16),l=r(a),i=n(12),u=r(i),o=n(150),c=n(161),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),d=n(266),f=r(d),p=function(e){var t=e.isVisible,n=e.nodes,r=e.path,a=e.pushPage,l=e.popPage,i=e.onClose,o=n[r[r.length-1]];return t?u.default.createElement(f.default,{path:r,page:o,nodes:n,onClose:i,popPage:l,pushPage:a}):null};p.propTypes={isVisible:l.default.bool.isRequired,path:l.default.array.isRequired,nodes:l.default.object.isRequired,pushPage:l.default.func.isRequired,popPage:l.default.func.isRequired,onClose:l.default.func.isRequired};var _=function(e){return{isVisible:e.explorer.isVisible,path:e.explorer.path,nodes:e.nodes}},m=function(e){return{pushPage:function(t){return e(s.pushPage(t))},popPage:function(){return e(s.popPage())},onClose:function(){return e(s.closeExplorer())}}};t.default=(0,o.connect)(_,m)(p)},264:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(16),l=r(a),i=n(12),u=r(i),o=n(46),c=n(74),s=r(c),d=n(75),f=r(d),p=function(e){var t=e.page,n=e.depth,r=e.onClick,a=1===n;return u.default.createElement(s.default,{href:t.id?""+o.ADMIN_URLS.PAGES+t.id+"/":o.ADMIN_URLS.PAGES,className:"c-explorer__header",onClick:r},u.default.createElement("div",{className:"c-explorer__header__inner"},u.default.createElement(f.default,{name:a?"home":"arrow-left"}),u.default.createElement("span",null,t.title||o.STRINGS.PAGES)))};p.propTypes={page:l.default.shape({id:l.default.oneOfType([l.default.string,l.default.number]),title:l.default.string}).isRequired,depth:l.default.number.isRequired,onClick:l.default.func.isRequired},t.default=p},265:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(16),l=r(a),i=n(12),u=r(i),o=n(46),c=n(75),s=r(c),d=n(74),f=r(d),p=n(163),_=r(p),m=u.default.createElement(s.default,{name:"folder-inverse"}),E=u.default.createElement(s.default,{name:"edit",title:o.STRINGS.EDIT}),h=u.default.createElement(s.default,{name:"arrow-right",title:o.STRINGS.SEE_CHILDREN}),g=function(e){var t=e.item,n=e.onClick,r=t.id,a=t.title,l=t.meta,i=l.children.count>0,c=l.status.live&&!l.status.has_unpublished_changes;return u.default.createElement("div",{className:"c-explorer__item"},u.default.createElement(f.default,{href:""+o.ADMIN_URLS.PAGES+r+"/",className:"c-explorer__item__link"},i?m:null,u.default.createElement("h3",{className:"c-explorer__item__title"},a),c?null:u.default.createElement("span",{className:"c-explorer__meta"},u.default.createElement(_.default,{status:l.status}))),u.default.createElement(f.default,{href:""+o.ADMIN_URLS.PAGES+r+"/edit/",className:"c-explorer__item__action c-explorer__item__action--small"},E),i?u.default.createElement(f.default,{className:"c-explorer__item__action",onClick:n},h):null)};g.propTypes={item:l.default.shape({id:l.default.oneOfType([l.default.string,l.default.number]).isRequired,title:l.default.string.isRequired,meta:l.default.shape({status:l.default.object.isRequired}).isRequired}).isRequired,onClick:l.default.func.isRequired},t.default=g},266:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(16),c=r(o),s=n(12),d=r(s),f=n(455),p=r(f),_=n(46),m=n(74),E=r(m),h=n(162),g=r(h),v=n(164),P=r(v),R=n(264),b=r(R),y=n(265),S=r(y),O=n(268),T=r(O),N=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={transition:v.PUSH,paused:!1},n.onItemClick=n.onItemClick.bind(n),n.onHeaderClick=n.onHeaderClick.bind(n),n.clickOutside=n.clickOutside.bind(n),n}return i(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.props.path,n=e.path.length>t.length;this.setState({transition:n?v.PUSH:v.POP})}},{key:"componentDidMount",value:function(){document.querySelector("[data-explorer-menu-item]").classList.add("submenu-active"),document.body.classList.add("explorer-open"),document.addEventListener("mousedown",this.clickOutside),document.addEventListener("touchend",this.clickOutside)}},{key:"componentWillUnmount",value:function(){document.querySelector("[data-explorer-menu-item]").classList.remove("submenu-active"),document.body.classList.remove("explorer-open"),document.removeEventListener("mousedown",this.clickOutside),document.removeEventListener("touchend",this.clickOutside)}},{key:"clickOutside",value:function(e){var t=this.props.onClose,n=document.querySelector("[data-explorer-menu]"),r=document.querySelector("[data-explorer-menu-item]");n.contains(e.target)||r.contains(e.target)||t(),r.contains(e.target)&&this.setState({paused:!0})}},{key:"onItemClick",value:function(e,t){var n=this.props.pushPage;t.preventDefault(),t.stopPropagation(),n(e)}},{key:"onHeaderClick",value:function(e){var t=this.props,n=t.path,r=t.popPage;n.length>1&&(e.preventDefault(),e.stopPropagation(),r())}},{key:"renderChildren",value:function(){var e=this,t=this.props,n=t.page,r=t.nodes,a=void 0;return a=n.isFetching||n.children.items?d.default.createElement("div",{key:"children"},n.children.items.map(function(t){return d.default.createElement(S.default,{key:t,item:r[t],onClick:e.onItemClick.bind(null,t)})})):d.default.createElement("div",{key:"empty",className:"c-explorer__placeholder"},_.STRINGS.NO_RESULTS),d.default.createElement("div",{className:"c-explorer__drawer"},a,n.isFetching?d.default.createElement("div",{key:"fetching",className:"c-explorer__placeholder"},d.default.createElement(g.default,null)):null,n.isError?d.default.createElement("div",{key:"error",className:"c-explorer__placeholder"},_.STRINGS.SERVER_ERROR):null)}},{key:"render",value:function(){var e=this.props,t=e.page,n=e.onClose,r=e.path,a=this.state,l=a.transition,i=a.paused;return d.default.createElement(p.default,{tag:"nav",className:"explorer",paused:i||!t||t.isFetching,focusTrapOptions:{initialFocus:".c-explorer__close",onDeactivate:n}},d.default.createElement(E.default,{className:"c-explorer__close u-hidden",onClick:n},_.STRINGS.CLOSE_EXPLORER),d.default.createElement(P.default,{name:l,className:"c-explorer"},d.default.createElement("div",{key:r.length,className:"c-transition-group"},d.default.createElement(b.default,{depth:r.length,page:t,onClick:this.onHeaderClick}),this.renderChildren(),t.isError||t.children.items&&t.children.count>_.MAX_EXPLORER_PAGES?d.default.createElement(T.default,{page:t}):null)))}}]),t}(d.default.Component);N.propTypes={nodes:c.default.object.isRequired,path:c.default.array.isRequired,page:c.default.shape({isFetching:c.default.bool,children:c.default.shape({count:c.default.number,items:c.default.array})}).isRequired,onClose:c.default.func.isRequired,popPage:c.default.func.isRequired,pushPage:c.default.func.isRequired},t.default=N},267:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(16),l=r(a),i=n(12),u=r(i),o=n(150),c=n(161),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),d=n(74),f=r(d),p=function(e){var t=e.children,n=e.onToggle;return u.default.createElement(f.default,{icon:["folder-open-inverse","arrow-right-after"],onClick:n},t)};p.propTypes={onToggle:l.default.func.isRequired,children:l.default.node.isRequired};var _=function(){return{}},m=function(e){return{onToggle:function(t){return e(s.toggleExplorer(t))}}},E=function(e,t,n){return{children:n.children,onToggle:t.onToggle.bind(null,n.startPage)}};t.default=(0,o.connect)(_,m,E)(p)},268:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(16),l=r(a),i=n(12),u=r(i),o=n(46),c=n(75),s=r(c),d=function(e){var t=e.page,n=t.children.count;return u.default.createElement("a",{href:""+o.ADMIN_URLS.PAGES+t.id+"/",className:"c-explorer__see-more",tabIndex:0},o.STRINGS.SEE_ALL,u.default.createElement("span",null," "+n+" "+(1===n?o.STRINGS.PAGE.toLowerCase():o.STRINGS.PAGES.toLowerCase())),u.default.createElement(s.default,{name:"arrow-right"}))};d.propTypes={page:l.default.object.isRequired},t.default=d},269:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.initExplorer=t.ExplorerToggle=void 0;var a=n(12),l=r(a),i=n(196),u=r(i),o=n(150),c=n(253),s=n(641),d=r(s),f=n(263),p=r(f),_=n(267),m=r(_),E=n(270),h=r(E),g=n(271),v=r(g),P=function(e,t){var n=(0,c.combineReducers)({explorer:h.default,nodes:v.default}),r=[d.default],a=(0,c.createStore)(n,{},(0,c.compose)(c.applyMiddleware.apply(void 0,r),window.devToolsExtension?window.devToolsExtension():function(e){return e})),i=parseInt(t.getAttribute("data-explorer-start-page"),10);u.default.render(l.default.createElement(o.Provider,{store:a},l.default.createElement(m.default,{startPage:i},t.textContent)),t.parentNode),u.default.render(l.default.createElement(o.Provider,{store:a},l.default.createElement(p.default,null)),e)};t.default=p.default,t.ExplorerToggle=m.default,t.initExplorer=P},270:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1],n=t.type,r=t.payload;switch(n){case"OPEN_EXPLORER":return{isVisible:!0,path:[r.id]};case"CLOSE_EXPLORER":return a;case"PUSH_PAGE":return{isVisible:e.isVisible,path:e.path.concat([r.id])};case"POP_PAGE":return{isVisible:e.isVisible,path:e.path.slice(0,-1)};default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var a={isVisible:!1,path:[]}},271:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],n=t.type,a=t.payload;switch(n){case"OPEN_EXPLORER":case"GET_PAGE_SUCCESS":case"GET_CHILDREN_START":case"GET_PAGE_FAILURE":case"GET_CHILDREN_FAILURE":return Object.assign({},e,r({},a.id,i(e[a.id],{type:n,payload:a})));case"GET_CHILDREN_SUCCESS":var o=Object.assign({},e,r({},a.id,i(e[a.id],{type:n,payload:a})));return a.items.forEach(function(e){o[e.id]=Object.assign({},l,e)}),o;default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var l={isFetching:!1,isError:!1,children:{items:[],count:0},meta:{children:{}}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1],n=t.type,r=t.payload;switch(n){case"OPEN_EXPLORER":return e||l;case"GET_PAGE_SUCCESS":return Object.assign({},e,r.data,{isError:!1});case"GET_CHILDREN_START":return Object.assign({},e,{isFetching:!0});case"GET_CHILDREN_SUCCESS":return Object.assign({},e,{isFetching:!1,isError:!1,children:{items:e.children.items.slice().concat(r.items.map(function(e){return e.id})),count:r.meta.total_count}});case"GET_PAGE_FAILURE":case"GET_CHILDREN_FAILURE":return Object.assign({},e,{isFetching:!1,isError:!0});default:return e}},u={}},272:function(e,t,n){"use strict";var r=n(258);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("[data-explorer-menu]"),t=document.querySelector("[data-explorer-start-page]");e&&t&&(0,r.initExplorer)(e,t)})},46:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});t.ADMIN_API=e.wagtailConfig.ADMIN_API,t.STRINGS=e.wagtailConfig.STRINGS,t.ADMIN_URLS=e.wagtailConfig.ADMIN_URLS,t.MAX_EXPLORER_PAGES=200}).call(t,n(41))},74:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(16),l=r(a),i=n(12),u=r(i),o=function(e,t){var n=""!==t,r="";return n&&(r="string"==typeof t?" icon-"+t:t.map(function(e){return" icon-"+e}).join("")),e+" "+(n?"icon":"")+r},c=function(e,t,n,r){n&&"#"===e&&(r.preventDefault(),r.stopPropagation()),t&&t(r)},s=function(e){var t=e.className,n=e.icon,r=e.children,a=e.accessibleLabel,l=e.isLoading,i=e.href,s=e.target,d=e.preventDefault,f=e.onClick,p=null!==r,_=l?"spinner":n,m=a?u.default.createElement("span",{className:"visuallyhidden"},a):null;return u.default.createElement("a",{className:o(t,_),onClick:c.bind(null,i,f,d),rel:"_blank"===s?"noopener noreferrer":null,href:i,target:s},p?r:m)};s.propTypes={href:l.default.string,className:l.default.string,icon:l.default.oneOfType([l.default.string,l.default.arrayOf(l.default.string)]),target:l.default.string,children:l.default.node,accessibleLabel:l.default.string,onClick:l.default.func,isLoading:l.default.bool,preventDefault:l.default.bool},s.defaultProps={href:"#",className:"",icon:"",target:null,children:null,accessibleLabel:null,onClick:null,isLoading:!1,preventDefault:!0},t.default=s},75:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(16),l=r(a),i=n(12),u=r(i),o=function(e){var t=e.name,n=e.className,r=e.title;return u.default.createElement("span",null,u.default.createElement("span",{className:"icon icon-"+t+" "+(n||""),"aria-hidden":!0}),r?u.default.createElement("span",{className:"visuallyhidden"},r):null)};o.propTypes={name:l.default.string.isRequired,className:l.default.string,title:l.default.string},o.defaultProps={className:null,title:null},t.default=o}},[272]);