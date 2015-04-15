/**
 * Created by umayr.shahid on 4/15/2015.
 */
(function () {
  'use strict';

  angular.module('evtpr')
    .directive('ticker', Ticker);

  function Ticker() {
    return {
      templateUrl: 'templates/story.html',
      restrict: 'E',
      scope: {
        items: '='
      },
      link: link
    };

    function link(scope) {
      function Ticker(element, length) {
        this.el = document.getElementById(element);
        this.init(length);
      }

      Ticker.prototype = {
        init: function (length) {
          this.items = this.el.getElementsByTagName("li");
          this.wrapper = document.getElementById("ticker-wrapper-inner");

          this.totalItems = length;
          this.timer = null;
          this.index = 0;

          this.tick();
          this.hover();
        },
        tick: function () {
          var self = this;
          self._setElementOffsets();

          self.timer = setInterval(function () {
            self.index++;

            if (self.index == self.totalItems) {
              self.index = 0;
            }

            var item = self.items[self.index];
            var top = item.getAttribute("data-top");
            self.wrapper.style.top = "-" + top + "px";


          }, 1000);
        },
        hover: function () {
          var self = this;
          var li = self.items;

          for (var i = 0; i < self.totalItems; ++i) {
            var item = li[i];
            item.addEventListener("mouseover", function () {
              clearInterval(self.timer);
              self.timer = null;

            }, false);
            item.addEventListener("mouseout", function () {
              self.tick();

            }, false);
          }
        },
        _setElementOffsets: function () {
          var self = this;
          var li = self.items;

          for (var i = 0; i < self.totalItems; ++i) {
            var item = li[i];
            var top = item.offsetTop;

            item.setAttribute("data-top", top);
          }
        }
      };

      var el = document.getElementById('ticker');
      var ul = el.getElementsByTagName('ul')[0];

      var unreg = scope.$watch(function () {
        return ul.children.length === scope.items.length;
      }, function () {
        var news = new Ticker('ticker', scope.items.length);
        unreg();
      });
    }
  }

})();
