'use strict';

(function() {

  function pollService($resource) {

    function getQuestions() {
      //FIXME Step#2 Use $resource to return a $promise of questions
    }

    return {
      getQuestions: getQuestions
    }
  }

  angular
    .module('PollApp')
    .factory('pollService', ['$resource', pollService]);

})();