/**
 * Created by umayr on 28/04/15.
 */
(function () {
  'use strict';

  angular.module('evtpr')
    .factory('Search', Search);

  Search.$inject = [];

  function Search() {
    /*jshint validthis: true */

    var isVisible = true;


    return {
      isVisible: function () {
        return isVisible
      },
      show: function () {
        isVisible = true;
      },
      hide: function () {
        isVisible = false;
      }
    };
  }
})();
