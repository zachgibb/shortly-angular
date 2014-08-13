angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  //Should have a links property
  $scope.data = {};
  //Should have a data property
  //Should have getLinks property
  $scope.getLinks = function(){
    Links.getLinks(function(response){
      $scope.data.links = response.data;
    });
  };
  $scope.getLinks();
  //should call get links when the controller is loaded <- links.html
})
.directive('shortenLinks', function(){
  return {
    replace: true,
    restrict: 'E',
    scope: {
      data: '='
    },
    templateUrl: "app/links/shorten_links.html"
  };
});
