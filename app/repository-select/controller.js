'use strict';

angular.module('githubClient.repositorySelect', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/search', {
            templateUrl: 'repository-select/view.html',
            controller: 'repositorySelectCtrl'
        });
    }])
    .controller('repositorySelectCtrl', ['$scope', 'Search', 'Repositories', function ($scope, Search, Repositories) {
        $scope.repositories = Repositories.query();

        $scope.doSearch = function() {
            Search.get({
                'q': $scope.search
            }, function (data) {
                $scope.repositories = data.items;
            });
        }
    }]);
