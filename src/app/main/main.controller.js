(function() {
  'use strict';

  angular
    .module('suzhou')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    $scope.menus = [{
      title: '菜单1',
      lists: ['子菜单1','子菜单2','子菜单3','子菜单4','子菜单5']
    },{
      title: '菜单2',
      lists: ['子菜单1','子菜单2','子菜单3','子菜单4','子菜单5']
    },{
      title: '菜单3',
      lists: ['子菜单1','子菜单2','子菜单3','子菜单4','子菜单5']
    }];
  }
})();
