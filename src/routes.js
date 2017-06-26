(function () {
'use strict';

angular.module('AkuaDesign')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/akuaDesigns/templates/dashboard.html',
      controller: 'DashboardController as dsc',
    })

  // Premade list page
  .state('productsPortfolio', {
    cache: false,
    url: '/product-portfolio',
    templateUrl: 'src/akuaDesigns/templates/product-portfolio.html',
    controller: 'ProductsController as prc',
  //  controller: 'MainShoppingListController as mainList',
    // resolve: {
    //   items: ['ShoppingListService', function (ShoppingListService) {
    //     return ShoppingListService.getItems();
    //   }]
    // }
  });
}

})();
