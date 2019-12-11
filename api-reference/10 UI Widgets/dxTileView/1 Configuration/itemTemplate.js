//<!--@Knockout-->
var myViewModel = {
    tileViewDataSource: new DevExpress.data.DataSource({
        store: [],
        map: function (dataItem) {
            dataItem.imagePath = "/Content/images/doc/16_1/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
            return dataItem;
        }
    })
}
ko.applyBindings(myViewModel);
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.tileViewDataSource.store().insert(data[i]);
    }
    myViewModel.tileViewDataSource.load();;
}, "json");
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.tileViewDataSource = new DevExpress.data.DataSource({
        store: [],
        map: function (dataItem) {
            dataItem.imagePath = "/Content/images/doc/16_1/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
            return dataItem;
        }
    });
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.tileViewDataSource.store().insert(data[i]);
        }
        $scope.tileViewDataSource.load();;
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var tileViewDataSource = new DevExpress.data.DataSource({
    store: [],
    map: function (dataItem) {
        dataItem.imagePath = "/Content/images/doc/16_1/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
        return dataItem;
    }
});
$("#myTileView").dxTileView({
    dataSource: tileViewDataSource,
    itemMargin: 10,
    baseItemHeight: 150,
    baseItemWidth: 200,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.addClass("tile");
        var leftElement = $("<div class='inlineElement'>");
        leftElement.append("<img src='" + itemData.imagePath + "'/>");
        itemElement.append(leftElement);
        var rightElement = $("<div class='inlineElement'>");
        rightElement.append("<b style='font-size: larger;'>" + itemData.name + "</b>");
        itemElement.append(rightElement);
        itemElement.append("<p>&nbsp;</p>");
        itemElement.append("<p>Area: <i>" + itemData.area + "</i> km2</p>");
        itemElement.append("<p>Population: <i>" + itemData.population + "</i></p>");
        itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        tileViewDataSource.store().insert(data[i]);
    }
    tileViewDataSource.load();;
}, "json");
//<!--/@jQuery-->