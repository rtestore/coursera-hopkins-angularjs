(function () {
"use strict";

angular.module('public')
.controller('MenuSignUpController', MenuSignUpController);

MenuSignUpController.$inject = ['menuItem'];
function MenuSignUpController(menuItem) {
  var $ctrl = this;
  $ctrl.menuItem = menuItem;
}

})();
