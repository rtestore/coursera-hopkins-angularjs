(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    

function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;
    
  list1.items = ShoppingListCheckOffService.getItems(1);
    
  $scope.list1 = list1;    

  list1.itemName = "";
  list1.itemQuantity = "";

  list1.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

function AlreadyBoughtController(ShoppingListCheckOffService) {
    
  var list2 = this;
    
  $scope.list2 = list2;

  list2.items = ShoppingListCheckOffService.getItems(2);

  list2.itemName = "";
  list2.itemQuantity = "";

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
  }   
  ];
    
  var list2 = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    list2.push(item);
  };

  service.removeItem = function (itemIndex) {
    var obj = items[itemIndex]; 
    list1.splice(itemIndex, 1);
    service.addItem(obj.name, obj.quantity);  
  };

  service.getItems = function (list_num) {
    if (list_num == 1) {
        return list1;
    }   
    else   {
        return list2;
    }
  };
}

})();