(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{165:function(t,e,n){"use strict";n.r(e);var r=n(12),o=(n(8),n(2)),l={name:"TableOfContents",props:["document"]},c=(n(267),n(13)),m=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.document.toc.length?n("div",{staticClass:"field pb-5"},[n("p",[t._v(t._s(t.$t("blog.toc_title")))]),t._v(" "),n("ol",{staticClass:"is-lower-roman"},t._l(t.document.toc,(function(e){return n("li",{key:e.id,class:{toc2:2===e.depth,toc3:3===e.depth}},[n("nuxt-link",{attrs:{to:"#"+e.id}},[t._v(t._s(e.text))])],1)})),0)]):t._e()}),[],!1,null,"2151663a",null).exports,d={name:"PostHeader",props:["page"]},_=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero is-black is-bold h-80"},[n("div",{staticClass:"has-bg-image absolute w-full h-80",style:"\n        filter: blur(5px);\n        background-image: url('https://source.unsplash.com/"+t.page.image+"');\n      "}),t._v(" "),n("div",{staticClass:"hero-body flex items-center"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-auto"},[n("h2",{staticClass:"text-2xl sm:text-3xl leading-tight font-bold"},[t._v("\n            "+t._s(t.page.title)+"\n          ")]),t._v(" "),n("div",{staticClass:"text-sm sm:text-base mt-2"},[n("p",[n("b-icon",{attrs:{icon:"calendar-month",size:"is-small"}}),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.$t("blog.posted_on",{date:t.$moment(t.page.date).locale(t.$store.getters["lang/locale"]).format("ll")}))}})],1),t._v(" "),n("p",[t._v("\n              "+t._s(t.$t("blog.last_update",{date:t.$moment(t.page.updatedAt).locale(t.$store.getters["lang/locale"]).fromNow()}))+"\n            ")]),t._v(" "),n("p",[n("b-icon",{attrs:{icon:"clock-outline",size:"is-small"}}),t._v("\n              "+t._s(t.page.readingTime)+"\n            ")],1),t._v(" "),n("b-taglist",{staticClass:"mt-1"},t._l(t.page.tags,(function(e,r){return n("b-tag",{key:r,class:{"is-danger":"Draft"===e},attrs:{type:"is-primary"}},[n("span",{staticClass:"font-bold"},[t._v("\n                  "+t._s(e)+"\n                ")])])})),1)],1)])])])])])}),[],!1,null,null,null).exports,v={name:"AddtoAny",created:function(){var t=document.createElement("script");t.setAttribute("src","https://static.addtoany.com/menu/page.js"),t.async=!0,document.head.appendChild(t)}},h={name:"post",transition:"slide",components:{AddToAny:Object(c.a)(v,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"a2a_kit a2a_kit_size_32 a2a_default_style"},[e("a",{staticClass:"a2a_button_facebook"}),this._v(" "),e("a",{staticClass:"a2a_button_twitter"}),this._v(" "),e("a",{staticClass:"a2a_button_linkedin"}),this._v(" "),e("a",{staticClass:"a2a_button_whatsapp"}),this._v(" "),e("a",{staticClass:"a2a_dd",attrs:{href:"https://www.addtoany.com/share"}})])])}],!1,null,null,null).exports,TableOfContents:m,PostHeader:_,Breadcrumbs:n(262).a},head:function(){return{title:this.page.title,meta:[{hid:"description",name:"description",content:this.page.summary},{hid:"og:title",property:"og:title",content:this.page.title},{hid:"og:description",property:"og:description",content:this.page.summary},{hid:"twitter:title",name:"twitter:title",content:this.page.title},{hid:"twitter:description",name:"twitter:description",content:this.page.summary}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,c,m,d,_,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,l=o.slug,e.next=4,n("blog",l).fetch();case 4:return c=e.sent,e.next=7,n("blog").only(["title","summary","slug"]).sortBy("date","asc").surround(l).fetch();case 7:return m=e.sent,d=Object(r.a)(m,2),_=d[0],v=d[1],e.abrupt("return",{page:c,prev:_,next:v});case 12:case"end":return e.stop()}}),e)})))()}},f=Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("post-header",{attrs:{page:t.page}}),t._v(" "),n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-variable is-8"},[n("div",{staticClass:"column is-one-fifth is-hidden-mobile"},[n("div",{staticClass:"content text-base sticky top-0 z-10 pt-3"},[n("table-of-contents",{attrs:{document:t.page}})],1)]),t._v(" "),n("div",{staticClass:"column is-8-desktop is-9-tablet is-auto-mobile"},[n("breadcrumbs"),t._v(" "),t.$moment(t.page.date).add(6,"months").isBefore()?n("b-notification",{attrs:{type:"is-info","has-icon":""}},[t._v(t._s(t.$t("blog.old_post")))]):t._e(),t._v(" "),n("div",{staticClass:"content text-sm sm:text-base md:text-base"},[n("nuxt-content",{attrs:{document:t.page}})],1),t._v(" "),t.page.external_url?n("div",{staticClass:"mt-10"},[n("b-tooltip",{attrs:{always:"",label:t.page.external_url.site,position:"is-right",type:"is-dark",square:!0}},[n("b-button",{attrs:{tag:"a",type:"is-info",size:"is-medium",href:t.page.external_url.url,target:"_blank","icon-right":"link-variant"}},[t._v(t._s(t.$t("blog.read_more")))])],1)],1):t._e(),t._v(" "),n("hr"),t._v(" "),t._m(0),t._v(" "),n("b-field",{attrs:{label:t.$t("blog.share")}},[n("add-to-any")],1)],1)])])]),t._v(" "),n("div",{staticClass:"hero is-black is-bold"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-mobile content"},[n("div",{staticClass:"column is-6"},[t.next?n("div",{staticClass:"text-left"},[n("b-icon",{attrs:{icon:"arrow-left",size:"is-small"}}),t._v(" "),n("p",{staticClass:"text-base font-bold leading-5"},[n("nuxt-link",{staticClass:"has-text-white",attrs:{to:{name:"post.show",params:{slug:t.next.slug}}}},[n("span",[t._v(t._s(t.next.title))])])],1),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(t._f("truncate")(t.next.summary,100)))])],1):t._e()]),t._v(" "),n("div",{staticClass:"column is-6"},[t.prev?n("div",{staticClass:"text-right"},[n("b-icon",{attrs:{icon:"arrow-right",size:"is-small"}}),t._v(" "),n("p",{staticClass:"text-base font-bold leading-5"},[n("nuxt-link",{staticClass:"has-text-white",attrs:{to:{name:"post.show",params:{slug:t.prev.slug}}}},[n("span",[t._v(t._s(t.prev.title))])])],1),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(t._f("truncate")(t.prev.summary,100)))])],1):t._e()])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("script",{attrs:{type:"application/javascript",src:"https://utteranc.es/client.js",repo:"eleazarbr/eresendez","issue-term":"pathname",theme:"preferred-color-scheme",crossorigin:"anonymous",async:""}})])}],!1,null,null,null);e.default=f.exports},262:function(t,e,n){"use strict";n(42),n(17),n(9),n(7),n(31);var r=n(15);n(50),n(14),n(104),n(51),n(62);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"Breadcrumbs",props:{title:{type:String,default:null}},computed:{crumbs:function(){var t=this,e=this.$route.fullPath,n=e.startsWith("/")?e.substring(1).split("/"):e.split("/"),l=[],path="";return n.forEach((function(param,e){path="".concat(path,"/").concat(param);var n=t.$router.match(path);if(null!==n.name){var title=t.$options.filters.capitalize(param.replace(/-/g," "));l.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({title:title},n))}})),l}}},c=n(13),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"breadcrumb has-arrow-separator",attrs:{"aria-label":"breadcrumbs"}},[n("ul",{attrs:{vocab:"http://schema.org/",typeof:"BreadcrumbList"}},[n("li",{attrs:{property:"itemListElement",typeof:"ListItem"}},[n("nuxt-link",{attrs:{property:"item",typeof:"WebPage",to:{name:"web.home"}}},[t._v("\n        Inicio\n      ")]),t._v(" "),n("meta",{attrs:{property:"position",content:"1"}})],1),t._v(" "),t._l(t.crumbs,(function(e,r){return n("li",{key:r,class:{"is-active":r==t.crumbs.length-1},attrs:{property:"itemListElement",typeof:"ListItem"}},[n("nuxt-link",{attrs:{property:"item",typeof:"WebPage",to:e.path}},[n("span",{attrs:{property:"name"}},[t._v(t._s(t._f("truncate")(t.$route.fullPath===e.path&&null!==t.title?t.title:e.title,30)))])]),t._v(" "),n("meta",{attrs:{property:"position",content:r+2}})],1)}))],2)])}),[],!1,null,null,null);e.a=component.exports},265:function(t,e,n){var content=n(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("0079cd54",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n(265)},268:function(t,e,n){(e=n(44)(!1)).push([t.i,".toc3[data-v-2151663a]{margin-left:1.25rem}.toc4[data-v-2151663a]{margin-left:2.5rem}",""]),t.exports=e}}]);