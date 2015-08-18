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

        $scope.search = function() {
            $scope.msg = {
                message: '',
                success: true
            };
            $http.post(Setting.host + 'right/index', $scope.searchInfo).success(function(data) {
                if (data.rights && !(data.rights instanceof Array)) {
                    data.rights = [data.rights];
                }
                $scope.data = data;
                $scope.tree = Tools.clone($scope.data).rights;
                $scope.tree = Tools.transtoTree($scope.tree);

            }).error(function(data) {
                if (TestData.debug) {
                    $scope.data = TestData.right.index;
                }
            });
        };

        $scope.edit = function() {
            var modal = {
                title: '编辑',
                right: this.right,
                tree: $scope.tree
            };

            openModal(modal, function(data) {
                //刷新页面
                $scope.search();
            }, function(data) {

            });
        };

        $scope.add = function() {
            var addRight = {
                id: -1,
                name: '',
                value: '',
                parentid: '',
                parentname: ''
            };

            var modal = {
                title: '添加',
                right: addRight,
                tree: $scope.tree
            };

            openModal(modal, function(data) {
                //刷新页面
                $scope.search();
            }, function(data) {

            });
        };

        //刷新页面
        $scope.search();


        $scope.delete = function() {
            var deleteInfo = {
                right: {
                    id: this.right.id
                }
            };

            $http.post(Setting.host + 'right/delete', deleteInfo).success(function(data) {
                if (data.result.code = "000000") {
                    $scope.msg.success = true;
                    $scope.msg.message = data.result.message;
                    //刷新页面
                    $scope.search();
                } else {
                    $scope.msg.success = false;
                    $scope.msg.message = data.result.message;
                }
            }).error(function(data) {
                $scope.msg.success = false;
                $scope.msg.message = "网络异常，修改失败";
            });
        };

        function openModal(data, success, error) {
            var modalInstance = $modal.open({
                templateUrl: 'app/admin/modal.html',
                controller: 'ModalInstanceCtrl',
                backdrop: false,
                resolve: {
                    modal: function() {
                        return data;
                    }
                }
            });

            modalInstance.result.then(function(data) {
                if (success) {
                    success(data);
                }
            }, function(data) {
                if (error) {
                    error(data);
                }
            });
        }
    }

    function ModalInstanceCtrl($scope, $modalInstance, $http, modal) {
        $scope.msg = {
            message: '',
            success: true
        };
        $scope.modal = modal;

        $scope.ok = function() {
            $scope.msg.success = true;
            $scope.msg.message = '......';
            // 验证
            
            update({right: modal.right}, function (data) {
                if (data.result.code == '000000') {
                    $scope.msg.success = true;
                    $scope.msg.message = $scope.modal.title + data.result.message;
                    setTimeout((function(){
                        var instance = $modalInstance;
                        return function() {
                            instance.close();
                        };
                    })(), 100);
                    // $modalInstance.close();
                } else {
                    $scope.msg.success = false;
                    $scope.msg.message = data.result.message;
                }
            }, function (data) {
                $scope.msg.success = false;
                $scope.msg.message = '网络异常，' + $scope.modal.title + '失败';
            });
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

        function update(updateInfo, success, error) {
            $http.post(Setting.host + 'right/update', updateInfo).success(function(data) {
                if (success) success(data);
            }).error(function(data) {
                if (error) error(data);
            });
        }
    }

})();
