(function(){
  var app = angular.module('store', []);

  app.controller("StoreController", function($scope) {
    $scope.products = gems;
  });

  var gems = [
    {
      name: "Dodecahedron",
      price: "12.40",
      description: "dodecahedron description goes here.",
      canPurchase: true,
      image: {
        full: "images/pentagon.jpg",
        thumbnail: "images/pentagon_thumbnail.jpg"
      },
      reviews: [
        {
          stars: 5,
          body: "I love this gem",
          author: "jermey@gmail.com"
        },
        {
          stars: 3,
          body: "This product is Ok but not to the par.",
          author: "johndoe@gmail.com"
        }
      ]
    },
    {
      name: "Tetrahedron",
      price: "25.02",
      description: "Tetrahedron description goes here.",
      canPurchase: false,
      image: {
        full: "images/dodecahedron.jpg",
        thumbnail: "images/dodecahedron_thumbnail.jpg"
      }
    },
    {
      name: "Polygon",
      price: "30",
      description: "Polygon description goes here.",
      canPurchase: true,
      image: {
        full: "images/pentagon.jpg",
        thumbnail: "images/pentagon_thumbnail.jpg"
      }
    }
  ]

  app.controller("ReviewController", function($scope) {
    $scope.review = {};

    $scope.addReview = function (product) {
      product.reviews.push($scope.review);
      $scope.review = {};
    };
  });

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

})();
