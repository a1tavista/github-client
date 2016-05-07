'use strict';

angular.module('githubClient.repositorySelect.services', ['ngResource'])
    .factory('Search', function ($resource) {
        return $resource('https://api.github.com/search/repositories');
    })
    .factory('Repositories', function($resource) {
        return $resource('https://api.github.com/repositories')
    });