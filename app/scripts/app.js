(function () {
  'use strict';

  var app = angular.module('evtpr', ['ui.router', 'nvd3']);

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('pages', {
        url: '/pages',
        templateUrl: 'partials/pages.html',
        controller: 'Pages'
      })
      .state('favorites', {
        url: '/favorites',
        templateUrl: 'partials/favorites.html'
      })
      .state('index', {
        url: '/',
        templateUrl: 'partials/index.html',
        controller: 'Index as vm'
      });

  }]);
})();
