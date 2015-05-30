var controllers = angular.module('profileapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope){
  $scope.message = 'Hello I am the HOME PAGE';
}]);


controllers.controller('DeveloperController', ['$scope', function($scope){
  $scope.message = 'Hello I am the ABOUT PAGE';
}]);


controllers.controller('DesignerController', ['$scope', function($scope){
  $scope.message = 'Hello I am the NEEDS PAGE';
  $scope.needs=[];
}]);

controllers.controller('DancerController', ['$scope', function($scope){
  $scope.message = 'Hello I am the NEEDS PAGE';
  $scope.needs=[];
}]);
