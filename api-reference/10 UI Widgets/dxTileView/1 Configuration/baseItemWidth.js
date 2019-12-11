//<!--@Knockout-->
var myViewModel = {
    tiles: [
        { id: 1, heightRatio: 2, widthRatio: 3 },
        { id: 2, heightRatio: 2, widthRatio: 2 },
        { id: 3, heightRatio: 3, widthRatio: 3 },
        { id: 4, heightRatio: 2, widthRatio: 2 },
        { id: 5, heightRatio: 4, widthRatio: 3 },
        { id: 6, heightRatio: 2, widthRatio: 3 },
        { id: 7, heightRatio: 3, widthRatio: 2 },
        { id: 8, heightRatio: 3, widthRatio: 2 },
        { id: 9, heightRatio: 2, widthRatio: 4 },
        { id: 10, heightRatio: 4, widthRatio: 3 },
        { id: 11, heightRatio: 2, widthRatio: 2 },
        { id: 12, heightRatio: 3, widthRatio: 2 }
    ],
    baseHeight: ko.observable(20),
    baseWidth: ko.observable(20)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.tiles = [
        { id: 1, heightRatio: 2, widthRatio: 3 },
        { id: 2, heightRatio: 2, widthRatio: 2 },
        { id: 3, heightRatio: 3, widthRatio: 3 },
        { id: 4, heightRatio: 2, widthRatio: 2 },
        { id: 5, heightRatio: 4, widthRatio: 3 },
        { id: 6, heightRatio: 2, widthRatio: 3 },
        { id: 7, heightRatio: 3, widthRatio: 2 },
        { id: 8, heightRatio: 3, widthRatio: 2 },
        { id: 9, heightRatio: 2, widthRatio: 4 },
        { id: 10, heightRatio: 4, widthRatio: 3 },
        { id: 11, heightRatio: 2, widthRatio: 2 },
        { id: 12, heightRatio: 3, widthRatio: 2 }
    ];
    $scope.baseHeight = 20;
    $scope.baseWidth = 20;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTileView").dxTileView({
    dataSource: [
        { id: 1, heightRatio: 2, widthRatio: 3 },
        { id: 2, heightRatio: 2, widthRatio: 2 },
        { id: 3, heightRatio: 3, widthRatio: 3 },
        { id: 4, heightRatio: 2, widthRatio: 2 },
        { id: 5, heightRatio: 4, widthRatio: 3 },
        { id: 6, heightRatio: 2, widthRatio: 3 },
        { id: 7, heightRatio: 3, widthRatio: 2 },
        { id: 8, heightRatio: 3, widthRatio: 2 },
        { id: 9, heightRatio: 2, widthRatio: 4 },
        { id: 10, heightRatio: 4, widthRatio: 3 },
        { id: 11, heightRatio: 2, widthRatio: 2 },
        { id: 12, heightRatio: 3, widthRatio: 2 }
    ],
    height: 300,
    baseItemHeight: 20,
    baseItemWidth: 20,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p>" + itemData.id + "</p>");
        itemElement.addClass("tile");
    }
});
$("#heightSelector").dxSlider({
    min: 10,
    max: 30,
    value: 20,
    onValueChanged: function (e) {
        $("#myTileView").dxTileView("instance").option("baseItemHeight", e.value);
        $("#heightValue").text(e.value);
    }
});
$("#widthSelector").dxSlider({
    min: 10,
    max: 30,
    value: 20,
    onValueChanged: function (e) {
        $("#myTileView").dxTileView("instance").option("baseItemWidth", e.value);
        $("#widthValue").text(e.value);
    }
});
//<!--/@jQuery-->
