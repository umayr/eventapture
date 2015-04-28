/**
 * Created by Umayr Shahid on 30/03/15.
 */

(function () {
  'use strict';

  angular.module('evtpr')
    .controller('Settings', Settings);

  Settings.$inject = ['$http', '$state'];

  function Settings($http,$state) {
    /*jshint validthis: true */
    var vm = this;
    vm.hello = 'hello, Settings';
    vm.tags = [
      {text: 'just'},
      {text: 'some'},
      {text: 'cool'},
      {text: 'tags'}
    ];
    vm.tags = {
      people: [
        {text: 'Sports'},
        {text: 'Travel'}
      ],
      pages: [
        {text: 'Food'},
        {text: 'Science'},
        {text: 'Talent'}]
    };

    vm.loadTags = function () {
      return $http.get('/source/categories.json');
    };

    vm.cancel = function () {
      $state.go('root.index');
    }
  }
})();
