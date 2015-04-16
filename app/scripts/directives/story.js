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
        data: '=',
        type: '@',
        heading: '@'
      },
      link: link
    };

    function link(scope) {
      scope.source = {
        bar: makeDataForBar(scope.data),
        donut: makeDataForDonut(scope.data)
      };
      scope.options = {
        donut: {
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
        },
        bar: {
          chart: {
            type: 'discreteBarChart',
            height: 270,
            margin: {
              top: 20,
              right: 20,
              bottom: 60,
              left: 55
            },
            x: function (d) {
              return d.label;
            },
            y: function (d) {
              return d.value;
            },
            showValues: false,
            valueFormat: function (d) {
              return d3.format(',.4f')(d);
            },
            transitionDuration: 500
          }
        }
      };
      scope.graphType = 'donut';
      scope.getType = function (type) {
        return scope.type === type;
      }
      scope.getGraphType = function (type) {
        return scope.graphType === type;
      };
      scope.changeGraphType = function (type) {
        scope.graphType = type;
      };

      scope.toggleGraphType = function () {
        scope.graphType = scope.graphType === 'donut' ? 'bar' : 'donut';
      };
      function makeDataForDonut(data) {
        var result = [];

        data.forEach(function (d) {
          result.push({
            key: d.key,
            y: d.value
          });
        });

        return result;
      }

      function makeDataForBar(data) {
        var result = [{
          key: 'heading',
          values: []
        }];

        data.forEach(function (d) {
          result[0].values.push({
            label: d.key,
            value: d.value
          })
        });

        return result;
      }
    }
  }

})();
