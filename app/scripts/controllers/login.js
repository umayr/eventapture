/**
 * Created by umayr on 06/04/15.
 */
(function () {
  'use strict';

  angular.module('evtpr')
    .controller('Login', Login);

  Login.$inject = ['$window', 'Authentication'];

  function Login($window, Authentication) {
    /*jshint validthis: true */
    var vm = this;
    vm.hello = 'hello, Login';

    vm.error = {
      has: false,
      message: ''
    };

    vm.login = function (username, password) {
      if (Authentication.authenticate(username, password)) {
        // TODO : Temporary URL redirection because #YOLO.
        $window.location.href = '/#/';
      }
      else {
        vm.error.has = true;
        vm.error.message = 'Invalid username/password.';
      }
    };
  }
})();
