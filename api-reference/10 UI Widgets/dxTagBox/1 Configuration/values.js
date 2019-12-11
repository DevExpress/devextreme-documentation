//<!--@Knockout-->
var myViewModel = {
    selectedValues: ko.observableArray([]),
    currentExpr: ko.observable('name'),
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
    $scope.selectedValues = [];
    $scope.currentExpr = 'name';
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
    placeholder: 'Select states',
    dataSource: tagBoxData,
    displayExpr: 'name',
    valueExpr: 'name',
    onValueChanged: function (e) {
        $("#valuesList").empty();
        for (var i = 0; i < e.values.length; i++)
            $("#valuesList").append("<li>" + e.values[i] + "</li>");
    }
});
$("#exprSelector").dxSelectBox({
    items: ['name', 'capital'],
    value: 'name',
    onValueChanged: function (e) {
        $("#myTagBox").dxTagBox("instance").option("valueExpr", e.value);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        tagBoxData.store().insert(data[i]);
    }
    tagBoxData.load();
}, "json")
//<!--/@jQuery-->
