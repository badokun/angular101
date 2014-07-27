(function() {

  var MainController = function($scope, $log, $location) {

    $scope.search = function(username) {
      $log.info("MainController says searching for " + username);
      $location.path("/user/" + username);

    }

    $log.info("MainController initialized...");
  }





  var app = angular.module("githubViewer");
  app.controller("MainController", ["$scope", "$log", "$location", MainController]);

}()); 