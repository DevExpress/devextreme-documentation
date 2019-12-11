//<!--@Knockout-->
var myViewModel = {
    tagBoxDisabled: ko.observable(false),
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
    $scope.tagBoxDisabled = false;
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
    placeholder: 'Select a state',
    displayExpr: 'name'
});
$("#disabledSelector").dxSwitch({
    value: false,
    onValueChanged: function (e) {
        $("#myTagBox").dxTagBox("instance").option("disabled", e.value);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        tagBoxData.store().insert(data[i]);
    }
    tagBoxData.load();
}, "json")
//<!--/@jQuery-->
