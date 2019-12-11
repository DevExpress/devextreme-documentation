//<!--@Knockout-->
var myViewModel = {
    capital: ko.observable(""),
    selectBoxData: new DevExpress.data.DataSource({
        store: [],
        paginate: false,
        sort: 'name'
    }),
    sortByChanged: function (e) {
        this.selectBoxData.sort(e.value);
        this.selectBoxData.load();
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
    $scope.capital = "";
    $scope.selectBoxData = new DevExpress.data.DataSource({
        store: [],
        paginate: false,
        sort: 'name'
    });
    $scope.sortByChanged = function (e) {
        $scope.selectBoxData.sort(e.value);
        $scope.selectBoxData.load();
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
var selectBoxData = new DevExpress.data.DataSource({
    store: [],
    paginate: false,
    sort: 'name'
});
$("#mySelectBox").dxSelectBox({
    dataSource: selectBoxData,
    placeholder: 'Select a state',
    displayExpr: 'name',
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append('<p><b>' + itemData.name + '</b> (' + itemData.capital + ')</p>');
    }
});
$("#sortBySelector").dxSelectBox({
    items: ['name', 'capital'],
    value: 'name',
    onValueChanged: function (e) {
        selectBoxData.sort(e.value);
        selectBoxData.load();
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        selectBoxData.store().insert(data[i]);
    }
    selectBoxData.load();
}, "json")
//<!--/@jQuery-->
