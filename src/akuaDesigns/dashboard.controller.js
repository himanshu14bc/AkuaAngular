(function () {
'use strict';

angular.module('AkuaDesign')
.controller('DashboardController', DashboardController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
DashboardController.$inject = ['$scope','$state'];
function DashboardController($scope,$state) {
  console.log("just did it");
  var dsc = this;
  // dsc.toProducts= function () {
  //   console.log("in state");
  //   $state.go('productsPortfolio');
  //   console.log("in state");
  // }

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
