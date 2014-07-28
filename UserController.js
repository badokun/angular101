(function() {

  var UserController = function($scope, $log, github, $routeParams) {

var onReposComplete = function(repos){
  $log.info("Api call returned all the repos");
  $scope.repos = repos.data;
}

    var onUserComplete = function(user) {
      $log.info("Api call returned");
      if (angular.isUndefined(user.name)){
        $scope.user = { name : "Not set on GitHub" }
      }
      else { $scope.user = user;}
        github.getRepos(user.login).then(onReposComplete, onError);
    }

    var onError = function(reason) {
      $scope.error = reason.data.message;
      $log.info("Api returned an error - " + reason.data.message);
    }

    var username = $routeParams.username;
    $log.info("UserController says searching for " + username);
    github.getUser(username).then(onUserComplete, onError);
  }

  var app = angular.module("githubViewer");
  app.controller("UserController", ["$scope", "$log", "github", "$routeParams", UserController]);
}());