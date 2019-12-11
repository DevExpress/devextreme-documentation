//<!--@Knockout-->
var myViewModel = {
    listDataSource: new DevExpress.data.DataSource("/Content/data/states.txt"),
    availableValues: ["always", "onHover", "onScroll", "never"],
    showScrollbar: ko.observable("onScroll")
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.listDataSource = new DevExpress.data.DataSource("/Content/data/states.txt");
    $scope.availableValues = ["always", "onHover", "onScroll", "never"];
    $scope.showScrollbar = "onScroll";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myList").dxList({
    height: '80%',
    dataSource: new DevExpress.data.DataSource("/Content/data/states.txt"),
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p style=\"font-size:larger;\"><b>" + itemData.name + "</b></p>");
        itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
    }
});
$("#showScrollbarSelector").dxSelectBox({
    dataSource: ["always", "onHover", "onScroll", "never"],
    value: "onScroll",
    onValueChanged: function (e) {
        $("#myList").dxList("instance").option("showScrollbar", e.value);
    }
});
//<!--/@jQuery-->