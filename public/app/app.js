var app = angular.module('profileapp', ['ngRoute', 'profileapp.controllers']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {templateUrl: 'partials/index', controller: 'IndexController'})
    //.when('/developer', {templateUrl: 'partials/developer', controller: 'DeveloperController'})
    //.when('/designer', {templateUrl: 'partials/designer', controller: 'DesignerController'})
    //.when('/dancer', {templateUrl: 'partials/dancer', controller: 'DancerController'})
    .otherwise({redirectTo:'/'})
}])

.config(['$locationProvider', function($locationProvider){
  $locationProvider.html5Mode(true);
}]);
