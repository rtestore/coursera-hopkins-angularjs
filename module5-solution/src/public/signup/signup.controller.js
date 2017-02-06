(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);
    
SignUpController.$inject = ['MenuService'];

function SignUpController(MenuService) {
  var $ctrl = this;
	
		
  $ctrl.validateItemMenu = function(item) {
      var item_valid = false; 
      var promise = MenuService.validateItemMenu(item);
      promise.then(function (response) {
	     console.log('en controller:', response)
          if (response.status == 200) {
             return true;
          }
          else return false;
      })
      .catch(function (error) {
        console.log(error);
        return false;
	  });
  };
	
  $ctrl.submit = function() {
     $ctrl.form_completed = true;
 
	 $ctrl.valid_item = $ctrl.validateItemMenu($ctrl.user.menu_number); 
     console.log('en submit - controller; ', $ctrl.valid_item)  ;
    };
  };

})();
