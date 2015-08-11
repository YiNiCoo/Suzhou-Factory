!function(){"use strict";angular.module("suzhou",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","mm.foundation"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Foundation",url:"http://foundation.zurb.com/",description:"The most advanced responsive front-end framework in the world.",logo:"foundation.png"},{title:"Angular Foundation",url:"http://pineconellc.github.io/angular-foundation/",description:"A set of native AngularJS directives based on Foundation's markup and CSS",logo:"angular-foundation.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=e}angular.module("suzhou").service("webDevTec",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/components/temp/temp.html"};return e}angular.module("suzhou").directive("temp",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/components/navb/navb.html",controllerAs:"vm"};return e}angular.module("suzhou").directive("navb",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return e.$inject=["moment"],t}angular.module("suzhou").directive("acmeNavbar",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}function t(e,t,n,a){}var n={restrict:"E",templateUrl:"app/components/menu/menu.html",link:t};return e.$inject=["moment"],n}angular.module("suzhou").directive("eMenu",e)}(),function(){"use strict";function e(e){function t(t,n,a,i){var o,l=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){l.type(e).pause()["delete"]()}),o=t.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(e){l.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){o()})}function n(e,t){function n(){return a().then(function(){e.info("Activated Contributors View")})}function a(){return t.getContributors(10).then(function(e){return i.contributors=e,i.contributors})}var i=this;i.contributors=[],n()}var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:n,controllerAs:"vm"};return n.$inject=["$log","githubContributor"],a}angular.module("suzhou").directive("acmeMalarkey",e),e.$inject=["malarkey"]}(),function(){"use strict";function e(e,t){function n(n){function i(e){return e.data}function o(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return n||(n=30),t.get(a+"/contributors?per_page="+n).then(i)["catch"](o)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",i={apiHost:a,getContributors:n};return i}angular.module("suzhou").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){"use strict";function e(e,t){function n(t,n,a,i){e.response=JSON.stringify(t)}function a(t,n,a,i){e.response=JSON.stringify(t)}e.info=Setting.sendData,e.keyName="dataJson",e.config={method:"GET",url:Setting.url,data:{}},e.sendInfo="",e.Get=function(){var i={};i[e.keyName]=e.info,e.sendInfo="",e.config.method="GET",e.config.data=i,t(e.config).success(n).error(a)},e.Post=function(){var i={};i[e.keyName]=e.info,e.sendInfo=JSON.stringify(i),e.config.method="POST",e.config.data=i,t(e.config).success(n).error(a)}}angular.module("suzhou").controller("ShipmentController",e),e.$inject=["$scope","$http"]}(),function(){"use strict";function e(e,t){function n(t,n,a,i){e.response=JSON.stringify(t)}function a(t,n,a,i){e.response=JSON.stringify(t)}e.info=Setting.sendData,e.keyName="dataJson",e.config={method:"GET",url:Setting.url,data:{}},e.sendInfo="",e.Get=function(){var i={};i[e.keyName]=e.info,e.sendInfo="",e.config.method="GET",e.config.data=i,t(e.config).success(n).error(a)},e.Post=function(){var i={};i[e.keyName]=e.info,e.sendInfo=JSON.stringify(i),e.config.method="POST",e.config.data=i,t(e.config).success(n).error(a)}}angular.module("suzhou").controller("ServerTestController",e),e.$inject=["$scope","$http"]}(),function(){"use strict";function e(e,t,n,a){return t.statename="main",sessionStorage.user?(t.user=JSON.parse(sessionStorage.user),t.menus=t.user.rights,t.pages=a.main.pages.list||{},void(t.closePage=function(){for(var e=this.page.state.split("."),i=a[e[0]].pages.list,o=0;o<i.length;o++)if(i[o].state==this.page.state){t.pages=i=a[e[0]].pages.list=_.without(i,i[o]);break}n.go(i.length>0?i[i.length-1].state:t.statename),console.dir(a)})):void n.go("login")}angular.module("suzhou").controller("MainController",e),e.$inject=["$rootScope","$scope","$state","DataService"]}(),function(){"use strict";function e(e,t,n,a,i){var o=({name:"员工",state:n.current.name,active:!0},{employeeHead:["员工编号","姓名","电话","操作"],employee:[{id:"001",name:"刘东方",phone:"13125252525"},{id:"002",name:"李四",phone:"13674759754"},{id:"003",name:"郑富贵",phone:"18364445578"}],client:{}});e.searchInfo={user:{name:"nihao"}},e.search=function(n){t.post(Setting.host+"user/index",e.searchInfo).success(function(t){!t.rights||t.rights instanceof Array||(t.rights=[t.rights]),e.data=t,n&&n()}).error(function(t){TestData.debug&&(e.data=TestData.right.index,n&&n())})};for(var l=n.current.name.split("."),r=a,s=0;s<l.length;s++){if(!r[l[s]]){r=null;break}r=r[l[s]]}r?e.data=r:e.search(function(){}),e.users=i.clone(o),e.edit=function(){this.emp.editable=!this.emp.editable},e.add=function(){e.users.employee.push(e.addEmployee),e.addEmployee={id:"",name:"",phone:""}},e["delete"]=function(){e.users.employee=_.without(e.users.employee,this.emp)},e.addEmployee={id:"",name:"",phone:""}}angular.module("suzhou").controller("UserController",e),e.$inject=["$scope","$http","$state","DataService","Tools"]}(),function(){"use strict";function e(e,t){var n={employeeHead:["员工编号","姓名","电话","操作"],employee:[{id:"001",name:"刘东方",phone:"13125252525"},{id:"002",name:"李四",phone:"13674759754"},{id:"003",name:"郑富贵",phone:"18364445578"}],client:{}};e.users=_.clone(n),e.edit=function(){this.emp.editable=!this.emp.editable},e.add=function(){e.users.employee.push(e.addEmployee),e.addEmployee={id:"",name:"",phone:""}},e["delete"]=function(){e.users.employee=_.without(e.users.employee,this.emp)},e.addEmployee={id:"",name:"",phone:""}}angular.module("suzhou").controller("PeopleManageController",e),e.$inject=["$scope","$state"]}(),function(){"use strict";function e(e,t,n,a,i){function o(e,t,n,o){e.user.rights=i.transtoTree(e.user.rights),sessionStorage.user=JSON.stringify(e.user),a.go("main")}function l(e,n,i,o){TestData.debug&&(sessionStorage.user=JSON.stringify(TestData.login),a.go("main.default")),t.response=JSON.stringify(e)}$(".content").validate({submitHandler:function(e){$(e).ajaxSubmit()},rules:{username:{required:!0,minlength:2},password:{required:!0,minlength:6}},messages:{username:{required:"请输入用户名",minlength:"用户名太短，必须两位以上"},password:{required:"请输入密码",minlength:"密码必须六位以上"}}}),t.user=Setting.login.data||{username:"",password:""},t.Post=function(){n.post(Setting.host+Setting.login.url,{user:t.user}).success(o).error(l)}}var t=angular.module("suzhou");t.controller("LoginController",e),e.$inject=["$rootScope","$scope","$http","$state","Tools"]}(),function(){"use strict";function e(e,t,n){function a(){o(),e(function(){l.classAnimation="rubberBand"},4e3)}function i(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function o(){l.awesomeThings=t.getTec(),angular.forEach(l.awesomeThings,function(e){e.rank=Math.random()})}var l=this;l.awesomeThings=[],l.classAnimation="",l.creationDate=1435820070102,l.showToastr=i,a()}angular.module("suzhou").controller("DemoController",e),e.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function e(e,t,n,a){e.items=["item1","item2","item3"],e.open=function(){var t=n.open({templateUrl:"app/admin/modal.html",controller:"ModalInstanceCtrl",resolve:{items:function(){return e.items}}});t.result.then(function(t){e.selected=t},function(){a.info("Modal dismissed at: "+new Date)})}}angular.module("suzhou").controller("RoleController",e).controller("ModalInstanceCtrl",["$scope","$modalInstance","items",function(e,t,n){e.items=n,e.selected={item:e.items[0]},e.ok=function(){t.close(e.selected.item)},e.cancel=function(){t.dismiss("cancel")}}]),e.$inject=["$scope","$http","$modal","$log"]}(),function(){"use strict";function e(e,t,n){e.tableHead=["名称","value值","父名称","操作"],e.searchInfo={right:{name:"",value:""}},e.search=function(n){t.post(Setting.host+"right/index",e.searchInfo).success(function(t){!t.rights||t.rights instanceof Array||(t.rights=[t.rights]),e.data=t,n&&n()}).error(function(t){TestData.debug&&(e.data=TestData.right.index,n&&n())})},e.search(function(){e.selectData=n.clone(e.data),e.selectData.rights=n.transtoTree(e.selectData.rights)}),e.edit=function(){var t={title:"编辑",right:this.right},n=$modal.open({templateUrl:"app/admin/modal.html",controller:"ModalInstanceCtrl",resolve:{modal:function(){return t}}});n.result.then(function(t){e.selected=t},function(){$log.info("Modal dismissed at: "+new Date)})},e.add=function(){e.data.rights.push(e.addRight),e.addRight={id:"",name:"",value:"",parentid:"",parentname:""}},e["delete"]=function(){e.data.rights=_.without(e.data.rights,this.right)},e.addRight={id:"",name:"",value:"",parentid:"",parentname:""}}angular.module("suzhou").controller("RightController",e).controller("ModalInstanceCtrl",["$scope","$modalInstance","modal",function(e,t,n){e.modal=n,e.ok=function(){t.close(e.modal)},e.cancel=function(){t.dismiss("cancel")}}]),e.$inject=["$scope","$http","Tools"]}(),function(){"use strict";function e(e){e.statename="admin",e.menus=[{children:[{id:1,name:"人员",value:"backend/index",parentid:0,hasRight:!1,parentname:null},{id:2,name:"角色",value:"role/index",parentid:0,hasRight:!1,parentname:null},{id:3,name:"权限",value:"right/index",parentid:0,hasRight:!1,parentname:null}]}]}angular.module("suzhou").controller("AdminController",e),e.$inject=["$scope"]}(),function(){"use strict";angular.module("suzhou").factory("DataService",function(){return{main:{pages:{list:[],open:function(e){for(var t=0;t<this.list.length;t++)if(this.list[t].state==e.state)return void(this.list[t].active=e.active);this.list.push(e)},close:function(e){for(var t=0;t<this.list.length;t++)if(this.list[t].state==e.state)return void(this.list=_.without(this.list,this.list[t]))}}}}}).factory("TabPageService",function(){return{}}).factory("Tools",function(){return{clone:function(e){return JSON.parse(JSON.stringify(e))},transtoTree:function(e){for(var t=[],n=0;n<e.length;n++){for(var a=e[n].parentid,i=0;i<e.length;i++)if(e[i].id==a){e[i].children||(e[i].children=new Array),e[i].children.push(e[n]);break}0==a&&t.push(e[n])}return t}}})}(),function(){"use strict";function e(e){e.debug("runBlock end")}angular.module("suzhou").run(e),e.$inject=["$log"]}(),function(){"use strict";function e(e,t){function n(e,t){e.active=!0,t[e.state.split(".")[0]].pages.open(e)}function a(e,t){e.active=!1;for(var n=t[e.state.split(".")[0]].pages.list,a=0;a<n.length;a++)if(n[a].state==e.state)return void(n[a].active=e.active)}e.state("main",{url:"/",templateUrl:"app/main/main.html",controller:"MainController"}).state("main.user",{url:"",templateUrl:"app/peopleManage/user.html",controller:"UserController",onEnter:n,onExit:a,resolve:{pageInfo:function(){return{name:"员工",state:"main.user",active:!0}}}}).state("main.client",{url:"",templateUrl:"app/peopleManage/client.html",controller:"PeopleManageController",onEnter:n,onExit:a,resolve:{pageInfo:function(){return{name:"客户",state:"main.client",active:!0}}}}).state("main.supplier",{url:"",templateUrl:"app/peopleManage/supplier.html",controller:"PeopleManageController",onEnter:n,onExit:a,resolve:{pageInfo:function(){return{name:"供应商",state:"main.supplier",active:!0}}}}).state("login",{url:"/login",templateUrl:"app/login/login.html",controller:"LoginController"}).state("admin",{url:"/admin","abstract":!0,templateUrl:"app/admin/admin.html",controller:"AdminController"}).state("admin.right",{url:"",templateUrl:"app/admin/right.html",controller:"RightController"}).state("admin.backend",{url:"",templateUrl:"app/admin/backend.html",controller:"AdminController"}).state("admin.role",{url:"",templateUrl:"app/admin/role.html",controller:"AdminController"}).state("server-test",{url:"/server-test",templateUrl:"app/serverTest/serverTest.html",controller:"ServerTestController"}).state("shipment",{url:"/shipment",templateUrl:"app/shipment/shipment.html",controller:"ShipmentController"}),t.otherwise("/"),n.$inject=["pageInfo","DataService"],a.$inject=["pageInfo","DataService"]}angular.module("suzhou").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("suzhou").filter("filterroute",function(){return function(e,t){if(!e)return".";var n;return n=t?"."==t?"."+e.substring(0,e.indexOf("/")):t+"."+e.substring(0,e.indexOf("/")):e.substring(0,e.indexOf("/"))}}).filter("isarray",function(){return function(e){return e instanceof Array?!0:!1}})}(),function(){"use strict";function e(e){$(document).foundation(),$(document).foundation("tooltip","reflow")}angular.module("suzhou").controller("IndexController",e),e.$inject=["$scope"]}(),function(){"use strict";angular.module("suzhou").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0}angular.module("suzhou").config(e),e.$inject=["$logProvider","toastr"]}(),angular.module("suzhou").run(["$templateCache",function(e){e.put("app/admin/admin.html",'<div class="app"><div ng-controller="AdminController"><navb></navb><div class="container row"><e-menu class="e-menu small-3 large-2 columns"></e-menu><div ui-view="" class="content small-9 large-10 columns"></div></div></div></div>'),e.put("app/admin/backend.html",'<section class="employee"><table><thead><tr><th ng-repeat="empH in users.employeeHead" ng-bind="empH"></th></tr></thead><tbody><tr ng-repeat="emp in users.employee" ng-init="emp.editable=true"><td><input type="text" ng-model="emp.id" ng-disabled="emp.editable" pattern="[0-9]"></td><td><input type="text" ng-model="emp.name" ng-disabled="emp.editable"></td><td><input type="text" ng-model="emp.phone" ng-disabled="emp.editable"></td><td><div class="button tiny" ng-click="edit()">编辑</div><div class="button tiny" ng-click="delete()">删除</div></td></tr><tr><td><input type="text" ng-model="addEmployee.id"></td><td><input type="text" ng-model="addEmployee.name"></td><td><input type="text" ng-model="addEmployee.phone"></td><td><div class="button tiny add" ng-click="add()">添加</div></td></tr></tbody></table></section>'),e.put("app/admin/modal.html",'<h3 ng-bind="modal.title"></h3><p>Selected: <b>{{ selected.item }}</b></p><button class="button" ng-click="ok()">OK</button> <a class="close-reveal-modal" ng-click="cancel()">&#215;</a>'),e.put("app/admin/right.html",'<section class="rights"><div class="search"><label>名称<input type="text" ng-model="searchInfo.right.name"></label> <label>value值<input type="text" ng-model="searchInfo.right.value"></label><div class="button-container"><div class="button tiny" ng-click="search()">查询</div><div class="button tiny" ng-click="search()">添加</div></div></div><table><thead><tr><th ng-repeat="riH in tableHead" ng-bind="riH"></th></tr></thead><tbody><tr ng-repeat="right in data.rights" ng-init="right.editable=true"><td><input type="text" ng-model="right.name" ng-disabled="right.editable" pattern="[0-9]"></td><td><input type="text" ng-model="right.value" ng-disabled="right.editable"></td><td><input type="text" ng-model="right.parentname" ng-disabled="right.editable"></td><td><div class="button tiny" ng-click="edit()">编辑</div><div class="button tiny" ng-click="delete()">删除</div></td></tr></tbody></table><script type="text/ng-template" id="myModalContent.html"><h3>I\'m a modal!</h3> <ul> <li ng-repeat="item in items"> <a ng-click="selected.item = item">{{ item }}</a> </li> </ul> <p>Selected: <b>{{ selected.item }}</b></p> <button class="button" ng-click="ok()">OK</button> <a class="close-reveal-modal" ng-click="cancel()">&#215;</a></script><button class="button" ng-click="open()">Open me!</button><div ng-show="selected">Selection from a modal: {{ selected }}</div></section>'),e.put("app/admin/role.html",'<div ng-controller="RoleController"><script type="text/ng-template" id="myModalContent.html"><h3>I\'m a modal!</h3> <ul> <li ng-repeat="item in items"> <a ng-click="selected.item = item">{{ item }}</a> </li> </ul> <p>Selected: <b>{{ selected.item }}</b></p> <button class="button" ng-click="ok()">OK</button> <a class="close-reveal-modal" ng-click="cancel()">&#215;</a></script><button class="button" ng-click="open()">Open me!</button><div ng-show="selected">Selection from a modal: {{ selected }}</div></div>'),e.put("app/demo/demo.html",'<div class=""><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="row"><div class="large-12 large-text-center columns"><div class="panel"><h1>\'Allo, \'Allo!</h1><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br><p>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a href="#" class="button success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div></div></div><div class="row"><div class="large-4 columns" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="th"><img class="right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),e.put("app/login/login.html",'<div class="login"><section class="login-box"><div class="title"><h3>苏创平台登录</h3></div><form class="content"><div class="err-info"></div><div class="input"><input id="username" name="username" type="text" placeholder="用户名" ng-model="user.username" required="" autocomplete="on"> <i class="fi-torso"></i></div><div class="input"><input id="password" name="password" type="password" placeholder="密码" ng-model="user.password" required=""> <i class="fi-lock"></i></div><div class="button" ng-click="Post()">登录</div><a class="pass-link" href="">忘记密码？</a></form></section></div>'),e.put("app/peopleManage/client.html","client.html"),e.put("app/peopleManage/supplier.html","supplier.html"),e.put("app/peopleManage/user.html",'<section class="user"><table><thead><tr><th ng-repeat="empH in users.employeeHead" ng-bind="empH"></th></tr></thead><tbody><tr ng-repeat="emp in users.employee" ng-init="emp.editable=true"><td><input type="text" ng-model="emp.id" ng-disabled="emp.editable" pattern="[0-9]"></td><td><input type="text" ng-model="emp.name" ng-disabled="emp.editable"></td><td><input type="text" ng-model="emp.phone" ng-disabled="emp.editable"></td><td><div class="button tiny" ng-click="edit()">编辑</div><div class="button tiny" ng-click="delete()">删除</div></td></tr><tr><td><input type="text" ng-model="addEmployee.id"></td><td><input type="text" ng-model="addEmployee.name"></td><td><input type="text" ng-model="addEmployee.phone"></td><td><div class="button tiny add" ng-click="add()">添加</div></td></tr></tbody></table></section>'),e.put("app/main/main.html",'<div class="app"><div ng-controller="MainController"><navb></navb><div class="container row"><e-menu class="e-menu small-3 large-2 columns"></e-menu><div class="content small-9 large-10 columns"><div class="pagetab" ng-if="pages.length"><div ng-class="page.active?[\'tabhead\', \'active\']:\'tabhead\'" ng-repeat="page in pages" ui-sref="{{page.state}}"><span ng-bind="page.name"></span> <i class="foundicon-remove" ng-click="closePage()"></i></div></div><div ui-view=""></div></div></div></div></div>'),e.put("app/shipment/shipment.html",'<div class="shipment"></div>'),e.put("app/serverTest/serverTest.html",'<div class="server-test"><form><fieldset><legend>前后台对接测试</legend><div class="row"><div class="large-12 columns"><label>URL</label> <input type="text" placeholder="../data/goods.json" ng-model="config.url"></div></div><div class="row"><div class="large-12 columns"><label>请求Data</label> <input type="text" placeholder=\'{"username":"wangte","password":"123456"}\' ng-model="info"></div></div><div class="row"><div class="large-12 columns"><label>Data键值</label> <input type="text" placeholder="dataJson" ng-model="keyName"></div></div><div class="row"><div class="large-12 columns"><a href="#" class="button" ng-click="Get()">GET</a> <a href="#" class="button" ng-click="Post()">POST</a></div></div><div class="row"><div class="large-12 columns"><label>请求发送数据</label> <textarea placeholder="默认JSON格式" ng-model="sendInfo"></textarea></div></div><div class="row"><div class="large-12 columns"><label>请求返回数据</label> <textarea placeholder="默认JSON格式" ng-model="response"></textarea></div></div></fieldset></form></div>'),e.put("app/components/menu/menu.html",'<menu><accordion close-others="false" ng-init="menus[0].open = true"><accordion-group heading="{{menu.name}}" ng-repeat="menu in menus" is-open="menu.open || false"><ul><li ng-repeat="child in menu.children"><a ui-sref="{{child.value | filterroute: statename}}" ng-bind="child.name"></a></li></ul></accordion-group></accordion></menu>'),e.put("app/components/navb/navb.html",'<nav class="top-bar e-nav row"><ul class="title-area small-3 large-2 columns"><li class="name"><h1><a href="#"><big>苏园创业</big>办公平台</a></h1></li></ul><section class="top-bar-section"><ul class="left"><li class="active"><a ng-href="#">首页</a></li><li><a ng-href="#">关于</a></li><li><a ng-href="#">联系我们</a></li></ul><ul class="right"><li><a ng-href="#" ng-bind="user.name">张三</a></li><li><a ng-href="#">退出</a></li></ul></section></nav>'),e.put("app/components/temp/temp.html","<p>你好，指令！</p>"),e.put("app/components/navbar/navbar.html",'<nav class="top-bar row"><ul class="title-area"><li class="name"><h1><a href="https://github.com/Swiip/generator-gulp-angular">Gulp & Angular</a></h1></li></ul><section class="top-bar-section"><ul class="right"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><p class="acme-navbar-text">Application was created {{ vm.relativeDate }}.</p></section></nav>')}]);