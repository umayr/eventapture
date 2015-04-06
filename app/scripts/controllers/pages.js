/**
 * Created by Umayr Shahid on 30/03/15.
 */

(function () {
  'use strict';

  angular.module('evtpr')
    .controller('Pages', Pages);

  Pages.$inject = ['$location'];

  function Pages($location){
    /*jshint validthis: true */
    var vm = this;
    vm.hello = 'hello, pages';
  }
})();
