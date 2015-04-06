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
    var myColors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];
    d3.scale.myColors = function() {
      return d3.scale.ordinal().range(myColors);
    };
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
      },
      css: {
        padding: 0
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
