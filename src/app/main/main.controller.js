(function() {
    'use strict';

    angular
        .module('suzhou')
        .controller('MainController', MainController);

    function MainController($rootScope, $scope, $state, DataService) {
        $scope.statename = 'main';
        if (sessionStorage.user) {
            $scope.user = JSON.parse(sessionStorage.user);
        } else {
            $state.go('login');
            return;
        }
        $scope.menus = $scope.user.rights;
        $scope.pages = DataService.main.pages.list || {};
        // $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
        //   console.log("state laod error!");
        // });
        $scope.closePage = function() {
            var addr = this.page.state.split('.');
            var temp = DataService;
            var pagesList = DataService[addr[0]].pages.list; 
            for (var i = 0; i < pagesList.length; i++) {
                if (pagesList[i].state == this.page.state) {
                    $scope.pages = pagesList = DataService[addr[0]].pages.list = _.without(pagesList, pagesList[i]);
                    break;
                }
            }
            if (pagesList.length > 0) {
                $state.go(pagesList[pagesList.length-1].state);
            } else {
                $state.go($scope.statename);
            }

            console.dir(DataService);

            // for (var i = 0; i < addr.length-1; i++) {
            //     temp = temp[addr[i]];
            // }
            // console.dir(i);
            // console.dir(temp);
            // console.dir(addr);
            // if (temp[addr[i]]) {
            //     temp[addr[i]] = null;
            // }
        };
    }

})();
