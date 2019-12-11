//<!--@Knockout-->
var myViewModel = {
    valueChanged: function (e) {
        DevExpress.ui.notify("New widget value is '" + e.value + "'");
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.valueChanged = function (e) {
        DevExpress.ui.notify("New widget value is '" + e.value + "'");
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTextBox").dxTextBox({
    placeholder: 'Type text here',
    onValueChanged: function (e) {
        DevExpress.ui.notify("New widget value is '" + e.value + "'");
    }
});
//<!--/@jQuery-->
