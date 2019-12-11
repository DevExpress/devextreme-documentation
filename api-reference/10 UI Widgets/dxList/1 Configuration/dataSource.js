//<!--@Knockout-->
var myViewModel = {
    listDataSource: new DevExpress.data.DataSource({
        store: [],
        sort: "name"
    }),
    sortConditions: ["name", "capital"],
    sortConditionChanged: function (e) {
        this.listDataSource.sort(e.value);
        this.listDataSource.load();
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
        sort: "name"
    });
    $scope.sortConditions = ["name", "capital"];
    $scope.sortConditionChanged = function (e) {
        $scope.listDataSource.sort(e.value);
        $scope.listDataSource.load();
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
    sort: "name"
});
$("#myList").dxList({
    height: '80%',
    dataSource: listDataSource,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p style=\"font-size:larger;\"><b>" + itemData.name + "</b></p>");
        itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
    }
});
$("#sortSelector").dxSelectBox({
    dataSource: ["name", "capital"],
    value: "name",
    onValueChanged: function (e) {
        listDataSource.sort(e.value);
        listDataSource.load();
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        listDataSource.store().insert(data[i]);
    }
    listDataSource.load();
}, "json");
//<!--/@jQuery-->