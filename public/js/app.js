angular.module('myApp', ['ui.router', 'firebase'])

.config(function ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: '../templates/temp1.html',
      controller: 'temp1Ctrl'
    })
    .state('support', {
      url: '/support',
      templateUrl: '../templates/temp2.html',
      controller: 'temp2Ctrl'
    })

});