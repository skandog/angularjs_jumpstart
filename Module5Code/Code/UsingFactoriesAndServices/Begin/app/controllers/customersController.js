(function () {
  var CustomersController = function ($scope, customersService) {
    $scope.sortBy = "name";
    $scope.reverse = false;
    $scope.customers = [];

    console.log("what the bloody helll");
    function init() {
      $scope.customers = customersService.getCustomers();
    }

    init();

    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  // CustomersController.$inject = ["$scope", "customersService"];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();
