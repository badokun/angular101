(function() {

  var SearchController = function($scope, $log, github) {

    $scope.search = function(username) {
      $log.info("Searching for " + username);
      github.getUser(username)
        .then(function(data) {
          $log.info("Api call returned");
        }); 

    }

    $log.info("SearchController initialized...");

  }

  var app = angular.module("gitHubViewer");
  app.controller("SearchController", ["$scope", "$log", "github", SearchController]);

}());