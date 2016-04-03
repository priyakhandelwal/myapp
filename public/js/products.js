(function() {
  var app = angular.module('store-directives', []);

  app.directive("productDescription", function () {
    return {
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  });

  app.directive("productReviews", function () {
    return {
      restrict: 'E',
      templateUrl: 'product-reviews.html'
    };
  });

  app.directive("productTabs", function () {
    return {
      restrict: 'E',
      templateUrl: 'product-tabs.html',
      controller: function ($scope) {
        $scope.tab = 1;

        $scope.setTab = function (value) {
          $scope.tab = value;
        };

        $scope.isSet = function (value) {
          return $scope.tab === value;
        };
      }
    }
  });

});
