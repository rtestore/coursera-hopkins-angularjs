(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

function SignUpController() {
  var $ctrl = this;
  $ctrl.valid_item = false; 
	
	
	
  SignUpController.$inject = ['MenuDataService', MenuDataService];	
  $ctrl.validateItemMenu = function(item) {
	  var promise = MenuDataService.validateItemMenu(item);
      promise.then(function (response) {
		  console.log('en controller:', response);
	  return response;
      });
	  };
	
  $ctrl.submit = function() {
        $ctrl.form_completed = true;
	    var item_valid = validateItemMenu($ctrl.user.menu_number); 
  };


}
})();
