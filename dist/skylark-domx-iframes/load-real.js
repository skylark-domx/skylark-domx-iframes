/**
 * skylark-domx-iframes - The skylark iframes library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-domx-noder","skylark-domx-data","./iframes","./hook-sizing"],function(r,a,e,o){return e.loadReal=function(e,l){l=l||{};var t=r.clone(e),n=l.url;n||(n=a.attr(t,l.urlAttrName||"data-url")),n=n.split("&")[0],a.prop(t,"src",n),a.prop(t,"_src",n),r.replace(t,ifame),o(t)}});
//# sourceMappingURL=sourcemaps/load-real.js.map
