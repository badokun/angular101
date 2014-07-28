 (function() {
   var github = function($http, $log) {

     var onUserComplete = function(response) {
       return response.data;
     }

     var onReposComplete = function(response) {
       return response;
     }

     var getUser = function(username) {
       var apiUrl = "https://api.github.com/users/" + username;
       $log.info("Calling Api - " + apiUrl);
       return $http.get(apiUrl)
         .then(onUserComplete);
     };

     var getRepos = function(username) {
       var apiUrl = "https://api.github.com/users/" + username + "/repos";
       $log.info("Calling Api - " + apiUrl);
       return $http.get(apiUrl)
         .then(onReposComplete);
     }

     return {
       getUser: getUser,
       getRepos: getRepos
     };
   };

   // Add the service to the app's main module
   var module = angular.module("githubViewer");
   module.factory("github", ["$http", "$log", github]);

 }());