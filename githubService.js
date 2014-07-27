 (function() {
   var github = function($http, $log) {

     var getUser = function(username) {
       var apiUrl = "https://api.github.com/users/" + username;
       $log.info("Calling Api - " + apiUrl);
       return $http.get(apiUrl)
         .then(function(response) {
           return response.data;
         });
     }; 


     return {
       getUser: getUser 
     };

   };

   // Add the service to the app's main module
   var module = angular.module("githubViewer");

   module.factory("github", ["$http", "$log", github]);

 }());