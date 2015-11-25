'use strict';

(function() {

  function pollService(POLL_CONFIG, $resource) {

    var questionsAPI = $resource(POLL_CONFIG.apiSparkBaseURL +'/questions');

    function getQuestions() {
      return questionsAPI.query().$promise;
    }

    return {
      getQuestions: getQuestions
    }
  }
  angular
    .module('PollApp')
    .factory('pollService', ['POLL_CONFIG', '$resource', pollService]);

})();