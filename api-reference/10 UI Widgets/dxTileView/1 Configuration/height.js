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
    tileViewHeight: ko.observable(200)
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
    $scope.tileViewHeight = 200;
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
    height: 200,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p>" + itemData.id + "</p>");
        itemElement.addClass("tile");
    }
});
$("#heightSlider").dxSlider({
    min: 50,
    max: 350,
    value: 200,
    onValueChanged: function (e) {
        $("#myTileView").dxTileView("instance").option("height", e.value);
        $("#heightValue").text(e.value);
    }
});
//<!--/@jQuery-->
