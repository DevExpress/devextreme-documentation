//<!--@Knockout-->
var myViewModel = {
    visible: ko.observable(false),
    colors: ["red", "green", "blue"],
    currentColor: ko.observable("red"),
    targets: ["#button", "#square"],
    currentTarget: ko.observable("#button"),
    togglePopover: function () {
        this.visible(!this.visible());
    },
    chooseColor: function (e) {
        this.currentColor(e.itemData);
        this.togglePopover();
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.visible = false;
    $scope.colors = ["red", "green", "blue"];
    $scope.currentColor = "red";
    $scope.targets = ["#button", "#square"];
    $scope.currentTarget = "#button";
    $scope.togglePopover = function () {
        $scope.visible = !$scope.visible;
    };
    $scope.chooseColor = function (e) {
        $scope.currentColor = e.itemData;
        $scope.togglePopover();
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myPopover").dxPopover({
    width: 200,
    target: '#button',
    contentTemplate: function (contentElement) {
        var list = $("<div>");
        contentElement.append(list);
        list.dxList({
            dataSource: ["red", "green", "blue"],
            onItemClick: function (e) {
                $("#square").css("background-color", e.itemData);
                $("#myPopover").dxPopover("instance").hide();
            }
        })
    }
});
$("#button").dxButton({
    text: "Choose square color",
    onClick: function () {
        $("#myPopover").dxPopover("instance").show();
    }
});
$("#targetSelector").dxSelectBox({
    items: ["#button", "#square"],
    value: "#button",
    onValueChanged: function (e) {
        $("#myPopover").dxPopover("instance").option("target", e.value);
    }
});
//<!--/@jQuery-->