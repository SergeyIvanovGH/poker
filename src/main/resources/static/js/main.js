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
        when('/listplayersform', {
            template: '<list-players-form></list-players-form>'
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

pokerApp.component('showUserNameForm', {
    template: '<span ng-if="$ctrl.showLogout()"><a href="/signoutform">Logout</a> user {{$ctrl.username}}</span>' +
        '<span ng-if="!$ctrl.showLogout()"><a href="/signinform">Login</a></span>',

    controller: function(userService) {
        this.username = userService.getUserName();

        this.showLogout = function() {
            return this.username != null;
        };

    }
});

pokerApp.component('homeForm', {
    templateUrl: 'homeform.html'
});

pokerApp.component('signinForm', {
    templateUrl: 'signinform.html',
    controller: function(userService) {

        var vm = this;
        vm.signin = signin;

        function signin() {
            console.log('signinForm: '+email.value + password.value);
            userService.signin(email.value, password.value);
        }
    }
});

pokerApp.component('listPlayersForm', {
    templateUrl: 'listplayersform.html',
    controller: function(userService) {
        const vm = this;
        userService.listPlayers().then(function(data) {
            return vm.players = data;
        });
    }
});


pokerApp.component('signupForm', {
    templateUrl: 'signupform.html',
    controller: function(userService) {

        var vm = this;
        vm.signup = signup;

        function signup() {
            // console.log('signupForm: '+email.value + password.value);
            userService.signup(email.value, password.value);
        }
    }
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

    let promise = null;

    function getStatistics() {
        if (!promise) {
            promise = $http.get('/statistic').then(response => {
                results = response.data;
                return response.data;
            });
        }

        return promise;
    };

    return {
        getStatistics
    };
});


pokerApp.factory('userService', function($http, $filter) {

    let username = null;

    function getUserName() {
        console.log('userService:getUserName: '+username);
        return username;
    }

    function signin(email, password) {
        username = email;
        console.log('userService:SignIn: '+email);
    }

    function signout() {
        username = null;
    }

    function listPlayers() {
        promise = $http.get('/listplayers').then(response => {
            results = response.data;
            return response.data;
        });

        return promise;
    }

    function signup(email, password) {
        username = email;
        // var dataObj = {email: email, password: password};
        var dataJSON = $filter('json')({eMail: email, password: password});

        // console.log('userService:signup: '+dataJSON);

        $http.post('/register', dataJSON);
    }

    return {
        getUserName: getUserName,
        signup: signup,
        signin: signin,
        signout: signout,
        listPlayers: listPlayers
    }
});

/*
pokerApp.filter('statisticFilter', function(value) {
    if (value < 1000) {
        return 'less 1000';
    }
    else if(value > 1000 || value < 2000) {
        return 'between 1000 and 2000';
    }
});
*/
