'use strict';

(function () {

  function PollAppController($scope, $resource, pollService) {

    var vm = this;
    vm.question = {label: "", choices:[]};
    vm.votes = [];

    function init() {
    	var questions = pollService.getQuestions().then(function(questions) {

          var question = questions[0];
          vm.question.label = questions[0].question;

          for(var i = 0; i < question.total_options; i++) {
            vm.question.choices[i] = question['choice_'+ (i + 1)];
          }
    	}).then(function(){ vm.getVotes(); });
    };

    vm.vote = function(choiceIndex) {
      pollService.vote(choiceIndex).then(function(vote) {
        vm.getVotes();
      });
    }

    vm.getVotes = function() {
      // TODO Step-05
      vm.votes[0] = { "key":"Simulated Vote Results",
                      "values":[{"label":"Javascript","value":14},
                                {"label":"Java","value":16},
                                {"label":"Ruby","value":30},
                                {"label":"C/C++","value":22},
                                {"label":"Python","value":26}] };
    }

    init();
  }

  angular
    .module('PollApp')
    .controller('PollAppController', ['$scope', '$resource', 'pollService', PollAppController]);

})();
