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
        abstract: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        // controllerAs: 'main',
      })
      .state('main.default', {
        url: '',
        templateUrl: 'app/serverTest/serverTest.html',
        controller: 'ServerTestController',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        // controllerAs: 'login'
      })
      .state('server-test', {
        url: '/server-test',
        templateUrl: 'app/serverTest/serverTest.html',
        controller: 'ServerTestController',
        // controllerAs: 'serverTest'
      })
      .state('shipment', {
        url: '/shipment',
        templateUrl: 'app/shipment/shipment.html',
        controller: 'ShipmentController',
        // controllerAs: 'shipment'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
