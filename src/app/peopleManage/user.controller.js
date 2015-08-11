(function() {
    'use strict';

    angular
        .module('suzhou')
        .controller('UserController', UserController);

    /** @ngInject */
    function UserController($scope, $http, $state, DataService, Tools) {
        var pageInfo = {
            name: '员工',
            state: $state.current.name,
            active: true,
        };
    	var initData = {
 			employeeHead: ['员工编号', '姓名', '电话', '操作'],
 			employee: [{
 				id: '001',
 				name: '刘东方',
 				phone: '13125252525'
 			},{
 				id: '002',
 				name: '李四',
 				phone: '13674759754'
 			},{
 				id: '003',
 				name: '郑富贵',
 				phone: '18364445578'
 			}],
 			client: {
 				
 			},
 		};


        // -- 网络请求相关定义
        $scope.searchInfo = {
            user: {
                name: "nihao",
            }
        };
        $scope.search = function(callback) {
            $http.post(Setting.host + 'user/index', $scope.searchInfo).success(function(data){
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

        // -- 初始化数据 有则用本地的，无则请求网络的
        var addr = $state.current.name.split('.');
        var temp = DataService;
        for (var i = 0; i < addr.length; i++) {
            if (temp[addr[i]]) {
                temp = temp[addr[i]];
            } else {
                temp = null;
                break;
            }
        };
        if (!temp) {
            $scope.search(function(){
                // $scope.selectData = Tools.clone($scope.data);
                // $scope.selectData.rights = Tools.transtoTree($scope.selectData.rights);
            });
        } else {
            $scope.data = temp;
        }
        // DataService[addr[0]].pages.open(pageInfo);


        // -- 页面相关数据以及控制
 		$scope.users = Tools.clone(initData);
 		$scope.edit = function() {
 			this.emp.editable = !this.emp.editable;
 		};
 		$scope.add = function() {
 			$scope.users.employee.push($scope.addEmployee);

	    	$scope.addEmployee = {
				id: '',
				name: '',
				phone: ''
	    	};
 		};
 		$scope.delete = function() {
 			$scope.users.employee = _.without($scope.users.employee, this.emp);
 		};

    	$scope.addEmployee = {
			id: '',
			name: '',
			phone: ''
    	};
    }
})();
