(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/menuapp/templates/categorieslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
