/**
 * Created by umayr on 06/04/15.
 */
(function () {
  'use strict';

  angular.module('evtpr')
    .controller('Index', Index);

  Index.$inject = ['$location'];

  function Index($location){
    /*jshint validthis: true */
    var vm = this;
    vm.hello = 'hello, Index';

    vm.options = {
      chart: {
        type: 'pieChart',
        height: 400,
        donut: true,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: false,

        pie: {
          startAngle: function(d) { return d.startAngle  - Math.PI  },
          endAngle: function(d) { return d.endAngle- Math.PI }
        },
        transitionDuration: 500,
        legend: {
          margin: {
            top: 5,
            right: 60,
            bottom: 5,
            left: 0
          }
        }
      }
    };


    vm.makeData = function () {
      return [
        {
          key: "One",
          y: Math.random()
        },
        {
          key: "Two",
          y: Math.random()
        },
        {
          key: "Three",
          y: Math.random()
        },
        {
          key: "Four",
          y: Math.random()
        }
      ];
    };
  }
})();
