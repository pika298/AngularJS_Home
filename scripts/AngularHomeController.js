angular
	.module('AngularHome')
	.controller('AngularHomeController', function($scope, AngularHomeFactory) {

		$scope.homes;

		AngularHomeFactory.getAngularHome().success(function(data) {
			$scope.homes = data;
		}).error(function(error) {
			console.log(error);
		}); 

	});