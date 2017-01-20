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
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
    
  return ddo;
}
   
    
function FoundItemsDirectiveController() {
  var list = this;

}

function NarrowItDownController($scope, MenuSearchService) {
  var list = this;

  list.getMenuItems = function () {
    var searchTerm = $scope.search_term;
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    promise.then(function (response) {
      console.log('la respuesta recibida por el controller es : ' , response.filteredItems , 'cantidad:' , response.filteredItems.length );
      list.filteredItems = response.filteredItems;
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  
  list.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var foundItems = [];  
  var filteredItems = [];

  service.getMatchedMenuItems = function (searchTerm) {

    var response_call = $http({
      method: "GET",
      url: (ApiBasePath),
    })
   .then (function (response) { 
      foundItems = response.data;
      var menu_items = foundItems.menu_items;
      console.log('todos los items: ', menu_items.lenght, menu_items);   

      var i = 0;   
      for (i=0; i<menu_items.length; i++) {
          var elem = menu_items[i];
          if (elem.description.indexOf(searchTerm) != -1 ) {
             filteredItems.push(elem);  
          }
      }   
      console.log('filteredItems: ' , filteredItems) 
      response.filteredItems = filteredItems;
      return response ;

   })
   .catch (function (error) {
      console.log('Error: ', error);
   });
      
   return response_call;
         
 }
  
 service.removeItem = function (itemIndex) {
     filteredItems.splice(itemIndex, 1);
  };

}
    
})();
