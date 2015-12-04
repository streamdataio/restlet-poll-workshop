'use strict';

(function () {
  function streamdataioVotesFactory(POLL_CONFIG) {
    function createEventSource() {
      var authorization = 'Basic ' + POLL_CONFIG.apiSparkToken;
      var headers = ['Authorization: ' + authorization];

      return streamdataio.createEventSource(POLL_CONFIG.apiSparkBaseURL + '/votes', POLL_CONFIG.streamdataioAppToken, headers);
    }

    return {
      createEventSource: createEventSource
    };
  }

  angular
    .module('PollApp')
    .factory('streamdataioVotesFactory', ['POLL_CONFIG', streamdataioVotesFactory]);
})();
