'use strict';

(function() {

  function pollService($resource) {

    var questionsAPI = $resource('[YOUR_QUESTION_API]');

    function getQuestions() {
      return questionsAPI.query().$promise;
    }

    return {
      getQuestions: getQuestions
    }
  }
  angular
    .module('PollApp')
    .factory('pollService', ['$resource', pollService]);

})();