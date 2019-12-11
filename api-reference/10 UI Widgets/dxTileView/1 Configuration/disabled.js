//<!--@Knockout-->
var myViewModel = {
    tileViewDataSource: new DevExpress.data.DataSource({
        store: [],
        map: function (dataItem) {
            dataItem.imagePath = "/Content/images/doc/16_1/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
            return dataItem;
        }
    }),
    tileViewDisabled: ko.observable(false)
}
ko.applyBindings(myViewModel);
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++)
        myViewModel.tileViewDataSource.store().insert(data[i]);
    myViewModel.tileViewDataSource.load();
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
    $scope.tileViewDisabled = false;
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++)
            $scope.tileViewDataSource.store().insert(data[i]);
        $scope.tileViewDataSource.load();
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
    itemMargin: 20,
    baseItemHeight: 130,
    baseItemWidth: 180,
    height: '85%',
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.addClass("tile");
        itemElement.append('<p style="font-size:larger;"><b>' + itemData.name + '</b></p>');
        itemElement.append('<img style="margin: 5px;" src="' + itemData.imagePath + '"/>');
        itemElement.append('<p>Capital: <i>' + itemData.capital + '</i></p>');
    }
});
$("#disabledSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myTileView").dxTileView("instance").option("disabled", e.value);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++)
        tileViewDataSource.store().insert(data[i]);
    tileViewDataSource.load();
}, "json");
//<!--/@jQuery-->
