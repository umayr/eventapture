/**
 * Created by umayr on 06/04/15.
 */
(function () {
  'use strict';

  angular.module('evtpr')
    .controller('Story', Story);

  Story.$inject = ['Search'];

  function Story(Search) {
    /*jshint validthis: true */
    var vm = this;
    vm.options = {
      chart: {
        type: 'pieChart',
        height: 320,
        donut: true,
        x: function (d) {
          return d.key;
        },
        y: function (d) {
          return d.y;
        },
        showLabels: false,

        pie: {
          startAngle: function (d) {
            return d.startAngle - Math.PI
          },
          endAngle: function (d) {
            return d.endAngle - Math.PI
          }
        },
        transitionDuration: 500,
        legend: {
          margin: {
            top: 18,
            right: 10,
            bottom: 5,
            left: 0
          }
        }
      }
    };
Search.show();


    vm.makeData = function () {
      return [
        {
          key: "One",
          value: Math.random()
        },
        {
          key: "Two",
          value: Math.random()
        },
        {
          key: "Three",
          value: Math.random()
        },
        {
          key: "Four",
          value: Math.random()
        }
      ];
    };
    vm.data = vm.makeData();
    vm.oneAtATime = true;

    vm.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];

    vm.items = ['Item 1', 'Item 2', 'Item 3'];
    vm.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
  }
})();
