(function(){
  'use strict';

  angular.module('profileapp', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.name="Nicole";
  }]);
})();
