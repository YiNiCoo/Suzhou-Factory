(function() {
  'use strict';

  angular
    .module('suzhou')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('shipment', {
        url: '/',
        templateUrl: 'app/shipment/shipment.html',
        controller: 'ShipmentController',
        controllerAs: 'shipment'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
