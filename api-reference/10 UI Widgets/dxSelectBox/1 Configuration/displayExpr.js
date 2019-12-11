//<!--@Knockout-->
var myViewModel = {
    displayExprValue: ko.observable('name'),
    selectBoxData: new DevExpress.data.DataSource({
        store: [],
        paginate: false
    })
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
    $scope.displayExprValue = 'name';
    $scope.selectBoxData = new DevExpress.data.DataSource({
        store: [],
        paginate: false
    });
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
var selectBoxData = new DevExpress.data.DataSource({
    store: [],
    paginate: false
});
$("#mySelectBox").dxSelectBox({
    dataSource: selectBoxData,
    placeholder: 'Select a state',
    displayExpr: 'name'
});
$("#displayExprSelector").dxSelectBox({
    items: ['name', 'capital'],
    value: 'name',
    onValueChanged: function (e) {
        $("#mySelectBox").dxSelectBox("instance").option("displayExpr", e.value);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        selectBoxData.store().insert(data[i]);
    }
    selectBoxData.load();
}, "json")
//<!--/@jQuery-->
