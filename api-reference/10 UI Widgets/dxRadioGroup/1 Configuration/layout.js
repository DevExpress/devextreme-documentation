//<!--@Knockout-->
var myViewModel = {
    colors: [
        { text: "red", value: "#FF0000" },
        { text: "green", value: "#00AA00" },
        { text: "blue", value: "#0000FF" }
    ],
    currentColor: ko.observable("#FF0000"),
    layoutValue: ko.observable("vertical"),
    changeColor: function (e) {
        this.currentColor(e.value);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.colors = [
        { text: "red", value: "#FF0000" },
        { text: "green", value: "#00AA00" },
        { text: "blue", value: "#0000FF" }
    ];
    $scope.currentColor = $scope.colors[0].value;
    $scope.layoutValue = "vertical";
    $scope.changeColor = function (e) {
        $scope.currentColor = e.value;
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myRadioGroup").dxRadioGroup({
    items: [
        { text: "red", value: "#FF0000" },
        { text: "green", value: "#00AA00" },
        { text: "blue", value: "#0000FF" }
    ],
    value: '#FF0000',
    layout: 'vertical',
    valueExpr: 'value',
    onValueChanged: function (e) {
        $("#radioGroupWrapper").css({ 'border-color': e.value });
    }
});
$("#layoutSelector").dxSelectBox({
    items: ['vertical', 'horizontal'],
    value: 'vertical',
    onValueChanged: function (e) {
        $("#myRadioGroup").dxRadioGroup("instance").option("layout", e.value);
    }
});
//<!--/@jQuery-->
