/**
 * Created by Umayr Shahid on 30/03/15.
 */

(function () {
  'use strict';

  angular.module('evtpr')
    .controller('Settings', Settings);

  Settings.$inject = ['$location'];

  function Settings($location){
    /*jshint validthis: true */
    var vm = this;
    vm.hello = 'hello, Settings';
  }
})();
