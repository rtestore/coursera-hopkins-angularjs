(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);
    
SignUpController.$inject = ['MenuService'];

function SignUpController(MenuService) {
  var $ctrl = this;
  $ctrl.valid_item = true;
  var menu_item_preferred = {};
  var user_info = {};    
	

  $ctrl.submit = function() {
     $ctrl.form_completed = true;
      
      var promise = MenuService.validateItemMenu($ctrl.user.menu_number);
      
      promise.then(function (response) {
	     console.log('en submit:', response)
          if (response.status == 200) {
             $ctrl.valid_item = true;
             menu_item_preferred = response.data;  
          }
          else $ctrl.valid_item = false;
      })
      .catch(function (error) {
        console.log(error);
          $ctrl.valid_item = false;
	  });
     
       console.log('en submit - controller; ', $ctrl.valid_item , ' y first name:', $ctrl.user.first_name)  ;
      
      user_info.first_name = $ctrl.user.first_name;
      user_info.last_name = $ctrl.user.last_name;
      user_info.email = $ctrl.user.email;
      user_info.phone = $ctrl.user.phone;
      user_info.item_preferred = menu_item_preferred;
      user_info.user_registered = true;
      
      console.log('en signup controller - before setUserInfo: ', user_info);
      
      MenuService.setUserInfo(user_info);
  };
 
  };

})();
