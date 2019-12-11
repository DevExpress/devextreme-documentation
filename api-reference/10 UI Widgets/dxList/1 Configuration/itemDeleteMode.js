//<!--@Knockout-->
var myViewModel = {
    listDataSource: new DevExpress.data.DataSource([]),
    deleteModes: ["static", "toggle", "slideButton", "slideItem", "swipe", "context"],
    deleteMode: ko.observable("slideButton")
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
    $scope.listDataSource = new DevExpress.data.DataSource([]);
    $scope.deleteModes = ["static", "toggle", "slideButton", "slideItem", "swipe", "context"];
    $scope.deleteMode = "slideButton";
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
var listDataSource = new DevExpress.data.DataSource([]);
$("#myList").dxList({
    editEnabled: true,
    height: '80%',
    dataSource: listDataSource,
    allowItemDeleting: true,
    itemDeleteMode: "slideButton",
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p style=\"font-size:larger;\"><b>" + itemData.name + "</b></p>");
        itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        listDataSource.store().insert(data[i]);
    }
    listDataSource.load();
}, "json");
$("#deleteModeSelector").dxSelectBox({
    dataSource: ["static", "toggle", "slideButton", "slideItem", "swipe", "context"],
    value: "slideButton",
    onValueChanged: function (e) {
        $("#myList").dxList("instance").option("itemDeleteMode", e.value);
    }
});
//<!--/@jQuery-->