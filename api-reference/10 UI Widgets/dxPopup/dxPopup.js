//<!--@Knockout-->
var myViewModel = {
    popupTitle: "My popup",
    buttonVisible: ko.observable(true),
    popupVisible: ko.observable(false),
    showPopup: function () {
        this.popupVisible(true);
    },
    hidePopup: function () {
        this.popupVisible(false);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.popupTitle = "My popup";
    $scope.buttonVisible = true;
    $scope.popupVisible = false;
    $scope.showPopup = function () {
        $scope.popupVisible = true;
    };
    $scope.hidePopup = function () {
        $scope.popupVisible = false;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myPopup").dxPopup({
    fullScreen: true,
    titleTemplate: function (titleElement) {
        titleElement.append("<h1>My popup</h1>");
        var showButtonCheckBox = $("<div>");
        showButtonCheckBox.dxCheckBox({
            text: 'Show "Hide popup" button',
            value: true,
            onValueChanged: function (e) {
                $("#hideButton").dxButton("instance").option("visible", e.value);
            }
        });
        titleElement.append(showButtonCheckBox);
    },
    contentTemplate: function (contentElement) {
        contentElement.append("<p>The popup content.</p>");
        var hideButton = $("<div id='hideButton'>").dxButton({
            text: "Hide popup",
            onClick: function () {
                $("#myPopup").dxPopup("instance").hide();
            }
        });
        contentElement.append(hideButton);
        
    }
});
$("#showButton").dxButton({
    text: 'Show popup',
    onClick: function () {
        $("#myPopup").dxPopup("instance").show();
    }
});
//<!--/@jQuery-->