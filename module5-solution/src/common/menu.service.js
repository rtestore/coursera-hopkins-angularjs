(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var user_info = {'user_registered': false};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
	
  service.validateItemMenu = function(item) {
	  return $http.get(ApiPath + '/menu_items/'+item+'.json').then(function (response) {
		  console.log('response: ' , response);
          return response;
	  });

  }
  
  service.setUserInfo = function(user_information) { 
      user_info = user_information;
      console.log('en setUserInfo:', user_info);
      
  };
    
  service.getUserInfo = function() { 
      return user_info;
      
  };

}

})();
