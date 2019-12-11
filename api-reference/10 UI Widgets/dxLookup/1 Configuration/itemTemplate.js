//<!--@Knockout-->
var myViewModel = {
    lookupDataSource: new DevExpress.data.DataSource([]),
    currentTemplate: ko.observable("item"),
    useTemplateChanged: function (e) {
        this.currentTemplate(e.value ? "custom" : "item");
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
    $scope.currentTemplate = "item";
    $scope.useTemplateChanged = function (e) {
        $scope.currentTemplate = e.value ? "custom" : "item";
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
var customTemplate = function (itemData, itemIndex, itemElement) {
    itemElement.append("<p>Name: <b>" + itemData.name + "</b></p>");
    itemElement.append("<p>Capital: <i >" + itemData.capital + "</i></p>");
}
$("#myLookup").dxLookup({
    dataSource: lookupDataSource,
    displayExpr: 'name',
    title: 'States'
});
$("#useTemplateSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myLookup").dxLookup("instance").option("itemTemplate", e.value ? customTemplate : "item");
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        lookupDataSource.store().insert(data[i]);
    }
    lookupDataSource.load();
}, "json");
//<!--/@jQuery-->
