'use strict';

(function () {
  function streamdataioVotesFactory(POLL_CONFIG) {

    function createEventSource() {
      var authorization = 'Basic ' + btoa(POLL_CONFIG.apiSparkLogin + ':' + POLL_CONFIG.apiSparkPassword);
      var headers = ['Authorization: ' + authorization];

      //FIXME Step-06 - Use Streamdata.io SDK to return a EventSource on Votes API.
    }

    return {
      createEventSource: createEventSource
    };
  }

  angular
    .module('PollApp')
    .factory('streamdataioVotesFactory', ['POLL_CONFIG', streamdataioVotesFactory]);
})();
