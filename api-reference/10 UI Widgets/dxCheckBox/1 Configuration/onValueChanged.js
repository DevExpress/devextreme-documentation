//<!--@Knockout-->
var myViewModel = {
    valueChanged: function (e) {
        DevExpress.ui.notify("New widget value is \"" + e.value + "\"", "success", 1500);
    }
};
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.valueChanged = function (e) {
        DevExpress.ui.notify("New widget value is \"" + e.value + "\"", "success", 1500);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myCheckBox").dxCheckBox({
    text: "Check me",
    onValueChanged: function (e) {
        DevExpress.ui.notify("New widget value is \"" + e.value + "\"", "success", 1500);
    }
});
//<!--/@jQuery-->
