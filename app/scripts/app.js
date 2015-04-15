(function () {
  'use strict';

  var app = angular.module('evtpr', ['ui.router', 'nvd3', 'ui.bootstrap']);

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root', {
        templateUrl: 'partials/skeleton.html',
        controller: 'Root as vm',
        abstract: true
      })
      .state('root.index', {
        url: '/',
        views: {
          'skeleton': {
            templateUrl: 'partials/index.html',
            controller: 'Index as vm'
          }
        }
      })
      .state('root.pages', {
        url: '/pages',
        views: {
          'skeleton': {
            templateUrl: 'partials/pages.html',
            controller: 'Pages as vm'
          }
        }
      })
      .state('root.favorites', {
        url: '/favorites',
        views: {
          'skeleton': {
            templateUrl: 'partials/favorites.html'
          }
        }
      })
      .state('root.settings', {
        url: '/settings',
        views: {
          'skeleton': {
            templateUrl: 'partials/settings.html',
            controller: 'Settings as vm'
          }
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'Login as vm'
      });
  }]);
})();
