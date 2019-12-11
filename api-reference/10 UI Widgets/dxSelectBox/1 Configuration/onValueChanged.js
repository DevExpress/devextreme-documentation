//<!--@Knockout-->
var myViewModel = {
    selectBoxData: new DevExpress.data.DataSource([]),
    processValueChange: function (e) {
        DevExpress.ui.notify("The selected state is \"" + e.value.name + "\"", "info", 1500);
    }
}
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.selectBoxData.store().insert(data[i]);
    }
    myViewModel.selectBoxData.load();
}, "json");
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.selectBoxData = new DevExpress.data.DataSource([]);
    $scope.processValueChange = function (e) {
        DevExpress.ui.notify("The selected state is \"" + e.value.name + "\"", "info", 1500);
    };
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.selectBoxData.store().insert(data[i]);
        }
        $scope.selectBoxData.load();
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var selectBoxData = new DevExpress.data.DataSource([]);
$("#mySelectBox").dxSelectBox({
    dataSource: selectBoxData,
    displayExpr: 'name',
    onValueChanged: function (e) {
        DevExpress.ui.notify("The selected state is \"" + e.value.name + "\"", "info", 1500);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        selectBoxData.store().insert(data[i]);
    }
    selectBoxData.load();
}, "json")
//<!--/@jQuery-->
