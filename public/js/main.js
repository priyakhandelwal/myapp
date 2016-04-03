(function(){
  var app = angular.module('store', ['store-directives']);

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

})();
