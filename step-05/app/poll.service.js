'use strict';

(function() {

  function pollService(POLL_CONFIG, $resource) {

    var questionsAPI = $resource(POLL_CONFIG.apiSparkBaseURL + '/questions');
    var votesAPI = $resource(POLL_CONFIG.apiSparkBaseURL + '/votes/:voteId',
                             { voteId:1 },
                             {'update': { method:'PUT' }});

    function getQuestions() {
      return questionsAPI.query().$promise;
    }

    function vote(choiceIndex) {
      return votesAPI.get(function(vote) {
        var choiceId = choiceIndex + 1;
        vote['choice_' + choiceId] = vote['choice_' + choiceId] + 1;
        votesAPI.update(vote);
      }).$promise;
    }

    return {
      getQuestions: getQuestions,
      vote: vote
    }
  }

  angular
    .module('PollApp')
    .factory('pollService', ['POLL_CONFIG','$resource', pollService]);

})();
