'use strict';

(function() {

  function pollService(POLL_CONFIG, $resource) {

    function getQuestions() {
      //TODO Step#2 Use $resource to return a $promise of questions
    }

    return {
      getQuestions: getQuestions
    }
  }

  angular
    .module('PollApp')
    .factory('pollService', ['POLL_CONFIG', '$resource', pollService]);

})();
