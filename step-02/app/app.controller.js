'use strict';

(function () {

  function PollAppController($scope, $resource, pollService) {
    var vm = this;

    vm.test = function() {
    	//FIXME Step-02 - Use PollService to log the list of questions in the console
    };
  }

  angular
    .module('PollApp')
    .controller('PollAppController', ['$scope', '$resource', 'pollService', PollAppController]);

})();