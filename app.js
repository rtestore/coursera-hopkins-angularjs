(function () {
 'use strict';

 angular.module('LunchCheck', [])
 .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

      $scope.countMeals =  function () {
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
              break;

              default:
                text = "Too Much!";
            };

              $scope.message = text;

          };

          function CalculateAmountMeals(string) {
            var arrayOfMeals = [];
            var numOfMeals   = 0;


            if (!string)
              numOfMeals = 0;
            else {
               arrayOfMeals = string.split(',');
               numOfMeals = arrayOfMeals.length;
             };

            return numOfMeals;

          };

 }

})();
