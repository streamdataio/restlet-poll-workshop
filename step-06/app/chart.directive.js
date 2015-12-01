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
