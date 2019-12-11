//<!--@Knockout-->
var myViewModel = {
    loadHint: ko.observable("Data is loading...")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.loadHint = "Data is loading...";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myLoadIndicator").dxLoadIndicator({
    visible: true,
    hint: "Data is loading..."
});
$("#hintField").dxTextBox({
    value: "Data is loading...",
    onClick: function () {
        $("#myLoadIndicator").dxLoadIndicator("instance").option("hint", e.value);
    }
});
//<!--/@jQuery-->
