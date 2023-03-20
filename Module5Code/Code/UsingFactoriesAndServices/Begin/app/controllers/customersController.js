(function () {
  var CustomersController = function ($scope) {
    $scope.sortBy = "name";
    $scope.reverse = false;

    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };

    $scope.customers = null;
  };

  CustomersController.$inject = ["$scope"];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();
