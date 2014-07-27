 (function() {


    var github = function($http, $log) {

      var getUser = function(username) {
        var apiUrl = "https://api.github.com/users/" + username;
        $log.info("Calling Api - " + apiUrl);
        return $http.get(apiUrl)
          .then(function(response){ 
        return response.data;
      }); 
    };
    
    
    return{
      getUser : getUser
    };
    
  }; 
  
  
  var module = angular.module("gitHubViewer");
  
  module.factory("github", ["$http", "$log", github]);
  
}());