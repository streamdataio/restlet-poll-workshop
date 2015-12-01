'use strict';

(function () {

  function apiSparkInterceptor(POLL_CONFIG, $q) {
    return {
      request: function (config) {
        config.headers = config.headers || {};

        var authorization = 'Basic ' + btoa(POLL_CONFIG.apiSparkLogin + ':' + POLL_CONFIG.apiSparkPassword);
        config.headers['Authorization'] = authorization;
        return config;
      },
      response: function (response) {
        return response || $q.when(response);
      }
    };
  };

  angular
    .module('PollApp')
    .factory('apiSparkInterceptor', ['POLL_CONFIG', '$q', apiSparkInterceptor]);

})();