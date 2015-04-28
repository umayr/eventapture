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
    vm.data = [vm.makeData(), vm.makeData(), vm.makeData()];

    vm.makeRandom = function () {
      return Math.floor(Math.random() * 400) + 10;
    };
    vm.categories = [
      { name : 'Sports', count : vm.makeRandom()},
      { name : 'Politics', count : vm.makeRandom()},
      { name : 'Travel', count : vm.makeRandom()},
      { name : 'Celebrities', count : vm.makeRandom()},
      { name : 'Movies', count : vm.makeRandom()},
      { name : 'Religion', count : vm.makeRandom()}
    ];


vm.showMoreInfo = false;
    vm.showSidebar = false;
  }
})();
