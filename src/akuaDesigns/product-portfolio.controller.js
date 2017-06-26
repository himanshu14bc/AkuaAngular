(function () {
'use strict';

angular.module('AkuaDesign')
.controller('ProductsController', ProductsController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
ProductsController.$inject = ['$scope','$state'];
function ProductsController($scope,$state) {
  console.log("IN PRODUCTS");
  var prc = this;

}

})();
