(function() {
    'use strict';

    angular
        .module('suzhou')
        .controller('RightController', RightController)
        .controller('ModalInstanceCtrl', ModalInstanceCtrl);

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



            // 准备树形选项
            $scope.tree = Tools.clone($scope.data);
            $scope.tree = Tools.transtoTree($scope.tree);
        });
        $scope.edit = function() {
            var modal = {
                title: '编辑',
                right: this.right,
                tree: $scope.tree
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
            var addRight = {
                id: '',
                name: '',
                value: '',
                parentid: '',
                parentname: ''
            };

            var modal = {
                title: '添加',
                right: addRight,
                option: option
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

            // $scope.data.rights.push($scope.addRight);
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

    function ModalInstanceCtrl($scope, $modalInstance, modal) {

        $scope.modal = modal;

        $scope.ok = function() {
            $modalInstance.close($scope.modal);
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    }

})();
