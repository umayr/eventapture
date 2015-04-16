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

    vm.trends = [
      { heading : 'Fusce eget diam at ex varius dictum.', up:'Ex Varius 40%', down: 'Non Vehicula 10%'},
      { heading : 'Sed nec eros quis nisi tempor tincidunt.', up:'Quis Nisi 30%', down: 'Viverra Turpis 40%'},
      { heading : 'In varius magna non vehicula auctor.', up:'Viverra Turpis 40%', down: 'Quis Nisi 30%'},
      { heading : 'In viverra turpis sit amet arcu auctor eleifend.', up:'Non Vehicula 10%', down: 'Ex Varius 40%'}
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
