//<!--@Knockout-->
var types = ['info', 'warning', 'error', 'success'];
var viewModel = {
    notificationTypes: types,
    currentType: ko.observable(types[0]),
    showNotification: function () {
        DevExpress.ui.notify('Notification message', this.currentType, 3000);
    }
};
ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.notificationTypes = ['info', 'warning', 'error', 'success'];
    $scope.currentType = $scope.notificationTypes[0];
    $scope.showNotification = function () {
        DevExpress.ui.notify('Notification message', $scope.currentType, 3000);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#button").dxButton({
        text: 'Show notification',
        onClick: function () {
            DevExpress.ui.notify('Notification message', $("#lookup").dxLookup("instance").option("value"), 3000);
        }
    });
    $("#lookup").dxLookup({
        dataSource: ['info', 'warning', 'error', 'success'],
        value: 'info'
    });
});
//<!--/@jQuery-->