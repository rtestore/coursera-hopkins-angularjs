(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);
    
UserInfoController.$inject = ['MenuService'];

function UserInfoController(MenuService) {
  var userInfo = this;
  var user_info = MenuService.getUserInfo();   
      
  userInfo.user_info = user_info;
  console.log('user info:', userInfo.user_info) ;
  };

})();
