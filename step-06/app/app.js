'use strict';

(function() {
    angular
        .module('PollApp', ['ngSanitize','ngResource'])
        .constant('POLL_CONFIG', {
            'apiSparkBaseURL': '[YOUR_API_SPARK_BASE_URL]',
            'apiSparkLogin': '[YOUR_API_SPARK_APP_LOGIN]',
            'apiSparkPassword': '[YOUR_API_SPARK_PASSWORD]',
            'streamdataioAppToken': '[YOUR_SD_APP_TOKEN]'
        })
        .config(function($httpProvider) {
           $httpProvider.interceptors.push('apiSparkInterceptor');
        })
})();
