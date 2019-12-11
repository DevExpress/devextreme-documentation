//<!--@Knockout-->
var myViewModel = {
    displayExprValue: ko.observable('name'),
    tagBoxData: new DevExpress.data.DataSource({
        store: [],
        paginate: false
    })
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
    $scope.displayExprValue = 'name';
    $scope.tagBoxData = new DevExpress.data.DataSource({
        store: [],
        paginate: false
    });
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
var tagBoxData = new DevExpress.data.DataSource({
    store: [],
    paginate: false
});
$("#myTagBox").dxTagBox({
    dataSource: tagBoxData,
    placeholder: 'Select states',
    displayExpr: 'name'
});
$("#displayExprSelector").dxSelectBox({
    items: ['name', 'capital'],
    value: 'name',
    onValueChanged: function (e) {
        $("#myTagBox").dxTagBox("instance").option("displayExpr", e.value);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        tagBoxData.store().insert(data[i]);
    }
    tagBoxData.load();
}, "json")
//<!--/@jQuery-->
