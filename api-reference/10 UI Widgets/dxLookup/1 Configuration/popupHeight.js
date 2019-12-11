//<!--@Knockout-->
var myViewModel = {
    lookupDataSource: new DevExpress.data.DataSource([]),
    heightValue: ko.observable("70%"),
    widthValue: ko.observable("70%"),
    heightChanged: function (e) {
        this.heightValue(e.value + "%");
    },
    widthChanged: function (e) {
        this.widthValue(e.value + "%");
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
    $scope.heightValue = "70%";
    $scope.widthValue = "70%";
    $scope.heightChanged = function (e) {
        $scope.heightValue = e.value + "%";
    };
    $scope.widthChanged = function (e) {
        $scope.widthValue = e.value + "%";
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
    title: 'States',
    popupHeight: '70%',
    popupWidth: '70%'
});
$("#heightSelector").dxNumberBox({
    min: 50,
    max: 90,
    step: 5,
    showSpinButtons: true,
    value: 70,
    onValueChanged: function (e) {
        $("#myLookup").dxLookup("instance").option("popupHeight", e.value + "%");
    }
});
$("#widthSelector").dxNumberBox({
    min: 50,
    max: 90,
    step: 5,
    showSpinButtons: true,
    value: 70,
    onValueChanged: function (e) {
        $("#myLookup").dxLookup("instance").option("popupWidth", e.value + "%");
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        lookupDataSource.store().insert(data[i]);
    }
    lookupDataSource.load();
}, "json");
//<!--/@jQuery-->
