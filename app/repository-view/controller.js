'use strict';

angular.module('githubClient.repositoryView', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view/:owner/:repo', {
            templateUrl: 'repository-view/view.html',
            controller: 'repositoryViewCtrl'
        });
    }])
    .controller('repositoryViewCtrl', ['$scope', '$routeParams', 'Repo', 'Commits', 'Branches', 'Languages', 'Contributors',
        function ($scope, $routeParams, Repo, Commits, Branches, Languages, Contributors) {

            // Controller init
            var owner = $routeParams.owner;
            var repo = $routeParams.repo;

            var repository = {'owner': owner, 'repo': repo};

            Repo.get(repository, function (data) {
                $scope.repo = data;
                $scope.currentBranch = data.default_branch;
                $scope.switchBranch(data.default_branch);
            });

            Branches.query(repository, function (data) {
                $scope.branches = data;
            });

            Languages.get(repository, function (data) {
                $scope.langs = data;
            });

            Contributors.query(repository, function (data) {
                $scope.contributors = data;
            });

            $scope.switchBranch = function (branchName) {
                Commits.query({'owner': owner, 'repo': repo, 'sha': branchName}, function (data) {
                    $scope.commits = data;
                    $scope.currentBranch = branchName;
                });
            };

        }]);
