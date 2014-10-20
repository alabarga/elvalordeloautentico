angular.module('elValordeloAutentico', ['ngRoute'])

 .controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

 .controller('FormController', function($scope, $routeParams) {
     $scope.name = "FormController";
     $scope.params = $routeParams;
 })

 .controller('HelpController', function($scope, $routeParams) {
     $scope.name = "AyudaController";
     $scope.params = $routeParams;
 })
 
 .controller('ShareController', function($scope, $routeParams) {
     $scope.name = "ShareController";
     $scope.params = $routeParams;
 })

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'formulario.html',
    controller: 'FormController',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  .when('/bases', {
    templateUrl: 'bases.html',
    controller: 'HelpController'
  })
  .when('/ayuda', {
    templateUrl: 'ayuda.html',
    controller: 'HelpController'
  })
  .when('/comparte/:projectId', {
    templateUrl: 'compartir.html',
    controller: 'HelpController'
  });
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});