//<!--@Knockout-->
var myViewModel = {
    colorValue: ko.observable("#FF0000"),
    editorOpened: function () {
        DevExpress.ui.notify("Editor is opened", "success", 1000);
    },
    editorClosed: function () {
        DevExpress.ui.notify("Editor is closed", "error", 1000);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.colorValue = "#FF0000";
    $scope.editorOpened = function () {
        DevExpress.ui.notify("Editor is opened", "success", 1000);
    };
    $scope.editorClosed = function () {
        DevExpress.ui.notify("Editor is closed", "error", 1000);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myColorBox").dxColorBox({
    value: "#FF0000",
    onValueChanged: function (e) {
        $("#coloredText").css("color", e.value);
    },
    onOpened: function () {
        DevExpress.ui.notify("Editor is opened", "success", 1000);
    },
    onClosed: function () {
        DevExpress.ui.notify("Editor is closed", "error", 1000);
    }
});
$("#coloredText").css("color", $("#myColorBox").dxColorBox("instance").option("value"));
//<!--/@jQuery-->