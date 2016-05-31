var pokerApp = angular.module('pokerApp', []);

// pokerApp.controller('MainController', function MainController($scope) {
//     $scope.hello = "2 hello";
//     $scope.louder = function() {
//         $scope.hello += "!";
//     };
// });

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
