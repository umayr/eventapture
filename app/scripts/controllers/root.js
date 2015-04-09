/**
 * Created by umayr on 06/04/15.
 */
(function () {
  'use strict';

  angular.module('evtpr')
    .controller('root', Root);

  Root.$inject = ['$location', '$rootScope'];

  function Root($location, $rootScope) {
    /*jshint validthis: true */
    var vm = this;
    vm.hello = 'hello, Root';
    vm.categories = [
      'Sports',
      'Politics',
      'Travel',
      'Celebrities',
      'Movies',
      'Religion',
      'Automobile',
      'Gadgets',
      'Food',
      'Science',
      'Misc.',
      'Talent'
    ];

    vm.isAuthenticated = $rootScope.isAuthenticated;
    if (!!vm.isAuthenticated) {
      vm.userInfo = $rootScope.identity;
    }
  }
})();
