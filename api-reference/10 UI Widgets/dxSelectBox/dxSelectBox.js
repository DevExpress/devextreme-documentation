//<!--@Knockout-->
var myViewModel = {
    capital: ko.observable(""),
    selectBoxData: new DevExpress.data.DataSource({ store: [], paginate: false })
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
    $scope.capital = "";
    $scope.selectBoxData = new DevExpress.data.DataSource({ store: [], paginate: false });
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
var selectBoxData = new DevExpress.data.DataSource({ store: [], paginate: false });
$("#mySelectBox").dxSelectBox({
    dataSource: selectBoxData,
    placeholder: 'Select a state',
    displayExpr: 'name',
    valueExpr: 'capital',
    onValueChanged: function (e) {
        $("#capital").text(e.value);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        selectBoxData.store().insert(data[i]);
    }
    selectBoxData.load();
}, "json")
//<!--/@jQuery-->
