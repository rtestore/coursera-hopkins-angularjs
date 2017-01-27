(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('ApiBasePath2', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

MenuDataService.$inject = ['$http', 'ApiBasePath', 'ApiBasePath2'];
function MenuDataService($http, ApiBasePath, ApiBasePath2) {
  var service = this;

  service.getAllCategories = function () {

    var response_call = $http({
      method: "GET",
      url: (ApiBasePath),
    })
   .then (function (response) { 

      return response.data ;

   })
   .catch (function (error) {
      console.log('Error: ', error);
   });
      
   return response_call;
         
  };
  
/*  service.getItemsForCategory() = function(categoryShortName) {
     
    var response_call = $http({
      method: "GET",
      url: (ApiBasePath2+categoryShortName),
    })
   .then (function (response) { 

      return response.data ;

   })
   .catch (function (error) {
      console.log('Error: ', error);
   });
      
   return response_call;
      
  };*/

 } 


})();
