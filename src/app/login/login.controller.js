(function() {
  'use strict';

  angular
    .module('suzhou')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $http) {
    $scope.login = {
      username: '',
      password: '',
      phoneid: ''
    };
    $scope.keyName = 'dataJson';
    $scope.config = {
      method: 'GET',
      url: Setting.loginUrl,
      data: {}
    };
    $scope.sendInfo = '';
    $scope.Get = function() {
      var sendData = {};
      sendData[$scope.keyName] = $scope.info;
      $scope.sendInfo = '';
      $scope.config.method = 'GET';
      $scope.config.data = sendData;//JSON.parse($scope.info);
      $http($scope.config).success(successCallback).error(errorCallback);
    };
    $scope.Post = function() {
      var sendData = {};
      sendData[$scope.keyName] = $scope.login;
      $scope.sendInfo = JSON.stringify(sendData);
      console.log($scope.sendInfo);
      $scope.config.method = 'POST';
      $scope.config.data = sendData;
      $http($scope.config).success(successCallback).error(errorCallback);
    };

    return;
    function successCallback(data, status, headers, config) {
      $scope.response=JSON.stringify(data);
    }
    function errorCallback(data, status, headers, config) {
      $scope.response=JSON.stringify(data);
    }
    function checkInput() {
      if ($scope.login.username == '') {

      }
    }

  }
})();
