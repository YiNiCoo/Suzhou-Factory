!function(){"use strict";angular.module("suzhou",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","mm.foundation"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Foundation",url:"http://foundation.zurb.com/",description:"The most advanced responsive front-end framework in the world.",logo:"foundation.png"},{title:"Angular Foundation",url:"http://pineconellc.github.io/angular-foundation/",description:"A set of native AngularJS directives based on Foundation's markup and CSS",logo:"angular-foundation.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=t}angular.module("suzhou").service("webDevTec",t)}(),function(){"use strict";function t(){var t={restrict:"E",templateUrl:"app/components/temp/temp.html"};return t}angular.module("suzhou").directive("temp",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],e}angular.module("suzhou").directive("acmeNavbar",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}var e={restrict:"E",templateUrl:"app/components/navb/navb.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],e}angular.module("suzhou").directive("navb",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}function e(t,e,n,o){}var n={restrict:"E",templateUrl:"app/components/menu/menu.html",link:e};return t.$inject=["moment"],n}angular.module("suzhou").directive("eMenu",t)}(),function(){"use strict";function t(t){function e(e,n,o,a){var i,r=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){r.type(t).pause()["delete"]()}),i=e.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){r.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){i()})}function n(t,e){function n(){return o().then(function(){t.info("Activated Contributors View")})}function o(){return e.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],n()}var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:n,controllerAs:"vm"};return n.$inject=["$log","githubContributor"],o}angular.module("suzhou").directive("acmeMalarkey",t),t.$inject=["malarkey"]}(),function(){"use strict";function t(t,e){function n(n){function a(t){return t.data}function i(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return n||(n=30),e.get(o+"/contributors?per_page="+n).then(a)["catch"](i)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:o,getContributors:n};return a}angular.module("suzhou").factory("githubContributor",t),t.$inject=["$log","$http"]}(),function(){"use strict";function t(t,e){function n(e,n,o,a){t.response=JSON.stringify(e)}function o(e,n,o,a){t.response=JSON.stringify(e)}t.info=Setting.sendData,t.keyName="dataJson",t.config={method:"GET",url:Setting.url,data:{}},t.sendInfo="",t.Get=function(){var a={};a[t.keyName]=t.info,t.sendInfo="",t.config.method="GET",t.config.data=a,e(t.config).success(n).error(o)},t.Post=function(){var a={};a[t.keyName]=t.info,t.sendInfo=JSON.stringify(a),t.config.method="POST",t.config.data=a,e(t.config).success(n).error(o)}}angular.module("suzhou").controller("ShipmentController",t),t.$inject=["$scope","$http"]}(),function(){"use strict";function t(t,e){function n(e,n,o,a){t.response=JSON.stringify(e)}function o(e,n,o,a){t.response=JSON.stringify(e)}t.info=Setting.sendData,t.keyName="dataJson",t.config={method:"GET",url:Setting.url,data:{}},t.sendInfo="",t.Get=function(){var a={};a[t.keyName]=t.info,t.sendInfo="",t.config.method="GET",t.config.data=a,e(t.config).success(n).error(o)},t.Post=function(){var a={};a[t.keyName]=t.info,t.sendInfo=JSON.stringify(a),t.config.method="POST",t.config.data=a,e(t.config).success(n).error(o)}}angular.module("suzhou").controller("ServerTestController",t),t.$inject=["$scope","$http"]}(),function(){"use strict";function t(t){t.menus=[{title:"菜单1",lists:["子菜单1","子菜单2","子菜单3","子菜单4","子菜单5"]},{title:"菜单2",lists:["子菜单1","子菜单2","子菜单3","子菜单4","子菜单5"]},{title:"菜单3",lists:["子菜单1","子菜单2","子菜单3","子菜单4","子菜单5"]}]}angular.module("suzhou").controller("MainController",t),t.$inject=["$scope"]}(),function(){"use strict";function t(t,e){function n(e,n,o,a){t.response=JSON.stringify(e)}function o(e,n,o,a){t.response=JSON.stringify(e)}t.login={username:"",password:"",phoneid:""},t.keyName="dataJson",t.config={method:"GET",url:Setting.loginUrl,data:{}},t.sendInfo="",t.Get=function(){var a={};a[t.keyName]=t.info,t.sendInfo="",t.config.method="GET",t.config.data=a,e(t.config).success(n).error(o)},t.Post=function(){var a={};a[t.keyName]=t.login,t.sendInfo=JSON.stringify(a),console.log(t.sendInfo),t.config.method="POST",t.config.data=a,e(t.config).success(n).error(o)}}angular.module("suzhou").controller("LoginController",t),t.$inject=["$scope","$http"]}(),function(){"use strict";function t(t,e,n){function o(){i(),t(function(){r.classAnimation="rubberBand"},4e3)}function a(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),r.classAnimation=""}function i(){r.awesomeThings=e.getTec(),angular.forEach(r.awesomeThings,function(t){t.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1435820070102,r.showToastr=a,o()}angular.module("suzhou").controller("DemoController",t),t.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("suzhou").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t,e){t.state("main",{url:"/","abstract":!0,templateUrl:"app/main/main.html",controller:"MainController"}).state("main.default",{url:"",templateUrl:"app/serverTest/serverTest.html",controller:"ServerTestController"}).state("login",{url:"/login",templateUrl:"app/login/login.html",controller:"LoginController"}).state("server-test",{url:"/server-test",templateUrl:"app/serverTest/serverTest.html",controller:"ServerTestController"}).state("shipment",{url:"/shipment",templateUrl:"app/shipment/shipment.html",controller:"ShipmentController"}),e.otherwise("/")}angular.module("suzhou").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function t(t){}angular.module("suzhou").controller("IndexController",t),t.$inject=["$scope"]}(),function(){"use strict";angular.module("suzhou").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.options.timeOut=3e3,e.options.positionClass="toast-top-right",e.options.preventDuplicates=!0,e.options.progressBar=!0}angular.module("suzhou").config(t),t.$inject=["$logProvider","toastr"]}(),angular.module("suzhou").run(["$templateCache",function(t){t.put("app/demo/demo.html",'<div class=""><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="row"><div class="large-12 large-text-center columns"><div class="panel"><h1>\'Allo, \'Allo!</h1><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br><p>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a href="#" class="button success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div></div></div><div class="row"><div class="large-4 columns" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="th"><img class="right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/main/main.html",'<div class="app"><div ng-controller="MainController"><navb></navb><div class="container row"><e-menu class="e-menu small-3 large-2 columns"></e-menu><div ui-view="" class="content small-9 large-10 columns"></div></div></div></div>'),t.put("app/login/login.html",'<div class="login"><section class="login-box"><div class="title"><h3>苏创平台登录</h3></div><div class="content"><div class="input"><input type="text" placeholder="用户名" ng-model="login.username"> <i class="fi-torso"></i></div><div class="input"><input type="text" placeholder="密码" ng-model="login.password"> <i class="fi-lock"></i></div><div class="button" ng-click="Post()">登录</div><a class="pass-link" href="">忘记密码？</a></div></section></div>'),t.put("app/serverTest/serverTest.html",'<div class="server-test"><form><fieldset><legend>前后台对接测试</legend><div class="row"><div class="large-12 columns"><label>URL</label> <input type="text" placeholder="../data/goods.json" ng-model="config.url"></div></div><div class="row"><div class="large-12 columns"><label>请求Data</label> <input type="text" placeholder=\'{"username":"wangte","password":"123456"}\' ng-model="info"></div></div><div class="row"><div class="large-12 columns"><label>Data键值</label> <input type="text" placeholder="dataJson" ng-model="keyName"></div></div><div class="row"><div class="large-12 columns"><a href="#" class="button" ng-click="Get()">GET</a> <a href="#" class="button" ng-click="Post()">POST</a></div></div><div class="row"><div class="large-12 columns"><label>请求发送数据</label> <textarea placeholder="默认JSON格式" ng-model="sendInfo"></textarea></div></div><div class="row"><div class="large-12 columns"><label>请求返回数据</label> <textarea placeholder="默认JSON格式" ng-model="response"></textarea></div></div></fieldset></form></div>'),t.put("app/shipment/shipment.html",'<div class="shipment"></div>'),t.put("app/components/menu/menu.html",'<menu><accordion close-others="false"><accordion-group heading="{{menu.title}}" ng-repeat="menu in menus"><ul><li ng-repeat="list in menu.lists">{{list}}</li></ul></accordion-group></accordion></menu>'),t.put("app/components/navb/navb.html",'<nav class="top-bar e-nav row"><ul class="title-area small-3 large-2 columns"><li class="name"><h1><a href="#"><big>苏园创业</big>办公平台</a></h1></li></ul><section class="top-bar-section"><ul class="left"><li class="active"><a ng-href="#">首页</a></li><li><a ng-href="#">关于</a></li><li><a ng-href="#">联系我们</a></li></ul><ul class="right"><li><a ng-href="#">张三</a></li><li><a ng-href="#">退出</a></li></ul></section></nav>'),t.put("app/components/navbar/navbar.html",'<nav class="top-bar row"><ul class="title-area"><li class="name"><h1><a href="https://github.com/Swiip/generator-gulp-angular">Gulp & Angular</a></h1></li></ul><section class="top-bar-section"><ul class="right"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><p class="acme-navbar-text">Application was created {{ vm.relativeDate }}.</p></section></nav>'),t.put("app/components/temp/temp.html","<p>你好，指令！</p>")}]);