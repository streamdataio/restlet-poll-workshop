'use strict';

(function () {
  function streamdataioVotesFactory(POLL_CONFIG) {

    function createEventSource() {
      var authorization = 'Basic ' + POLL_CONFIG.apiSparkToken;
      var headers = ['Authorization: ' + authorization];

      //TODO Step-06 - Use Streamdata.io SDK to return a EventSource on Votes API.
    }

    return {
      createEventSource: createEventSource
    };
  }

  angular
    .module('PollApp')
    .factory('streamdataioVotesFactory', ['POLL_CONFIG', streamdataioVotesFactory]);
})();
