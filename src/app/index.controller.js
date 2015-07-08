(function() {
  'use strict';

  angular
    .module('suzhou')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController($scope) {
    $scope.menus = ['进货','出货','进账','出账'];
  }
})();
