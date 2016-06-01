'use strict';

angular.module('metronicApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      });
  });
