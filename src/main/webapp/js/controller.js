var app = angular.module('mainApp', ['ngRoute']);
 app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'login.html'
            })
            .when('/index1', {
                templateUrl: 'index1.html'
            })
            .when('/error', {
                templateUrl: 'error.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});

  app.controller('loginCtrl', function ($scope, $location) {
    $scope.inputType = 'password';
    $scope.hideShowPassword = function () {
        if ($scope.inputType == 'password')
            $scope.inputType = 'text';
        else
            $scope.inputType = 'password';
    };
    $scope.submit = function () {
        

        if ($scope.username == 'admin' && $scope.password == 'admin') {
            $location.path('/index1');
        } else {
           
            $location.path('/error');
        }

    };
});