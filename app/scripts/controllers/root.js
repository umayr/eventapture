/**
 * Created by umayr on 06/04/15.
 */
(function () {
  'use strict';

  angular.module('evtpr')
    .controller('root', Root);

  Root.$inject = ['$location', 'Authentication'];

  function Root($location, Authentication) {
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

    vm.isAuthenticated = Authentication.isAuthenticated();
    if (!!vm.isAuthenticated) {
      vm.userInfo = Authentication.getIdentity();
    }
  }
})();
