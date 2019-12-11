//<!--@Knockout-->
var myViewModel = {
    tagBoxData: new DevExpress.data.DataSource([]),
    processValueChange: function (e) {
        DevExpress.ui.notify("Selection has changed");
    }
}
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.tagBoxData.store().insert(data[i]);
    }
    myViewModel.tagBoxData.load();
}, "json");
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.tagBoxData = new DevExpress.data.DataSource([]);
    $scope.processValueChange = function (e) {
        DevExpress.ui.notify("Selection has changed");
    };
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.tagBoxData.store().insert(data[i]);
        }
        $scope.tagBoxData.load();
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var tagBoxData = new DevExpress.data.DataSource([]);
$("#myTagBox").dxTagBox({
    dataSource: tagBoxData,
    displayExpr: 'name',
    onValueChanged: function (e) {
        DevExpress.ui.notify("Selection has changed");
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        tagBoxData.store().insert(data[i]);
    }
    tagBoxData.load();
}, "json")
//<!--/@jQuery-->
