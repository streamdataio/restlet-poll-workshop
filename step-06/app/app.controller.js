'use strict';

(function () {

  function PollAppController($scope, $resource, pollService, streamdataioVotesFactory) {
    var vm = this;
    vm.question = {label: "", choices:[]};
    vm.votes = [];

  function init() {
  	var questions = pollService.getQuestions().then(function(questions) {
        var question = questions[0];
        vm.question.label = questions[0].question;

        for(var i=0; i < question.total_options; i++) {
          vm.question.choices[i] = question['choice_'+ (i + 1)];
        }
  	}).then(function() {
      vm.getVotes();
    });
  };

  vm.vote = function(choiceIndex) {
    pollService.vote(choiceIndex);
  }

  vm.getVotes = function() {
    /* FIXME Step-06 - Change implementation in order to use streamdataioVotesFactory
       and register to proper callbacks */

    var results = pollService.getVotes().then(function(results) {
      var result = results[0];

      var votes = vm.question.choices.map(function(choice, index) {
        var count = result['choice_' + (index + 1)];
        return {
           label: choice,
           value: count
        }
      });

      vm.votes[0] = {
        key: 'Votes result',
        values: votes
      };
    });
  }

  /* Helper method to map anwser label and corresponding counter (# of votes) */
  vm.convertToChartData = function(votes) {
    var choiceCount = vm.question.choices.map(function(choice, index) {
      var count = votes['choice_' + (index + 1)];
      return {
         label: choice,
         value: count
      }
    });

    vm.votes[0] = {
      key: 'Votes result',
      values: choiceCount
    };
  }

  init();
}

  angular
    .module('PollApp')
    .controller('PollAppController', ['$scope', '$resource', 'pollService', 'streamdataioVotesFactory', PollAppController]);

})();
