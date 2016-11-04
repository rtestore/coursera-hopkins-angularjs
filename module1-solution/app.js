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
                $scope.message_color = 'red';
                $scope.border_color = 'red';
                break;
              case 1:
              case 2:
              case 3:
                text = "Enjoy!";
                $scope.message_color = 'green';
                $scope.border_color = 'green';
              break;

              default:
                text = "Too Much!";
                $scope.message_color = 'green';
                $scope.border_color = 'green';
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
               var arrayCount = arrayOfMeals.length;
               var i = 0;
               for (i = 0; i < arrayCount; i++) {
                   if (arrayOfMeals[i] != '' && arrayOfMeals[i]!= ' ' )
                     numOfMeals += 1;
               }
             };
            return numOfMeals;
          };

     }

})();
