'use strict';

(function() {

  function pollService(POLL_CONFIG, $resource) {

    var questionsAPI = $resource(POLL_CONFIG.apiSparkBaseURL + '/questions');

    function getQuestions() { 
      return questionsAPI.query().$promise;
    }

    function vote(choiceIndex) {
      // FIXME Step#4 add the code to vote
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