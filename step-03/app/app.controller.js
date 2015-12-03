'use strict';

(function () {

  function PollAppController($scope, $resource, pollService) {

    var vm = this;
    vm.question = {label: "", choices:[]};

    function init() {
        //TODO Populate question object with question label and list of possible choices
    };

    init();
  }
  angular
    .module('PollApp')
    .controller('PollAppController', ['$scope', '$resource', 'pollService', PollAppController]);

})();
