(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);
    
SignUpController.$inject = ['MenuService'];

function SignUpController(MenuService) {
  var $ctrl = this;
  $ctrl.valid_item = true;
	
		
/*  $ctrl.validateItemMenu = function(item) {
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
  };*/
	
  $ctrl.submit = function() {
     $ctrl.form_completed = true;
      
      var promise = MenuService.validateItemMenu($ctrl.user.menu_number);
      
      promise.then(function (response) {
	     console.log('en submit:', response)
          if (response.status == 200) {
             $ctrl.valid_item = true;
          }
          else $ctrl.valid_item = false;
      })
      .catch(function (error) {
        console.log(error);
          $ctrl.valid_item = false;
	  });
     
       console.log('en submit - controller; ', $ctrl.valid_item)  ;
  };
 
  };

})();
