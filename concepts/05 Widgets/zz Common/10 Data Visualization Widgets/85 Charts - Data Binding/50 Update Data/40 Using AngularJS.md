In order to update data in your widget when using AngularJS, provide two-way binding between the **dataSource** option and the corresponding field of the <a href="https://docs.angularjs.org/guide/scope" target="_blank">$scope</a> object. For this purpose, add the **bindingOptions** field to the widget configuration object. This field is assigned an object containing options that require two-way binding. In your case, the **dataSource** is such an option. In the following code snippet, the *dataSource* **$scope** field is used to provide data for **Chart**.

	<!--HTML--><div ng-controller="myController">
		<div dx-chart="{
			...
			bindingOptions: {
				dataSource: 'dataSource'
			}
		}"></div>
	</div>

	<!--JavaScript-->var myApp = angular.module('myApp', ['dx']);
	myApp.controller('myController', function ($scope) {
		$scope.dataSource = dataArray;
	});

[note]When specifying options within the **bindingOptions** object, you must use the name of the corresponding **$scope** object field instead of the field itself.

In order to keep data in your widget up-to-date after the data source is changed, you need to wrap actions that modify the data source in the following construction.

	<!--JavaScript-->$scope.$apply(function () {
		// perform actions on the data source here
	});

Obviously, this code must be used inside the <a href="https://docs.angularjs.org/guide/controller" target="_blank">controller</a> constructor. The resulting implementation of a dynamically updating data source for an abstract application is given below. With this code, your widget will be refreshed automatically after the data source is changed.

	<!--JavaScript-->var myApp = angular.module('myApp', ['dx']);
	myApp.controller('myController', function ($scope) {
		$scope.dataSource = dataArray;
		$scope.dataChangingFunction = function () {
			$scope.$apply(function () {
				// perform actions on the data source here
			});
		}
	});