//<!--@Knockout-->
var myViewModel = {
    visible: ko.observable(false),
    colors: ["red", "green", "blue"],
    currentColor: ko.observable("red"),
    chooseColor: function (e) {
        this.currentColor(e.itemData);
    },
    togglePopover: function () {
        this.visible(!this.visible());
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
    $scope.chooseColor = function (e) {
        $scope.currentColor = e.itemData;
    };
    $scope.togglePopover = function () {
        $scope.visible = !$scope.visible;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myPopover").dxPopover({
    width: 200,
    height: 'auto',
    target: '#toggleButton',
    contentTemplate: function (contentElement) {
        var list = $("<div>");
        contentElement.append(list);
        list.dxList({
            dataSource: ["red", "green", "blue"],
            onItemClick: function (e) {
                $(".col-marker").css("background-color", e.itemData);
            }
        });
        contentElement.append("<div style='display: inline-block;'>Selected color:</div> ");
        contentElement.append("<div class='col-marker' style='background-color: red;'>&nbsp;</div>");
    }
});
$("#toggleButton").dxButton({
    text: 'Choose color',
    onClick: function () {
        $("#myPopover").dxPopover("instance").show();
    }
});
//<!--/@jQuery-->