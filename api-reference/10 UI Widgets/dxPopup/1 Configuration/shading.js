//<!--@Knockout-->
var myViewModel = {
    visible: ko.observable(false),
    shadeScreen: ko.observable(true),
    togglePopup: function () {
        this.visible(!this.visible());
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.visible = false;
    $scope.shadeScreen = true;
    $scope.togglePopup = function () {
        $scope.visible = !$scope.visible;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myPopup").dxPopup({
    height: 200,
    title: "My Popup",
    shading: true,
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
$("#shadingSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#myPopup").dxPopup("instance").option("shading", e.value);
    }
});
//<!--/@jQuery-->