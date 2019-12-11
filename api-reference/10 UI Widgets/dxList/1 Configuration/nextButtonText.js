//<!--@Knockout-->
var myViewModel = {
    listDataSource: new DevExpress.data.DataSource({
        store: [],
        pageSize: 5
    }),
    nextText: ko.observable("More")
}
ko.applyBindings(myViewModel);
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.listDataSource.store().insert(data[i]);
    }
    myViewModel.listDataSource.pageIndex(0);
    myViewModel.listDataSource.load().done(function () {
        $("#myList").dxList("instance").reload();
    });
}, "json");
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.listDataSource = new DevExpress.data.DataSource({
        store: [],
        pageSize: 5
    });
    $scope.nextText = "More";
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.listDataSource.store().insert(data[i]);
        }
        $scope.listDataSource.pageIndex(0);
        $scope.listDataSource.load().done(function () {
            $("#myList").dxList("instance").reload();
        });
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var listDataSource = new DevExpress.data.DataSource({
    store: [],
    pageSize: 5
});
$("#myList").dxList({
    height: '80%',
    dataSource: listDataSource,
    pullRefreshEnabled: true,
    autoPagingEnabled: false,
    showNextButton: true,
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p style=\"font-size:larger;\"><b>" + itemData.name + "</b></p>");
        itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
    }
});
$("#textField").dxTextBox({
    value: "More",
    onValueChanged: function (e) {
        $("#myList").dxList("instance").option("nextButtonText", e.value);
    }
});
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        listDataSource.store().insert(data[i]);
    }
    listDataSource.pageIndex(0);
    listDataSource.load().done(function () {
        $("#myList").dxList("instance").reload();
    });
}, "json");
//<!--/@jQuery-->