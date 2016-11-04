(function () {
 'use strict';

 angular.module('LunchCheck', [])

 .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {


      $scope.sayMessage = function() {
            var message = countMeals();
            return mesage;
          };


          function countMeals() {

            var numMeals = 0;
            var text = "";
            var num_of_meals = CalculateAmountMeals($scope.lunch_menu_model);

            switch (num_of_meals) {
              case 0:
              text = "Please enter data first";
              break;
              case 1:
              case 2:
              case 3:
              text = "Enjoy!";

              default:
              text = "Too Much!";
            };
          };

          function CalculateAmountMeals(string) {
            var arrayOfMeals = string.split(',');
            var numOfMeals = arrayOfMeals.length;

            return numOfMeals;

          };

 }

});
