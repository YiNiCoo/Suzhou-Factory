(function() {
    'use strict';

    angular
        .module('suzhou')
        .controller('AdminController', AdminController);

    /** @ngInject */
    function AdminController($scope) {
        $scope.statename = 'admin';
        $scope.menus = [{
            children: [{
                "id": 1,
                "name": "人员",
                "value": "backend/index",
                "parentid": 0,
                "hasRight": false,
                "parentname": null
            }, {
                "id": 2,
                "name": "角色",
                "value": "role/index",
                "parentid": 0,
                "hasRight": false,
                "parentname": null
            }, {
                "id": 3,
                "name": "权限",
                "value": "right/index",
                "parentid": 0,
                "hasRight": false,
                "parentname": null
            }]
        }]
    }
})();
