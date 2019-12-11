//<!--@Knockout-->
var myViewModel = {
    capital: ko.observable(""),
    tagBoxData: new DevExpress.data.DataSource({
        store: [],
        paginate: false,
        sort: 'name'
    }),
    sortByChanged: function (e) {
        this.tagBoxData.sort(e.value);
        this.tagBoxData.load();
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
    $scope.capital = "";
    $scope.tagBoxData = new DevExpress.data.DataSource({
        store: [],
        paginate: false,
        sort: 'name'
    });
    $scope.sortByChanged = function (e) {
        $scope.tagBoxData.sort(e.value);
        $scope.tagBoxData.load();
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
var tagBoxData = new DevExpress.data.DataSource({
    store: [],
    paginate: false,
    sort: 'name'
});
$("#myTagBox").dxTagBox({
    dataSource: tagBoxData,
    placeholder: 'Select states',
    displayExpr: 'name',
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append('<p><b>' + itemData.name + '</b> (' + itemData.capital + ')</p>');
    }
});
$("#sortBySelector").dxSelectBox({
    items: ['name', 'capital'],
    value: 'name',
    onValueChanged: function (e) {
        tagBoxData.sort(e.value);
        tagBoxData.load();
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        tagBoxData.store().insert(data[i]);
    }
    tagBoxData.load();
}, "json")
//<!--/@jQuery-->
