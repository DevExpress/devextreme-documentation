//<!--@Knockout-->
var myViewModel = {
    lookupDataSource: new DevExpress.data.DataSource([]),
    lookupValueChanged: function (e) {
        DevExpress.ui.notify("New lookup value is \"" + e.value + "\"", "success", 2000);
    }
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
    $scope.lookupValueChanged = function (e) {
        DevExpress.ui.notify("New lookup value is \"" + e.value + "\"", "success", 2000);
    };
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
    fullScreen: false,
    displayExpr: 'name',
    valueExpr: 'capital',
    title: 'States',
    onValueChanged: function (e) {
        DevExpress.ui.notify("New lookup value is \"" + e.value + "\"", "success", 2000);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        lookupDataSource.store().insert(data[i]);
    }
    lookupDataSource.load();
}, "json");
//<!--/@jQuery-->
