//<!--@Knockout-->
var myViewModel = {
    selectedValue: ko.observable(''),
    currentExpr: ko.observable('name'),
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
    $scope.selectedValue = '';
    $scope.currentExpr = 'name';
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
    placeholder: 'Select state',
    dataSource: selectBoxData,
    displayExpr: 'name',
    valueExpr: 'name',
    onValueChanged: function (e) {
        $("#valueField").text($("#mySelectBox").dxSelectBox("instance").option("value"));
    }
});
$("#exprSelector").dxSelectBox({
    items: ['name', 'capital'],
    value: 'name',
    onValueChanged: function (e) {
        $("#mySelectBox").dxSelectBox("instance").option("valueExpr", e.value);
        $("#valueFieldCaption").text(e.value);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        selectBoxData.store().insert(data[i]);
    }
    selectBoxData.load();
}, "json")
//<!--/@jQuery-->
