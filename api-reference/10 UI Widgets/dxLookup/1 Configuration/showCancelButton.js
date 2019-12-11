//<!--@Knockout-->
var myViewModel = {
    lookupDataSource: new DevExpress.data.DataSource([]),
    showDone: ko.observable(false),
    showCancel: ko.observable(true),
    showClear: ko.observable(false)
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
    $scope.showDone = false;
    $scope.showCancel = true;
    $scope.showClear = false;
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
    showDoneButton: false,
    showCancelButton: true,
    showClearButton: false,
    displayExpr: 'name',
    title: 'States'
});
$("#showDoneSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myLookup").dxLookup("instance").option("showDoneButton", e.value);
    }
});
$("#showCancelSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#myLookup").dxLookup("instance").option("showCancelButton", e.value);
    }
});
$("#showClearSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myLookup").dxLookup("instance").option("showClearButton", e.value);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        lookupDataSource.store().insert(data[i]);
    }
    lookupDataSource.load();
}, "json");
//<!--/@jQuery-->
