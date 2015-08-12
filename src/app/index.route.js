(function() {
    'use strict';

    angular
        .module('suzhou')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
            })
            .state('main.user', {
                url: '',
                templateUrl: 'app/peopleManage/user.html',
                controller: 'UserController',
                onEnter: onEnter,
                onExit: onExit,
                resolve: {
                    data: function() {
                        return {};
                    },
                    pageInfo: function(){
                        return {
                            name: '员工',
                            state: 'main.user',
                            active: true
                        };
                    }
                },
                data: {
                    name: '客户',
                    state: 'main.user',
                    active: true
                },
            })
            .state('main.client', {
                url: '',
                templateUrl: 'app/peopleManage/client.html',
                controller: 'PeopleManageController',
                onEnter: onEnter,
                onExit: onExit,
                resolve: {
                    data: function() {
                        return {};
                    },
                    pageInfo: function(){
                        return {
                            name: '客户',
                            state: 'main.client',
                            active: true
                        };
                    }
                },
                data: {
                    name: '客户',
                    state: 'main.client',
                    active: true
                },
            })
            .state('main.supplier', {
                url: '',
                templateUrl: 'app/peopleManage/supplier.html',
                controller: 'PeopleManageController',
                onEnter: onEnter,
                onExit: onExit,
                resolve: {
                    data: function() {
                        return {};
                    },
                    pageInfo: function($state){
                        return {
                            name: '供应商',
                            state: 'main.supplier',
                            active: true
                        };
                    }
                },
                data: {
                    name: '客户',
                    state: 'main.supplier',
                    active: true
                },
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
            })
            .state('admin', {
                url: '/admin',
                abstract: true,
                templateUrl: 'app/admin/admin.html',
                controller: 'AdminController',
            })
            .state('admin.right', {
                url: '',
                templateUrl: 'app/admin/right.html',
                controller: 'RightController',
            })
            .state('admin.backend', {
                url: '',
                templateUrl: 'app/admin/backend.html',
                controller: 'AdminController',
            })
            .state('admin.role', {
                url: '',
                templateUrl: 'app/admin/role.html',
                controller: 'AdminController',
            })
            .state('server-test', {
                url: '/server-test',
                templateUrl: 'app/serverTest/serverTest.html',
                controller: 'ServerTestController',
            })
            .state('shipment', {
                url: '/shipment',
                templateUrl: 'app/shipment/shipment.html',
                controller: 'ShipmentController',
            });

        $urlRouterProvider.otherwise('/');


        function onEnter(pageInfo, DataService) {
            pageInfo.active = true;
            var addrs = pageInfo.state.split('.');
            DataService[addrs[0]].pages.open(pageInfo);
        }

        function onExit (pageInfo, DataService){

            // 关闭Tab标签页
            pageInfo.active = false;
            var list = DataService[pageInfo.state.split('.')[0]].pages.list;
            for (var i = 0; i < list.length; i++) {
                if (list[i].state == pageInfo.state) {
                    list[i].active = pageInfo.active;
                    return;
                }
            }
        }

    }


})();
