(this.webpackJsonpeverything=this.webpackJsonpeverything||[]).push([[100],{3710:function(n,e,t){"use strict";t.d(e,"b",(function(){return d})),t.d(e,"a",(function(){return s})),t.d(e,"d",(function(){return v})),t.d(e,"c",(function(){return b})),t.d(e,"e",(function(){return p}));var r=t(1),u=t(1381),l=t(2839),c=function(n){return n&&n.reactPage&&n.reactPage.focus},o=function(n){var e,t,r;return null!==(r=null===(t=null===(e=c(n))||void 0===e?void 0:e.nodeIds)||void 0===t?void 0:t.filter((function(e){var t;return null===(t=Object(l.b)(n,e))||void 0===t?void 0:t.node})))&&void 0!==r?r:[]},i=function(n){var e=o(n);return 1===(null===e||void 0===e?void 0:e.length)?e[0]:null},a=function(n,e){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var r,u,l=t.call(n),c=[];try{for(;(void 0===e||e-- >0)&&!(r=l.next()).done;)c.push(r.value)}catch(o){u={error:o}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(u)throw u.error}}return c},f=function(n,e,t){if(t||2===arguments.length)for(var r,u=0,l=e.length;u<l;u++)!r&&u in e||(r||(r=Array.prototype.slice.call(e,0,u)),r[u]=e[u]);return n.concat(r||Array.prototype.slice.call(e))},d=function(){return Object(u.c)(i)},s=function(){return Object(u.c)(o)},v=function(n){return Object(u.c)((function(e){return o(e).includes(n)}))},b=function(n){return Object(u.c)((function(e){return i(e)===n}))},p=function(n,e,t){var l=Object(u.c)((function(e){var t=c(e),r=i(e);return t&&r===n?t.scrollToCell:null}));Object(r.useEffect)((function(){if(l)return e()}),f([l],a(t),!1))}},3841:function(n,e,t){"use strict";t.r(e);var r=t(1311),u=t(3710),l=t(3018),c=t(1),o=t.n(c),i=t(717),a=t(1994),f=t(1993),d=t.n(f),s=t(1869),v=t(1365),b=t(1411),p=t(2140),y=Object(r.a)((function(){return t.e(82).then(t.bind(null,3843))})),g=o.a.memo((function(n){var e=n.plugins,t=n.defaultPluginType,r=n.readOnly,l=n.placeholder,c={useSelected:i.e,useFocused:i.d,readOnly:r},f=Object(p.a)({plugins:e,defaultPluginType:t,injections:c},[]),y=Object(p.b)({plugins:e,injections:c},[]),g=function(n,e){var t=n.plugins,r=Object(i.f)();return o.a.useCallback((function(n){return t.filter((function(n){return n.hotKey})).forEach((function(e){d()(e.hotKey,n)&&(n.preventDefault(),Object(v.b)(r,e)?Object(b.b)(r,e):Object(s.a)(r,e))})),d()(["mod+z","mod+y"],n)?(n.preventDefault(),!0):d()(["esc"],n)?(i.b.blur(r),!0):d()("shift+enter",n)?(n.preventDefault(),r.insertText("\n"),!0):void 0}),e)}({plugins:e},[]),O=Object(a.b)(),h=Object(u.a)().length>1;return o.a.createElement(i.a,{placeholder:r?void 0:l,readOnly:O||r||h,renderElement:f,renderLeaf:y,onKeyDown:r?void 0:g})}));e.default=o.a.memo((function(n){var e=n.plugins,t=n.focused,r=n.readOnly,u=Object(l.g)().t;return o.a.createElement(o.a.Fragment,null,!r&&t&&o.a.createElement(y,{plugins:n.plugins,translations:n.translations}),o.a.createElement(g,{placeholder:u(n.translations.placeholder),readOnly:r,plugins:e,defaultPluginType:n.defaultPluginType}))}))}}]);