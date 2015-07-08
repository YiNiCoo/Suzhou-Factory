(function() {
  'use strict';

  angular
    .module('suzhou')
    .controller('ShipmentController', ShipmentController);

  /** @ngInject */
  function ShipmentController($scope) {
  	$scope.shipments = ['货物1','货物2','货物3','货物4','货物5','货物6','货物7','货物8','货物9','货物10','货物11'];
  }
})();
