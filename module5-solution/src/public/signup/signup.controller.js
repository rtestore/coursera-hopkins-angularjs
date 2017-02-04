(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

//SignUpController.$inject = ['menuItem'];
function SignUpController() {
  var $ctrl = this;

  $ctrl.submit = function() {
        $ctrl.form_completed = true;
        console.log('entra al submit');
  };

//  $ctrl.menuItem = menuItem;
	
/*	var $ctrl.user = {};
	var user = $ctrl.user;
	user.first_name = ""; 
	user.last_name = "";
	user.email = "";
	user.phone = "";
	user.menu_number = "";*/
	
}

})();
