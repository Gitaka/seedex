
(function() {

	'use strict';

	var app = angular.module('seedex', [
		'ngRoute',
	]);

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
           .when('/', {
				templateUrl: '../views/main.html'
			})
           .when('/signin', {
				templateUrl: '../views/signin.html'
			})
			.when('/signup', {
				templateUrl: '../views/register.html'
			})
			.otherwise({
				templateUrl: '../views/404.html'
			});
	}]);

	
})();