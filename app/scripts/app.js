'use strict';

/**
 * @ngdoc overview
 * @name challengeApp
 * @description
 * # challengeApp
 *
 * Main module of the application.
 */
angular
  .module('challengeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        views:{
          'app':{
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: "vm"
          }
        }
      });

  });
