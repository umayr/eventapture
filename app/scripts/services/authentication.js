/**
 * Created by umayr on 06/04/15.
 */
(function () {
  'use strict';

  angular.module('evtpr')
    .factory('Authentication', Authentication);

  Authentication.$inject = [];

  function Authentication() {
    /*jshint validthis: true */

    var _isAuthenticated = false;
    var _identity = {};

    function authenticate(username, password) {
      if (username === 'umayr' && password === 'test') {
        _isAuthenticated = true;
        // TODO: Set values that needed to be set after successful login.
        setIdentity({
          username : username,
          fullname : 'Umayr Shahid'
        });
        return true;
      }
      else{
        return false;
      }
    }

    function isAuthenticated() {
      return _isAuthenticated;
    }

    function setIdentity(data){
      _identity = data;
    }

    function getIdentity(){
      return _identity;
    }

    return {
      isAuthenticated : isAuthenticated,
      authenticate : authenticate,
      getIdentity : getIdentity
    }
  }
})();
