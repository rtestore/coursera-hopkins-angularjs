(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://glacial-island-18645.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
