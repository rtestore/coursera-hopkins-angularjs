(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', 'items'];
function ItemDetailController($stateParams, items) {
  var itemDetail = this;
  itemDetail.dish = [];    
  var items = items;
  var i = 0;
  
  for (i=0, i<items.length; i++) {
     itemDetail.dish[i].short_name  = items.short_name;
     itemDetail.dish[i].name  = items.name;
     itemDetail.dish[i].description  = items.description;
     itemDetail.dish[i].price_large  = items.price_large;
}

})();
