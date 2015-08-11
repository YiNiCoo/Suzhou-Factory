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
                    pageInfo: function(){
                        return {
                            name: '员工',
                            state: 'main.user',
                            active: true
                        };
                    }
                },
            })
            .state('main.client', {
                url: '',
                templateUrl: 'app/peopleManage/client.html',
                controller: 'PeopleManageController',
                onEnter: onEnter,
                onExit: onExit,
                resolve: {
                    pageInfo: function(){
                        return {
                            name: '客户',
                            state: 'main.client',
                            active: true
                        };
                    }
                },
            })
            .state('main.supplier', {
                url: '',
                templateUrl: 'app/peopleManage/supplier.html',
                controller: 'PeopleManageController',
                onEnter: onEnter,
                onExit: onExit,
                resolve: {
                    data: function($state) {
                        console.log($state);
                        return {};
                    },
                    pageInfo: function($state){
                        return {
                            name: '供应商',
                            state: $state.current.name,
                            active: true
                        };
                    }
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

        function prepareData(DataService) {
            pageInfo.active = true;
            var addrs = pageInfo.state.split('.');
            DataService[addrs[0]].pages.open(pageInfo);
            var temp = DataService;
            for (var i = 0; i < addrs.length; i++) {
                if (!temp[addrs[i]]) {
                    temp[addrs[i]] = {};
                }
                temp = temp[addrs[i]];
            }
            if (_.isEmpty(temp)) {

            }
            
        }

        function onEnter(pageInfo, DataService) {
            pageInfo.active = true;
            var addrs = pageInfo.state.split('.');
            DataService[addrs[0]].pages.open(pageInfo);
            var temp = DataService;
            for (var i = 0; i < addrs.length; i++) {
                if (!temp[addrs[i]]) {
                    temp[addrs[i]] = {};
                }
                temp = temp[addrs[i]];
            }
            if (_.isEmpty(temp)) {

            }

        }

        function onExit (pageInfo, DataService){
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
