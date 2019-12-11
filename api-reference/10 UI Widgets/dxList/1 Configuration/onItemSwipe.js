//<!--@Knockout-->
var myViewModel = {
    listDataSource: new DevExpress.data.DataSource("/Content/data/states.txt"),
    itemSwiped: function (e) {
        DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is swiped", "success", 1500);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.listDataSource = new DevExpress.data.DataSource("/Content/data/states.txt");
    $scope.itemSwiped = function (e) {
        DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is swiped", "success", 1500);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myList").dxList({
    dataSource: new DevExpress.data.DataSource("/Content/data/states.txt"),
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p style=\"font-size:larger;\"><b>" + itemData.name + "</b></p>");
        itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
    },
    onItemSwipe: function (e) {
        DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is swiped", "success", 1500);
    }
});
//<!--/@jQuery-->