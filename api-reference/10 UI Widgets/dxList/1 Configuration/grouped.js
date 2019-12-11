//<!--@Knockout-->
var myViewModel = {
    listDataSource: new DevExpress.data.DataSource({
        store: [],
        group: function (dataItem) {
            return dataItem.name.charAt(0);
        }
    }),
    groupedValueChanged: function (e) {
        var myList = $("#myList").dxList("instance");
        myList.beginUpdate();
        if (e.value)
            this.listDataSource.group(function (dataItem) {
                return dataItem.name.charAt(0);
            });
        else
            this.listDataSource.group(null);
        myList.option("grouped", e.value);
        this.listDataSource.load().done(function () {
            myList.endUpdate();
        });
    }
}
ko.applyBindings(myViewModel);
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.listDataSource.store().insert(data[i]);
    }
    myViewModel.listDataSource.load();
}, "json");
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.listDataSource = new DevExpress.data.DataSource({
        store: [],
        group: function (dataItem) {
            return dataItem.name.charAt(0);
        }
    });
    $scope.groupedValueChanged = function (e) {
        var myList = $("#myList").dxList("instance");
        myList.beginUpdate();
        if (e.value)
            $scope.listDataSource.group(function (dataItem) {
                return dataItem.name.charAt(0);
            });
        else
            $scope.listDataSource.group(null);
        myList.option("grouped", e.value);
        $scope.listDataSource.load().done(function () {
            myList.endUpdate();
        });
    };
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.listDataSource.store().insert(data[i]);
        }
        $scope.listDataSource.load();
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var listDataSource = new DevExpress.data.DataSource({
    store: [],
    group: function (dataItem) {
        return dataItem.name.charAt(0);
    }
});
$("#myList").dxList({
    height: '80%',
    dataSource: listDataSource,
    grouped: true,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p style=\"font-size:larger;\"><b>" + itemData.name + "</b></p>");
        itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
    }
});
$("#groupedSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        var myList = $("#myList").dxList("instance");
        myList.beginUpdate();
        if (e.value)
            listDataSource.group(function (dataItem) {
                return dataItem.name.charAt(0);
            });
        else
            listDataSource.group(null);
        myList.option("grouped", e.value);
        listDataSource.load().done(function () {
            myList.endUpdate();
        });
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        listDataSource.store().insert(data[i]);
    }
    listDataSource.load();
}, "json");
//<!--/@jQuery-->