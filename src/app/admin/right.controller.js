(function() {
    'use strict';

    angular
        .module('suzhou')
        .controller('RightController', RightController)
        .controller('ModalInstanceCtrl', function($scope, $modalInstance, modal) {

            $scope.modal = modal;

            $scope.ok = function() {
                $modalInstance.close($scope.modal);
            };

            $scope.cancel = function() {
                $modalInstance.dismiss('cancel');
            };
        });

    /** @ngInject */
    function RightController($scope, $http, $modal, $log, Tools) {
        $scope.tableHead = ['名称', 'value值', '父名称', '操作'];
        $scope.searchInfo = {
            right: {
                name: '',
                value: ''
            }
        };

        $scope.search = function(callback) {
            $http.post(Setting.host + 'right/index', $scope.searchInfo).success(function(data) {
                if (data.rights && !(data.rights instanceof Array)) {
                    data.rights = [data.rights];
                }
                $scope.data = data;
                if (callback) {
                    callback();
                }
            }).error(function(data) {
                if (TestData.debug) {
                    $scope.data = TestData.right.index;
                    if (callback) {
                        callback();
                    }
                }
            });
        };
        $scope.search(function() {
            $scope.selectData = Tools.clone($scope.data);
            $scope.selectData.rights = Tools.transtoTree($scope.selectData.rights);
        });




        $scope.edit = function() {
            var modal = {
                title: '编辑',
                right: this.right,
            };
            var modalInstance = $modal.open({
                templateUrl: 'app/admin/modal.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    modal: function() {
                        return modal;
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.add = function() {
            $scope.data.rights.push($scope.addRight);

            $scope.addRight = {
                id: '',
                name: '',
                value: '',
                parentid: '',
                parentname: ''
            };
        };
        $scope.delete = function() {
            $scope.data.rights = _.without($scope.data.rights, this.right);
        };

        function Right () {}
        Right.prototype = {
            id: '',
            name: '',
            value: '',
            parentid: '',
            parentname: ''
        };

        // -- modal config --
        // $scope.open = function() {

        //     var modalInstance = $modal.open({
        //         templateUrl: 'app/admin/modal.html',
        //         // controller: 'ModalInstanceCtrl',
        //         resolve: {
        //             modal: function() {
        //                 return $scope.modal;
        //             }
        //         }
        //     });

        //     modalInstance.result.then(function(selectedItem) {
        //         $scope.selected = selectedItem;
        //     }, function() {
        //         $log.info('Modal dismissed at: ' + new Date());
        //     });
        // };

    }
})();
