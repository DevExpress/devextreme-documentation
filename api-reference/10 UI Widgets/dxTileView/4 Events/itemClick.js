var flag = false;
//<!--@Knockout-->
var myViewModel = {
    tileViewDataSource: new DevExpress.data.DataSource({
        store: [],
        map: function (dataItem) {
            dataItem.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
            return dataItem;
        }
    }),
    tileViewInstance: {},
    initializedHandler: function (e) {
        myViewModel.tileViewInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.tileViewInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            myViewModel.tileViewInstance.off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
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
            dataItem.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
            return dataItem;
        }
    });
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++)
            $scope.tileViewDataSource.store().insert(data[i]);
        $scope.tileViewDataSource.load();
    }, "json");
    $scope.tileViewInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.tileViewInstance = e.component;
    }
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.tileViewInstance.on(
                "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is clicked", "success", 1500); }
            );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $scope.tileViewInstance.off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var tileViewDataSource = new DevExpress.data.DataSource({
    store: [],
    map: function (dataItem) {
        dataItem.imagePath = "/Content/images/doc/16_2/PhoneJS/flags/" + dataItem.name.replace(" ", "") + ".gif";
        return dataItem;
    }
});
$("#myTileView").dxTileView({
    dataSource: tileViewDataSource,
    itemMargin: 20,
    baseItemHeight: 130,
    baseItemWidth: 180,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.addClass("tile");
        itemElement.append('<p style="font-size:larger;"><b>' + itemData.name + '</b></p>');
        itemElement.append('<img style="margin: 5px;" src="' + itemData.imagePath + '"/>');
        itemElement.append('<p>Capital: <i>' + itemData.capital + '</i></p>');
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++)
        tileViewDataSource.store().insert(data[i]);
    tileViewDataSource.load();
}, "json");
$("#myButton").dxButton({
    text: 'Subscribe to ItemClick event',
    onClick: function (e) {
        if (flag === false) {
            $("#myTileView").dxTileView("instance")
                .on(
                    "itemClick", function (e) { DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is clicked", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from ItemClick event");
            flag = true;
        } else {
            $("#myTileView").dxTileView("instance").off("itemClick");
            e.component.option("text", "Subscribe to ItemClick event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->
