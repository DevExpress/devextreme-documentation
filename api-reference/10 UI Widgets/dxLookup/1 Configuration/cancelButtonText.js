//<!--@Knockout-->
var myViewModel = {
    lookupDataSource: new DevExpress.data.DataSource([]),
    doneText: ko.observable("Done"),
    cancelText: ko.observable("Cancel"),
    clearText: ko.observable("Clear")
}
ko.applyBindings(myViewModel);
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.lookupDataSource.store().insert(data[i]);
    }
    myViewModel.lookupDataSource.load();
}, "json");
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.lookupDataSource = new DevExpress.data.DataSource([]);
    $scope.doneText = "Done";
    $scope.cancelText = "Cancel";
    $scope.clearText = "Clear";
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.lookupDataSource.store().insert(data[i]);
        }
        $scope.lookupDataSource.load();
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var lookupDataSource = new DevExpress.data.DataSource([]);
$("#myLookup").dxLookup({
    dataSource: lookupDataSource,
    displayExpr: 'name',
    title: 'States',
    showDoneButton: true,
    showCancelButton: true,
    showClearButton: true
});
$("#doneTextField").dxTextBox({
    value: "Done",
    onValueChanged: function (e) {
        $("#myLookup").dxLookup("instance").option("doneButtonText", e.value);
    }
});
$("#cancelTextField").dxTextBox({
    value: "Cancel",
    onValueChanged: function (e) {
        $("#myLookup").dxLookup("instance").option("cancelButtonText", e.value);
    }
});
$("#clearTextField").dxTextBox({
    value: "Clear",
    onValueChanged: function (e) {
        $("#myLookup").dxLookup("instance").option("clearButtonText", e.value);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        lookupDataSource.store().insert(data[i]);
    }
    lookupDataSource.load();
}, "json");
//<!--/@jQuery-->
