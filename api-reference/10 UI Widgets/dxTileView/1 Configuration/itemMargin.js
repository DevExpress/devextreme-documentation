//<!--@Knockout-->
var myViewModel = {
    tiles: [
        { id: 1, heightRatio: 1, widthRatio: 1 },
        { id: 2, heightRatio: 1, widthRatio: 1 },
        { id: 3, heightRatio: 1, widthRatio: 1 },
        { id: 4, heightRatio: 1, widthRatio: 1 },
        { id: 5, heightRatio: 1, widthRatio: 1 },
        { id: 6, heightRatio: 1, widthRatio: 1 },
        { id: 7, heightRatio: 1, widthRatio: 1 },
        { id: 8, heightRatio: 1, widthRatio: 1 },
        { id: 9, heightRatio: 1, widthRatio: 1 },
        { id: 10, heightRatio: 1, widthRatio: 1 },
        { id: 11, heightRatio: 1, widthRatio: 1 },
        { id: 12, heightRatio: 1, widthRatio: 1 },
        { id: 13, heightRatio: 1, widthRatio: 1 },
        { id: 14, heightRatio: 1, widthRatio: 1 },
        { id: 15, heightRatio: 1, widthRatio: 1 }
    ],
    margin: ko.observable(20)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.tiles = [
        { id: 1, heightRatio: 1, widthRatio: 1 },
        { id: 2, heightRatio: 1, widthRatio: 1 },
        { id: 3, heightRatio: 1, widthRatio: 1 },
        { id: 4, heightRatio: 1, widthRatio: 1 },
        { id: 5, heightRatio: 1, widthRatio: 1 },
        { id: 6, heightRatio: 1, widthRatio: 1 },
        { id: 7, heightRatio: 1, widthRatio: 1 },
        { id: 8, heightRatio: 1, widthRatio: 1 },
        { id: 9, heightRatio: 1, widthRatio: 1 },
        { id: 10, heightRatio: 1, widthRatio: 1 },
        { id: 11, heightRatio: 1, widthRatio: 1 },
        { id: 12, heightRatio: 1, widthRatio: 1 },
        { id: 13, heightRatio: 1, widthRatio: 1 },
        { id: 14, heightRatio: 1, widthRatio: 1 },
        { id: 15, heightRatio: 1, widthRatio: 1 }
    ];
    $scope.margin = 20;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myTileView").dxTileView({
    dataSource: [
        { id: 1, heightRatio: 1, widthRatio: 1 },
        { id: 2, heightRatio: 1, widthRatio: 1 },
        { id: 3, heightRatio: 1, widthRatio: 1 },
        { id: 4, heightRatio: 1, widthRatio: 1 },
        { id: 5, heightRatio: 1, widthRatio: 1 },
        { id: 6, heightRatio: 1, widthRatio: 1 },
        { id: 7, heightRatio: 1, widthRatio: 1 },
        { id: 8, heightRatio: 1, widthRatio: 1 },
        { id: 9, heightRatio: 1, widthRatio: 1 },
        { id: 10, heightRatio: 1, widthRatio: 1 },
        { id: 11, heightRatio: 1, widthRatio: 1 },
        { id: 12, heightRatio: 1, widthRatio: 1 },
        { id: 13, heightRatio: 1, widthRatio: 1 },
        { id: 14, heightRatio: 1, widthRatio: 1 },
        { id: 15, heightRatio: 1, widthRatio: 1 }
    ],
    baseItemHeight: 50,
    baseItemWidth: 50,
    height: 250,
    itemMargin: 20,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p>" + itemData.id + "</p>");
        itemElement.addClass("tile");
    }
});
$("#marginSlider").dxSlider({
    min: 0,
    max: 50,
    value: 20,
    onValueChanged: function (e) {
        $("#myTileView").dxTileView("instance").option("itemMargin", e.value);
        $("#marginValue").text(e.value);
    }
});
//<!--/@jQuery-->
