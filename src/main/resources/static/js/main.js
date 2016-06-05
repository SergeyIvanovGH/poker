var pokerApp = angular.module('pokerApp', ['ngRoute']);

// pokerApp.controller('MainController', function MainController($scope) {
//     $scope.hello = "2 hello";
//     $scope.louder = function() {
//         $scope.hello += "!";
//     };
// });

pokerApp.config(function config($routeProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);
    // для этого нужен тег <base href="/"> в <head>

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider.
        when('/homeform', {
            template: '<home-form></home-form>'
        }).
        when('/signinform', {
            template: '<signin-form></signin-form>'
        }).
        when('/signupform', {
            template: '<signup-form></signup-form>'
        }).
        when('/gameform', {
            template: '<game-form></game-form>'
        }).
        when('/statisticform', {
            template: '<statistic-form></statistic-form>'
        }).
        otherwise('/statisticform');
});

pokerApp.controller('MainController', function MainController() {
    this.hello = "2 hello";
    this.louder = function() {
        this.hello += "!";
    };
});

pokerApp.component('loginForm', {
// template: '<h3>Login: {{$ctrl.login}}</h3>',
    templateUrl: 'loginform.html',
    controller: function() {
        this.login = 'user1';
    }
});

pokerApp.component('homeForm', {
    templateUrl: 'homeform.html'
});

pokerApp.component('signinForm', {
    templateUrl: 'signinform.html'
});

pokerApp.component('signupForm', {
    templateUrl: 'signupform.html'
});

pokerApp.component('gameForm', {
    templateUrl: 'gameform.html'
});

pokerApp.component('statisticForm', {
    templateUrl: 'statisticform.html',
    controller: function($http) {
        var vm = this;
        $http.
            get('/statistic').
            then(function(response) {
                vm.highScores = response.data;
            });

    }
});
