'use strict';

(function() {
    angular
        .module('PollApp', ['ngSanitize','ngResource'])
        .constant('POLL_CONFIG', {
          'apiSparkBaseURL': 'https://pollapi-allan.apispark.net/v1',
          'apiSparkToken': 'ZmE5ZDdlM2UtMDA2ZS00OTgwLWI3NGUtN2Y5NDU2NDgxODFhOmZkOTM5Mzc2LTNjN2ItNGY3NC1hMzllLTc3ZjkxNjFmNWMyMw==',
          'streamdataioAppToken': 'NjQ2ZTYwOTctZjJmNC00YjJkLTlmMGUtNGI0MTk3ZmJjNjlk'
        })
        .config(function($httpProvider) {
           $httpProvider.interceptors.push('apiSparkInterceptor');
        })
})();
