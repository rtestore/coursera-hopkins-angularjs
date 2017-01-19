(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");
    
    NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
 
function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html'
  };

  return ddo;
}  

function NarrowItDownController($scope, MenuSearchService) {
  var list = this;

  list.getMenuItems = function () {
    var searchTerm = $scope.search_term;
    alert(searchTerm);
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
          
    console.log('Promise: ', promise);
  }
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var foundItems = '';  
    var response_call = $http({
      method: "GET",
      url: (ApiBasePath),
    })
   .then (function (response) { 
      foundItems = response.data;
             console.log('foundItems: ', foundItems);
      var menu_items = foundItems.menu_items;
      console.log('menu_items', menu_items); 
      var filteredItems = [];    
      var i = 0;   
      for (i=0; i<menu_items.length; i++) {
          var elem = menu_items[i];
          console.log('elem', elem);
          if (elem.description.indexOf(searchTerm) != -1 ) {
             filteredItems.push(elem);  
          }
      }   
      console.log('filteredItems:', filteredItems);
      return filteredItems ;

   })
   .catch (function (error) {
      console.log('Error: ', error);
   })
         
 }
}
    
})();
