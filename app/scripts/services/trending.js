/**
 * Created by umayr on 06/04/15.
 */
(function () {
  'use strict';

  angular.module('evtpr')
    .factory('Trending', Trending);

  Trending.$inject = ['$location'];

  function Trending($location){
    /*jshint validthis: true */
    var vm = this;
    vm.hello = 'hello, pages';
  }
});
