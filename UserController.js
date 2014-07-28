(function() {

  var UserController = function($scope, $log, github, $routeParams) {

    var onUserComplete = function(data) {
      $log.info("Api call returned");
      $scope.user = data;
    }

    var onError = function(error) {
      $scope.error = error.data.message;
      $log.info("Api returned an error - " + error.data.message);
    }

    var username = $routeParams.username;
    $log.info("UserController says searching for " + username);
    github.getUser(username).then(onUserComplete, onError);
  }

  var app = angular.module("githubViewer");
  app.controller("UserController", ["$scope", "$log", "github", "$routeParams", UserController]);


}());