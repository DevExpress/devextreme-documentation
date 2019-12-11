//<!--@Knockout-->
var myViewModel = {
    lookupDataSource: new DevExpress.data.DataSource([]),
    placeholderText: ko.observable("Type state name")
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
    $scope.placeholderText = "Type state name";
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
    searchPlaceholder: "Type state name"
});
$("#placeholderField").dxTextBox({
    value: "Type state name",
    onValueChanged: function (e) {
        $("#myLookup").dxLookup("instance").option("searchPlaceholder", e.value);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        lookupDataSource.store().insert(data[i]);
    }
    lookupDataSource.load();
}, "json");
//<!--/@jQuery-->
