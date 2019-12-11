//<!--@Knockout-->
var myViewModel = {
    visible: ko.observable(false),
    togglePopup: function () {
        this.visible(!this.visible());
    },
    positionValues: ["left top", "top", "right top", "right", "right bottom", "bottom", "left bottom", "left", "center"],
    atValue: ko.observable("bottom"),
    myValue: ko.observable("bottom")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.visible = false;
    $scope.togglePopup = function () {
        $scope.visible = !$scope.visible;
    };
    $scope.positionValues = ["left top", "top", "right top", "right", "right bottom", "bottom", "left bottom", "left", "center"];
    $scope.atValue = "bottom";
    $scope.myValue = "bottom";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myPopup").dxPopup({
    height: 120,
    width: 150,
    shading: false,
    showTitle: false,
    closeOnOutsideClick: true,
    position: {
        my: "bottom",
        at: "bottom",
        of: '#targetElement'
    },
    contentTemplate: function (contentElement) {
        contentElement.append("<p>The popup text.</p>");
        var closeButton = $("<div>");
        contentElement.append(closeButton);
        closeButton.dxButton({
            text: "Hide popup",
            onClick: function () {
                $("#myPopup").dxPopup("instance").hide();
            }
        })
    }
});
$("#toggleButton").dxButton({
    text: 'Show popup',
    onClick: function () {
        $("#myPopup").dxPopup("instance").show();
    }
});
var positionValues = ["left top", "top", "right top", "right", "right bottom", "bottom", "left bottom", "left", "center"];
$("#mySelector").dxSelectBox({
    items: positionValues,
    value: "bottom",
    onValueChanged: function (e) {
        $("#myPopup").dxPopup("instance").option("position.my", e.value);
    }
});
$("#atSelector").dxSelectBox({
    items: positionValues,
    value: "bottom",
    onValueChanged: function (e) {
        $("#myPopup").dxPopup("instance").option("position.at", e.value);
    }
});
//<!--/@jQuery-->