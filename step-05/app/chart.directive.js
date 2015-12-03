'use strict';

(function () {

function barsChart() {
  var chart;
  var chartData;

    function link($scope, element, attrs, vm) {
      // watch the array 'data'
      $scope.$watchCollection('vm.data', function(newValue, oldValue) {
        console.log('data changed: %o / %o', newValue, oldValue);

        /* Create Chart on watcher initialization
           See https://docs.angularjs.org/api/ng/type/$rootScope.Scope for details */
        if(newValue === oldValue) {
          console.log('create chart');
          createBarChart(vm.chartId, vm.data);

        } else if (newValue.length != 0){
          console.log('update chart');
          updateBarChart(vm.data);
        }
      },  true);
    }

    function createBarChart(chartId, data) {
      // TODO Step05 - see http://nvd3.org/examples/discreteBar.html
      // WARNING: use the global chart and chartData already declared in the directive!
    }

    function updateBarChart(data) {
      // TODO Step05 - see http://stackoverflow.com/questions/24689157/nvd3-how-to-refresh-the-data-function-to-product-new-data-on-click
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
     .directive('barsChart', barsChart);
})();
