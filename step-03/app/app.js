'use strict';

(function() {
    angular
        .module('PollApp', ['ngSanitize','ngResource'])
        .constant('POLL_CONFIG', {
          'apiSparkBaseURL': '[YOUR_API_SPARK_BASE_URL]',
          'apiSparkToken': '[YOUR_API_SPARK_APP_TOKEN]',
        })
        .config(function($httpProvider) {
           $httpProvider.interceptors.push('apiSparkInterceptor');
        })
})();
