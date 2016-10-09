angular
	.module('AngularHome')
	.factory('AngularHomeFactory', function($http) {

		function getAngularHome() {
			return $http.get('data/data.json');
		}

		return {
			getAngularHome: getAngularHome
		}
	});