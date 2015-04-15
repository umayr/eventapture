/**
 * Created by umayr on 06/04/15.
 */
(function () {
  'use strict';

  angular.module('evtpr')
    .controller('Root', Root);

  Root.$inject = ['$location', 'Authentication', '$state'];

  function Root($location, Authentication,$state) {
    /*jshint validthis: true */
    var vm = this;

    vm.categories = [
      {name :'Sports', icon : 'fa-futbol-o'},
      {name :'Politics', icon : 'fa-university'},
      {name :'Travel', icon : 'fa-plane'},
      {name :'Celebrities', icon : 'fa-music'},
      {name :'Movies', icon : 'fa-film'},
      {name :'Religion', icon : 'fa-moon-o'},
      {name :'Automobile', icon : 'fa-car'},
      {name :'Gadgets', icon : 'fa-mobile'},
      {name :'Food', icon : 'fa-cutlery'},
      {name :'Science', icon : 'fa-flask'},
      {name :'Misc.', icon : 'fa-asterisk'},
      {name :'Talent', icon : 'fa-binoculars'}
    ];

    vm.isAuthenticated = Authentication.isAuthenticated();
    if (!!vm.isAuthenticated) {
      vm.userInfo = Authentication.getIdentity();
    }
    vm.isStateActive = function (state) {
      return $state.current.name === state;
    }
  }
})();
