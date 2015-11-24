'use strict';

(function() {
    angular
        .module('PollApp', ['ngSanitize','ngResource'])
        .constant('POLL_CONFIG', {
            'apiSparkLogin': '[YOUR_API_SPARK_APP_LOGIN]',
            'apiSparkPassword': '[YOUR_API_SPARK_PASSWORD]',
        })
        .config(function($httpProvider) {
           $httpProvider.interceptors.push('apiSparkInterceptor');
        })
})();
