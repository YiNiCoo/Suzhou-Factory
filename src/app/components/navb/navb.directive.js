(function() {
  'use strict';

  angular
    .module('suzhou')
    .directive('navb', Navbar);

  /** @ngInject */
  function Navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navb/navb.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
