/**
 * Created by umayr on 08/04/15.
 */

(function () {
  'use strict';

  angular.module('evtpr')
    .directive('story', Story);

  function Story() {
    return {
      templateUrl: 'templates/story.html',
      restrict: 'EA',
      scope: {
        options: '=',
        data: '=',
        type: '@',
        heading : '@'
      },
      link: link
    };

    function link(scope) {
      scope.getType = function (type) {
        return scope.type === type;
      }
    }
  }

})();
