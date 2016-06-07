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
        otherwise('/homeform');
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
    templateUrl: 'gameform.html',
    controller: function() {

        var vm = this;
        vm.onPlayerClick = onPlayerClick;

        function shuffle(o){
            for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }

        function range(start, end) {
            var result = [];
            for (var i = start; i <= end; i++) {
                result.push(i);
            }
            return result;
        }

        var deck = shuffle(range(1, 52));

        function dealCard(cardNumber, max, target) {
            if (cardNumber > max) {
                return;
            }

            var rotationDegree = Math.floor(Math.random() * 60) - 30;
            $('<img />', {
                src: '/images/cards/' + deck.pop() + '.png',
                class: target,
                style: 'transform: rotate(' + rotationDegree + 'deg);'
            }).appendTo('#' + target);

            setTimeout(function() {
                dealCard(cardNumber + 1, max, target);
            }, 500);
        }

        function onPlayerClick(targetPlayer) {
            // alert("onPlayer1Click");
            $('img.'+targetPlayer).remove();
            if (targetPlayer === 'table') {
                dealCard(1, 5, targetPlayer);
            } else {
                dealCard(1, 2, targetPlayer);
            }
        }

        /*
                setTimeout(function() {
                    dealCard(1, 2, 'player1');
                }, 500);

                setTimeout(function() {
                    dealCard(1, 2, 'player2');
                }, 1500);

                setTimeout(function() {
                    dealCard(1, 5, 'table');
                }, 2500);
        */
    }
});

pokerApp.component('statisticForm', {
    templateUrl: 'statisticform.html',
    controller: function(statisticService) {
        const vm = this;
        statisticService.getStatistics().then(function(data) {
            return vm.highScores = data;
        });
    }
});

pokerApp.factory('statisticService', function($http, $q) {

    let results = null;

    function getStatistics() {
        if (!results) {
            return $http.get('/statistic').then( function(response) {
                results = response.data;
                return response.data;
            });

        } else {
            return $q(resolve => resolve(results));
        }

    };

    return {
        getStatistics
    };
});
