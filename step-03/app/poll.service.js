'use strict';

(function() {

  function pollService($resource) {

    var questionsAPI = $resource('https://pollapi-allan.apispark.net/v1/questions');

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