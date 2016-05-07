'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('githubClient', [
    'ngRoute',
    'githubClient.repositorySelect',
    'githubClient.repositorySelect.services',
    'githubClient.repositoryView',
    'githubClient.repositoryView.services'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/search'});
}]);