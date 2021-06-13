/**
 * skylark-domx-iframes - The skylark iframes library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-urls/getQuery","skylark-domx-noder","skylark-domx-geom","skylark-domx-styler","./iframes","./load-real","./lazy-load"],function(e,r,a,l,s,i){"use strict";return s.replace=function(s,t){t=t||{};var d=r.createElement("iframe",{className:s.className,id:s.id,style:{border:"1px solid #aaa"}}),h=t.url||s.href,o=t.size||e(s.search),n=t.holdingUrl;l.css(d,"width",o.width||"100%"),l.css(d,"minHeight",o.height||"300px"),o.height&&l.css(d,"maxHeight",o.height),a.inview(s,100)?i(d,{url:h}):lazyLoad(d,{url:h,holdingUrl:n}),r.replace(d,s)}});
//# sourceMappingURL=sourcemaps/replace.js.map
