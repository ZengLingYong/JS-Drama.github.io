(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{377:function(t,s,a){t.exports=a.p+"assets/img/43559244-e4f738da-963f-11e8-8c0c-10d9d44bdce4.3c28e63f.gif"},378:function(t,s,a){t.exports=a.p+"assets/img/43518041-4ea2d312-95bd-11e8-9a62-9b21f5e0f528.f70b0d13.gif"},379:function(t,s,a){t.exports=a.p+"assets/img/43521890-23749ff6-95ca-11e8-907e-67a6d5528330.15553cdd.gif"},380:function(t,s,a){t.exports=a.p+"assets/img/43560815-dc8f7fca-9646-11e8-8c36-7cd61f85fd03.7032a5b0.gif"},381:function(t,s,a){t.exports=a.p+"assets/img/43561041-c9a1a1c6-9647-11e8-9fa1-3a701eba95d0.3f80d5b0.png"},456:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"神奇的选择器-focus-within"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#神奇的选择器-focus-within"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://www.cnblogs.com/coco1s/p/9406413.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("神奇的选择器 :focus-within"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("CSS 的伪类选择器和伪元素选择器，让 CSS 有了更为强大的功能。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("伪类大家听的多了，伪元素可能听到的不是那么频繁，其实 CSS 对这两个是有区分的。")])]),t._v(" "),n("p",[t._v("有个错误有必要每次讲到伪类都提一下，有时你会发现伪类元素使用了两个冒号 (:😃 而不是一个冒号 (😃，这是 CSS3 规范中的一部分要求，目的是为了区分伪类和伪元素，大多数浏览器都支持下面这两种表示方式。")]),t._v(" "),n("p",[t._v("通常而言，")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#id:after")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#id::after")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("符合标准而言，单冒号(:)用于 CSS3 伪类，双冒号(::)用于 CSS3 伪元素。")]),t._v(" "),n("p",[t._v("当然，也有例外，对于 CSS2 中已经有的伪元素，例如 :before，单冒号和双冒号的写法 ::before 作用是一样的。")]),t._v(" "),n("p",[t._v("所以，如果你的网站只需要兼容 webkit、firefox、opera 等浏览器或者是移动端页面，建议对于伪元素采用双冒号的写法，如果不得不兼容低版本 IE 浏览器，还是用 CSS2 的单冒号写法比较安全。")]),t._v(" "),n("h2",{attrs:{id:"伪类选择器-focus-within"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#伪类选择器-focus-within"}},[t._v("#")]),t._v(" 伪类选择器 "),n("code",[t._v(":focus-within")])]),t._v(" "),n("p",[t._v("言归正传，今天要说的就是"),n("code",[t._v(":focus-within")]),t._v(" 伪类选择器。")]),t._v(" "),n("p",[t._v("它表示一个元素获得焦点，或，该元素的后代元素获得焦点。划重点，它或它的后代获得焦点。")]),t._v(" "),n("p",[t._v("这也就意味着，它或它的后代获得焦点，都可以触发 "),n("code",[t._v(":focus-within")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"focus-within-的冒泡性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#focus-within-的冒泡性"}},[t._v("#")]),t._v(" "),n("code",[t._v(":focus-within")]),t._v(" 的冒泡性")]),t._v(" "),n("p",[t._v("这个属性有点类似 Javascript 的事件冒泡，从可获焦元素开始一直冒泡到根元素 "),n("code",[t._v("html")]),t._v("，都可以接收触发 "),n("code",[t._v(":focus-within")]),t._v(" 事件，类似下面这个简单的例子这样：")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("g-father"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("g-children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("div",{staticClass:"language-scss line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-scss"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html,\nbody,\n.g-father,\n.g-children ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #999"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("input ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("... "),n("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(":focus ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #00bcd4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html:focus-within ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #e91e63"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body:focus-within ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ff5722"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".g-father:focus-within ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ffeb3b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".g-children:focus-within ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #4caf50"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])]),n("p",[t._v("就是这样：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(377),alt:"focuswithinmaopao"}})]),t._v(" "),n("p",[n("a",{attrs:{href:"https://codepen.io/Chokcoco/pen/gjeoPg",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodePen Demo -- :focus-within 冒泡触发"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("这个选择器的存在，让 CSS 有了进一步的让元素持久停留在一种新状态的的能力。")]),t._v(" "),n("p",[t._v("下面几个例子，看看 "),n("code",[t._v(":focus-within")]),t._v(" 可以提供什么能力，做些什么事情。")]),t._v(" "),n("h2",{attrs:{id:"感应用户聚焦区域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#感应用户聚焦区域"}},[t._v("#")]),t._v(" 感应用户聚焦区域")]),t._v(" "),n("p",[t._v("它或它的后代获得焦点，这一点使得让感知获焦区域变得更大，所以，最常规的用法就是使用 "),n("code",[t._v(":focus-within")]),t._v(" 感应用户操作聚焦区域，高亮提醒。")]),t._v(" "),n("p",[t._v("下面的效果没有任何 JS 代码：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(378),alt:"cssfocuswithinpesudo"}})]),t._v(" "),n("p",[t._v("这里是什么意思呢？"),n("code",[t._v(":focus-within")]),t._v(" 做了什么呢？")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("我们无须去给获焦的元素设置 "),n("code",[t._v(":focus")]),t._v(" 伪类，而是可以给需要的父元素设置，这样当元素获焦时，我可以一并控制它的父元素的样式")])])]),t._v(" "),n("p",[t._v("核心思想用 CSS 代码表达出来大概是这样：")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("g-container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("g-username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("g_input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("g-username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("g_input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".g-container:focus-within")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("... input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("iframe",{attrs:{title:"CSS focus-within INPUT",src:"https://codepen.io/Chokcoco/embed/rrJeLj/?height=265&theme-id=0&default-tab=css,result&embed-version=2",frameborder:"no",scrolling:"no",width:"100%",height:"300"}}),t._v(" "),n("p",[n("a",{attrs:{href:"https://codepen.io/Chokcoco/pen/rrJeLj",target:"_blank",rel:"noopener noreferrer"}},[t._v("DEMO -- CSS focus-within INPUT"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("运用上面思想，我们可以把效果做的更炫一点点，在某些场景制作一些增强用户体验的效果：")]),t._v(" "),n("iframe",{attrs:{title:"PURE CSS FOCUS By :focus-within",src:"https://codepen.io/Chokcoco/embed/EpEjQX/?height=265&theme-id=0&default-tab=css,result&embed-version=2",frameborder:"no",scrolling:"no",width:"100%",height:"300"}}),t._v(" "),n("p",[n("a",{attrs:{href:"https://codepen.io/Chokcoco/pen/EpEjQX?editors=1100",target:"_blank",rel:"noopener noreferrer"}},[t._v("DEMO -- PURE CSS FOCUS By :focus-within"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"tab-导航切换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tab-导航切换"}},[t._v("#")]),t._v(" TAB 导航切换")]),t._v(" "),n("p",[t._v("在之前的一篇文章里，介绍了两种纯 CSS 实现的 TAB 导航栏切换方法：")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/coco1s/p/5955631.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("纯 CSS 的导航栏 Tab 切换方案"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("现在又多了一种方式，利用了 "),n("code",[t._v(":focus-within")]),t._v(" 可以在父节点获取元素获得焦点的特性，实现的 TAB 导航切换：")]),t._v(" "),n("iframe",{attrs:{title:"focus-within switch tab",src:"https://codepen.io/Chokcoco/embed/RJEpaP/?height=265&theme-id=0&default-tab=css,result&embed-version=2",frameborder:"no",scrolling:"no",width:"100%",height:"300"}}),t._v(" "),n("p",[n("a",{attrs:{href:"https://codepen.io/Chokcoco/pen/RJEpaP",target:"_blank",rel:"noopener noreferrer"}},[t._v("DEMO -- focus-within switch tab"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("主要的思路就是通过获焦态来控制其他选择器，以及最重要的是利用了父级的 "),n("code",[t._v(":not(:focus-within)")]),t._v(" 来设置默认样式：")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".nav-box:not(:focus-within)")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  // 默认样式\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".nav-A:focus-within ~ .content-box .content-A")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".nav-B:focus-within ~ .content-box .content-B")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("h2",{attrs:{id:"配合-placeholder-shown-伪类实现表单效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配合-placeholder-shown-伪类实现表单效果"}},[t._v("#")]),t._v(" 配合 "),n("code",[t._v(":placeholder-shown")]),t._v(" 伪类实现表单效果")]),t._v(" "),n("p",[n("code",[t._v(":focus-within")]),t._v(" 一个人能力有限，通常也会配合其他伪类实现一些不错的效果。这里要再简单介绍的是另外一个有意思的伪类 "),n("code",[t._v(":placeholder-shown")]),t._v("。")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[n("code",[t._v(":placeholder-shown")]),t._v("：The :placeholder-shown CSS pseudo-class represents any or <textarea> element that is currently displaying placeholder text.\n另外，划重点，这个伪类是仍处于实验室的方案。也就是未纳入标准，当然我们的目的是探寻有意思的 CSS 。")])]),t._v(" "),n("p",[t._v("意思大概就是，当 "),n("code",[t._v("input")]),t._v(" 类型标签使用了 placeholder 属性有了默认占位的文字，会触发此伪类样式。配合"),n("code",[t._v(":not()")]),t._v("伪类，可以再改变当默认文字消失后的样式，再配合本文的主角，我们可以实现表单的一系列效果。")]),t._v(" "),n("p",[t._v("CSS 代码大概呈现成这样：")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".g-container")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60px"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";\n  input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";\n    &:not(:placeholder-shown)")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&:placeholder-shown")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&:focus-within")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])]),n("p",[t._v("可以看到，上面的效果没有用到任何 JS，可以实现：")]),t._v(" "),n("ol",[n("li",[t._v("整个 input（包括父元素所在区域）获焦与非获焦样式控制")]),t._v(" "),n("li",[t._v("placeholder 属性设置的文字出现与消失后样式控制")])]),t._v(" "),n("iframe",{attrs:{title:":placeholder-shown && :focus-within",src:"https://codepen.io/Chokcoco/embed/xJWwyB/?height=265&theme-id=0&default-tab=css,result&embed-version=2",frameborder:"no",scrolling:"no",width:"100%",height:"300"}}),t._v(" "),n("p",[n("a",{attrs:{href:"https://codepen.io/Chokcoco/pen/xJWwyB",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodePen Demo -- :placeholder-shown && :focus-within"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"实现离屏导航"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现离屏导航"}},[t._v("#")]),t._v(" 实现离屏导航")]),t._v(" "),n("p",[t._v("这个是其他很多文章都有提到过的一个功能，利用 "),n("code",[t._v("focus-within")]),t._v(" 便捷的实现离屏导航，可以说将这个属性的功能发挥的淋漓尽致，这里我直接贴一个 codepen 上 "),n("a",{attrs:{href:"https://codepen.io/dannievinther/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dannie Vinther"),n("OutboundLink")],1),t._v(" 对这个效果的实现方案：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(379),alt:"offscreennav"}})]),t._v(" "),n("p",[t._v("[CodePen Demo -- Off-screen nav with :focus-within "),n("a",{attrs:{href:"https://codepen.io/dannievinther/pen/NvZjvz",target:"_blank",rel:"noopener noreferrer"}},[t._v("PURE CSS]"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"实现掘金登录动效切换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现掘金登录动效切换"}},[t._v("#")]),t._v(" 实现掘金登录动效切换")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://juejin.im/",target:"_blank",rel:"noopener noreferrer"}},[t._v("juejin.im"),n("OutboundLink")],1),t._v("是我很喜欢的一个博客网站，它的登录有一个小彩蛋，最上面的熊猫在你输入帐号密码的时候会有不同的状态，效果如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(380),alt:"juejin"}})]),t._v(" "),n("p",[t._v("利用本文所讲的 "),n("code",[t._v("focus-within")]),t._v(" ，可以不借助任何 Javascript，实现这个动效：")]),t._v(" "),n("p",[t._v("感兴趣的可以戳这里看看完整的Demo代码：")]),t._v(" "),n("iframe",{attrs:{title:"掘金登录效果纯CSS实现",src:"https://codepen.io/Chokcoco/embed/yqKrPR/?height=265&theme-id=0&default-tab=css,result&embed-version=2",frameborder:"no",scrolling:"no",width:"100%",height:"300"}}),t._v(" "),n("p",[n("a",{attrs:{href:"https://codepen.io/Chokcoco/pen/yqKrPR?editors=1100",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodePen Demo -- 掘金登录效果纯CSS实现"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"兼容性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[t._v("#")]),t._v(" 兼容性")]),t._v(" "),n("p",[t._v("好了，例子举例的也差不多了，下面到了杀人诛心的兼容性时刻，按照惯例，这种属性大概率是一片红色，看看 CANIUSE，截图日期（2018/08/02），其实也还不算特别惨淡。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(381),alt:"image"}})]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("参考资料 - 感谢 🍻🍻🍻")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/coco1s/p/9406413.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("神奇的选择器 :focus-within"),n("OutboundLink")],1),t._v(" - ChokCoco：神奇的选择器 :focus-within")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);