(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    

function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;
    
  list1.items = ShoppingListCheckOffService.getItemsToBuy();

  list1.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

function AlreadyBoughtController(ShoppingListCheckOffService) {
    
  var list2 = this;
    
  list2.items = ShoppingListCheckOffService.getItemsBought();

  list2.addItem = function () {
    ShoppingListCheckOffService.addItem(list2.itemName, list2.itemQuantity);
  };
}    


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var list1 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Honey",
    quantity: "2"
  } 
  ];
    
  var list2 = [];

  service.addItem = function (obj) {
    list2.push(obj);
  };

  service.removeItem = function (itemIndex) {
    var obj = list1[itemIndex]; 
    list1.splice(itemIndex, 1);
    service.addItem(obj);  
  };

  service.getItemsToBuy = function() {
        return list1;
  };
    
  service.getItemsBought = function() {
        return list2;
  };

}
    
})();