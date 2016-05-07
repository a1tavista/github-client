'use strict';

angular.module('githubClient.repositoryView.services', ['ngResource'])
    .factory('Repo', function ($resource) {
        return $resource('https://api.github.com/repos/:owner/:repo');
    })
    .factory('Commits', function ($resource) {
        return $resource('https://api.github.com/repos/:owner/:repo/commits');
    })
    .factory('Branches', function ($resource) {
        return $resource('https://api.github.com/repos/:owner/:repo/branches/:branch');
    })
    .factory('Languages', function ($resource) {
        return $resource('https://api.github.com/repos/:owner/:repo/languages');
    })
    .factory('Contributors', function ($resource) {
        return $resource('https://api.github.com/repos/:owner/:repo/contributors');
    });


