//<!--@Knockout-->
var myViewModel = {
    visible: ko.observable(false),
    colors: ["red", "green", "blue"],
    currentColor: ko.observable("red"),
    positionValues: ["bottom", "top", "left", "right"],
    currentPosition: ko.observable("bottom"),
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
    $scope.positionValues = ["bottom", "top", "left", "right"];
    $scope.currentPosition = "bottom";
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
    width: 100,
    target: '.target',
    position: "bottom",
    contentTemplate: function (contentElement) {
        var list = $("<div>");
        contentElement.append(list);
        list.dxList({
            dataSource: ["red", "green", "blue"],
            onItemClick: function (e) {
                $(".target").css("background-color", e.itemData);
                $("#myPopover").dxPopover("instance").hide();
            }
        })
    }
});
$("#targetElement").click(function(){
    $("#myPopover").dxPopover("instance").show();
});
$("#positionSelector").dxSelectBox({
    items: ["bottom", "top", "left", "right"],
    value: "bottom",
    onValueChanged: function (e) {
        $("#myPopover").dxPopover("instance").option("position", e.value);
    }
});
//<!--/@jQuery-->