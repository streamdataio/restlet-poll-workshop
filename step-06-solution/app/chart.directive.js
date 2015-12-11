'use strict';

(function () {

function barsChart() {
  var chart;
  var chartData;

    function link($scope, element, attrs, vm) {
      // watch the array 'data'
      $scope.$watchCollection('vm.data', function(newValue, oldValue) {

        if(newValue === oldValue) {
          createBarChart(vm.chartId, vm.data);

        } else if (newValue.length != 0){
          updateBarChart(vm.data);
        }
      },  true);
    }

    function createBarChart(chartId, data) {
      // see http://nvd3.org/examples/discreteBar.html
      // WARNING: use the global chart and chartData already declared in the directive!

      nv.addGraph(function() {
          chart = nv.models.discreteBarChart()
              .x(function(d) { return d.label })
              .y(function(d) { return d.value })
              .staggerLabels(true)
              .showValues(true)
              .duration(250)
              ;

          chartData = d3.select('#' + chartId).datum(data);
          chartData.call(chart);
          nv.utils.windowResize(chart.update);
          return chart;
      });
    }

    function updateBarChart(data) {
      // see http://stackoverflow.com/questions/24689157/nvd3-how-to-refresh-the-data-function-to-product-new-data-on-click
      chartData.datum(data).transition().duration(500).call(chart);
      nv.utils.windowResize(chart.update);
    }

    return {
        restrict: 'E',
        scope: {},
        controller: function() {},
        controllerAs: 'vm',
        bindToController: {
          data: '=',
          chartId: '@'
        },
        template: '<svg id={{vm.chartId}}></svg>',
        link: link
    };
}

  angular
     .module('PollApp')
     .directive('barsChart', barsChart)
     ;
})();
