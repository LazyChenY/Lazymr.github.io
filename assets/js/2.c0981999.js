(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{58:function(e,a,t){"use strict";t.r(a);var r=t(0),i=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"论如何成为高级webpack配置师—基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#论如何成为高级webpack配置师—基础","aria-hidden":"true"}},[e._v("#")]),e._v(" 论如何成为高级webpack配置师—基础")]),t("h3",{attrs:{id:"webpack是什么？有什么作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack是什么？有什么作用","aria-hidden":"true"}},[e._v("#")]),e._v(" webpack是什么？有什么作用")]),t("p",[t("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack")]),e._v(" 是一个模块打包工具。它将一堆文件中的每个文件都作为一个模块，找出它们的依赖关系，将它们打包为可部署的静态资源。它能做的事情包括以下：")]),t("ul",[t("li",[e._v("代码转换：通过各种loader，将我们写的一些浏览器不能直接运行的扩展语言解析打包成合适的格式供浏览器使用; 比如将ES6, CoffeeScript, TypeScript转换为ES5, 将SCSS装换成CSS等;")]),t("li",[e._v("文件处理与优化：处理html或css中引用的图片，将其移动到配置的路径中并使用md5 hash重命名；压缩合并图片，压缩JS,CSS,HTML代码")]),t("li",[e._v("代码分割：提取项目中公共代码；提取首屏不需要执行的代码让其异步加载；不同页面代码按需加载")]),t("li",[e._v("模块合并？？啥意思？？在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件")]),t("li",[e._v("代码校验：在代码提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过，配合eslint，pre-commit")]),t("li",[e._v("自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。")]),t("li",[e._v("自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。")])]),t("h3",{attrs:{id:"webpack核心概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack核心概念","aria-hidden":"true"}},[e._v("#")]),e._v(" webpack核心概念")]),t("ul",[t("li",[e._v("entry: webpack把整个项目当作一个整体，需要根据给定的主文件(常见的main.js)来执行构建的第一步，可以理解为入口文件，每个entry对应最后生成的一个chunk")]),t("li",[e._v("module: 在webpack中，一切皆模块，一个文件就是一个模块，webpack会从entry开始递归找出所有依赖的模块")]),t("li",[e._v("chunk: 代码块，一个代码块由多个模块组成，用于将代码拆分合并")]),t("li",[e._v("loader: 模块转化器，将原模块内容按要求转换为新的内容")]),t("li",[e._v("[plugins] : 插件可以说是webpack的支柱，webpack本身就是一个复杂度较高的插件集合,利用其插件机制构建出来的。")]),t("li",[e._v("output:")])]),t("p",[t("a",{attrs:{href:"https://zoumiaojiang.com/article/what-is-real-webpack-plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("细谈webpack插件")]),t("a",{attrs:{href:"http://taobaofed.org/blog/2016/09/09/webpack-flow/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FED细说webpack流程篇")])]),t("ul",[t("li",[t("p",[e._v("[ ] webpack压缩合并图片怎么弄的？")])]),t("li",[t("p",[e._v("[ ] 公共代码打包的目的？减少加载次数和量？")])]),t("li",[t("p",[e._v("[ ] 怎么让非首屏代码异步加载？")])]),t("li",[t("p",[e._v("[ ] 怎么按需加载不同页面代码？")])]),t("li",[t("p",[e._v("[ ] pre-commit配合eslint")])]),t("li",[t("p",[e._v("[ ] 怎么搞出hot-reload")])]),t("li",[t("p",[e._v("[ ] 自动发布，这个了解一下就好了")])]),t("li",[t("p",[e._v("[ ] 多个entry之间是异步还是同步执行的？？")])])])])}],!1,null,null,null);a.default=i.exports}}]);