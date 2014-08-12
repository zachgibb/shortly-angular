angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {url:''};
  $scope.loading = false;
  $scope.isValid = true;
  
  $scope.addLink = function(link){
    $scope.loading = true;
    
    Links.sendLink(link, function(response){
      $scope.loading = false;
      $scope.isValid = response;
    });
    $scope.link.url = '';
  };
});
