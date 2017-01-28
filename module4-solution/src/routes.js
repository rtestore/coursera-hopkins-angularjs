(function () {
'use strict';

angular.module('MenuApp')
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
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-menuapp.template.html',
    controller: 'MainCategoriesListController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsController as dishes',
    resolve: {
      meal: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                  console.log('en routes, param; ',$stateParams.categoryShortName ) ;
        console.log('en routes; ',MenuDataService.getItemsForCategory($stateParams.categoryShortName) ) ; 
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }

  })

}


})();
