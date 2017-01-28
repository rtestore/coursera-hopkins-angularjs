(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// Version with resolving to 1 item based on $stateParams in route config
ItemsController.$inject = ['$stateParams', 'meal'];
function ItemsController($stateParams, meal) {
  var dishes = this;
  dishes.meal = meal;  
    
  console.log('dishes.meal: ', dishes.meal);

    
}

})();
