angular
	.module('AngularHome')
	.controller('AngularHomeController', function($scope, AngularHomeFactory) {

		$scope.homes;

		$scope.priceInfo = {
			min: 0,
			max: 1000000
		}

		$scope.newListing = {};

		$scope.addHome = function(newListing) {
			newListing.image = 'default';
			$scope.homes.push(newListing);
			$scope.newListing = {};
		}

		$scope.editHome = function(home) {
			$scope.editListing = true;
			$scope.existingListing = home;
		}

		$scope.saveHomeEdit = function() {
			$scope.existingListing = {};
			$scope.editListing = false;
		}

		AngularHomeFactory.getAngularHome().success(function(data) {
			$scope.homes = data;
		}).error(function(error) {
			console.log(error);
		}); 

	});