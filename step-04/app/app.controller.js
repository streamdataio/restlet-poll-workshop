'use strict';

(function () {

  function PollAppController($scope, $resource, pollService) {

    var vm = this;
    vm.question = {label: "", choices:[]};
    vm.results = [];

    function init() {
    	var questions = pollService.getQuestions().then(function(questions) {

          var question = questions[0];
          vm.question.label = questions[0].question;

          for(var i = 0; i < question.total_options; i++) {
            vm.question.choices[i] = question['choice_'+ (i + 1)];
          }
    	});
    };

    vm.vote = function(choiceIndex) {
      // TODO Step#4 add the code to vote
    }

    init();
  }

  angular
    .module('PollApp')
    .controller('PollAppController', ['$scope', '$resource', 'pollService', PollAppController]);

})();
