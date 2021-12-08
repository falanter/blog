webpackJsonp([12],{"75l9":function(e,t){e.exports={_from:"axios@^0.21.4",_id:"axios@0.21.4",_inBundle:!1,_integrity:"sha1-xnuQ3AVo5cHPKwuFjEO6KOLtpXU=",_location:"/axios",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"axios@^0.21.4",name:"axios",escapedName:"axios",rawSpec:"^0.21.4",saveSpec:null,fetchSpec:"^0.21.4"},_requiredBy:["#USER","/"],_resolved:"https://registry.nlark.com/axios/download/axios-0.21.4.tgz?cache=0&sync_timestamp=1630942912149&other_urls=https%3A%2F%2Fregistry.nlark.com%2Faxios%2Fdownload%2Faxios-0.21.4.tgz",_shasum:"c67b90dc0568e5c1cf2b0b858c43ba28e2eda575",_spec:"axios@^0.21.4",_where:"E:\\饥人谷\\vue.js多人博客三周目\\blog-client",author:{name:"Matt Zabriskie"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},bugs:{url:"https://github.com/axios/axios/issues"},bundleDependencies:!1,bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}],dependencies:{"follow-redirects":"^1.14.0"},deprecated:!1,description:"Promise based HTTP client for the browser and node.js",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},homepage:"https://axios-http.com",jsdelivr:"dist/axios.min.js",keywords:["xhr","http","ajax","promise","node"],license:"MIT",main:"index.js",name:"axios",repository:{type:"git",url:"git+https://github.com/axios/axios.git"},scripts:{build:"NODE_ENV=production grunt build",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",examples:"node ./examples/server.js",fix:"eslint --fix lib/**/*.js",postversion:"git push && git push --tags",preversion:"npm test",start:"node ./sandbox/server.js",test:"grunt test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},typings:"./index.d.ts",unpkg:"dist/axios.min.js",version:"0.21.4"}},"7vUj":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a=n("Dd8w"),o=n.n(a),s=n("NYxO"),i={data:function(){return{avatarItem:!1}},computed:o()({},Object(s.c)(["isLogin","user"])),created:function(){this.checkLogin()},methods:o()({},Object(s.b)(["checkLogin","logout"]),{toMy:function(){document.querySelector("ul").classList.remove("show"),this.avatarItem=!1},onLogout:function(){this.logout()},toRegister:function(){this.$router.push({path:"/register"})},toEdit:function(){this.$router.push({path:"/create"})},clickAvatar:function(){this.avatarItem?(document.querySelector("ul").classList.remove("show"),this.avatarItem=!1):(document.querySelector("ul").classList.add("show"),this.avatarItem=!0)}})},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:{login:e.isLogin,"no-login":!e.isLogin},attrs:{id:"header"}},[n("router-link",{attrs:{to:"/"}},[n("h1",[e._v("blog")])]),e._v(" "),n("div",{staticClass:"top-index"},[n("router-link",{attrs:{to:"/"}},[e._v("首页")])],1),e._v(" "),n("div",{staticClass:"top-right"},[e.isLogin?[n("div",{staticClass:"user"},[n("div",{staticClass:"top-avatar-box",on:{click:e.clickAvatar}},[n("el-avatar",{staticClass:"top-avatar",attrs:{src:e.user.avatar}})],1),e._v(" "),n("ul",[n("li",{on:{click:e.toMy}},[n("router-link",{attrs:{to:"/my"}},[e._v("我的")])],1),e._v(" "),n("li",[n("a",{attrs:{href:"#"},on:{click:e.onLogout}},[e._v("注销")])])])]),e._v(" "),n("el-button",{staticClass:"top-edit",attrs:{round:""},on:{click:e.toEdit}},[n("i",{staticClass:"el-icon-edit"}),e._v("写文章")])]:e._e(),e._v(" "),e.isLogin?e._e():[n("router-link",{staticClass:"top-login",attrs:{to:"/login"}},[e._v("登录")]),e._v(" "),n("el-button",{staticClass:"top-register",attrs:{round:""},on:{click:e.toRegister}},[e._v("注册")])]],2)],1)},staticRenderFns:[]};var c={name:"App",components:{Header:n("VU/8")(i,u,!1,function(e){n("7vUj")},"data-v-71e13d0e",null).exports}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{id:"header"}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var d=n("VU/8")(c,l,!1,function(e){n("NtnG")},null,null).exports,p=n("/ocq"),m=n("Xxa5"),h=n.n(m),g=n("exGp"),f=n.n(g),v=n("p+dL"),b="/auth/register",k="/auth/login",x="/auth/logout",w="/auth",L=function(e){var t=e.username,n=e.password;return Object(v.a)(b,"POST",{username:t,password:n})},_=function(e){var t=e.username,n=e.password;return Object(v.a)(k,"POST",{username:t,password:n})},j=function(){return localStorage.removeItem("token"),Object(v.a)(x)},y=function(){return Object(v.a)(w)},C={state:{user:null,isLogin:!1},getters:{user:function(e){return e.user},isLogin:function(e){return e.isLogin}},mutations:{setUser:function(e,t){e.user=t.user},setLogin:function(e,t){e.isLogin=t.isLogin}},actions:{login:function(e,t){var n=e.commit,r=t.username,a=t.password;return _({username:r,password:a}).then(function(e){n("setUser",{user:e.data}),n("setLogin",{isLogin:!0})})},register:function(e,t){var n=this,r=e.commit,a=t.username,o=t.password;return f()(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({username:a,password:o});case 2:return t=e.sent,r("setUser",{user:t.data}),r("setLogin",{isLogin:!0}),e.abrupt("return",t.data);case 6:case"end":return e.stop()}},e,n)}))()},logout:function(e){var t=this,n=e.commit;return f()(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return e.stop()}},e,t)}))()},checkLogin:function(e){var t=this,n=e.commit,r=e.state;return f()(h.a.mark(function e(){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("checkLogin"),!r.isLogin){e.next=3;break}return e.abrupt("return",!0);case 3:return a=void 0,e.prev=4,e.next=7,y();case 7:a=e.sent,e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(4),e.abrupt("return",!1);case 13:if(console.log("res:",a),n("setLogin",{isLogin:a.isLogin}),a.isLogin){e.next=17;break}return e.abrupt("return",!1);case 17:return n("setUser",{user:a.data}),e.abrupt("return",!0);case 19:case"end":return e.stop()}},e,t,[[4,10]])}))()}}};r.default.use(s.a);var q=new s.a.Store({modules:{auth:C},state:{poi:"hello Vuex"},mutations:{edit:function(e){e.poi="hello x"},edita:function(e){e.poi="hello a"}},getters:{hello:function(e){return"name:"+e.poi}},actions:{helloa:function(e){var t=e.commit;setTimeout(function(){t("edita")},2e3)}}});r.default.use(p.a);var A=new p.a({routes:[{path:"/",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"2REn"))}},{path:"/test",component:function(){return n.e(4).then(n.bind(null,"lX20"))},meta:{requiresAuth:!0}},{path:"/login",component:function(){return n.e(3).then(n.bind(null,"yTJC"))}},{path:"/register",component:function(){return n.e(5).then(n.bind(null,"48+C"))}},{path:"/my",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"pkyc"))},meta:{requiresAuth:!0}},{path:"/detail/:blogId",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"hdFC"))}},{path:"/user/:userId",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"bTMz"))}},{path:"/edit/:blogId",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"XXY8"))},meta:{requiresAuth:!0}},{path:"/create",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"EuP8"))},meta:{requiresAuth:!0}},{path:"/tell/:userId",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"mIbO"))}}]});A.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.requiresAuth})?q.dispatch("checkLogin").then(function(t){t?n():n({path:"/login",query:{redirect:e.fullPath}})}):n()});var O=A,P=n("mtWM"),E=n.n(P),S=n("zL8q"),M=n.n(S),I=(n("tvR6"),n("pFYg")),T=n.n(I);function U(e){var t=("object"===(void 0===e?"undefined":T()(e))?e:new Date(e)).getTime(),n=Date.now()-t,r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/36e5)+"小时前";break;default:r=Math.floor(n/864e5)+"天前"}return r}var F={install:function(e,t){e.prototype.friendlyDate=U}};r.default.config.productionTip=!1,r.default.prototype.$axios=E.a,r.default.use(M.a),r.default.use(F),new r.default({el:"#app",router:O,store:q,components:{App:d},template:"<App/>"})},NtnG:function(e,t){},"p+dL":function(e,t,n){"use strict";t.a=u;var r=n("//Fk"),a=n.n(r),o=n("mtWM"),s=n.n(o),i=n("zL8q");n.n(i);function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(r,a){var o={url:e,method:t};"get"===t.toLowerCase()?o.params=n:o.data=n,localStorage.token&&(s.a.defaults.headers.common.Authorization=localStorage.token),s()(o).then(function(e){"ok"===e.data.status?(e.data.token&&(localStorage.token=e.data.token),r(e.data)):(i.Message.error(e.data.msg),a(e.data))}).catch(function(e){i.Message.error("网络异常"),a({msg:"网络异常"})})})}s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.defaults.baseURL="//blog-server.hunger-valley.com",window.request=u},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.693394ee2c91b329e77e.js.map