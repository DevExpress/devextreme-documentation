//<!--@Knockout-->
var myViewModel = {
    listDataSource: new DevExpress.data.DataSource("/Content/data/states.txt"),
    holdTimeout: ko.observable(750),
    itemHeld: function (e) {
        DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is being held during " + this.holdTimeout() / 1000 + " sec", "success", 2000);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.listDataSource = new DevExpress.data.DataSource("/Content/data/states.txt");
    $scope.holdTimeout = 750;
    $scope.itemHeld = function (e) {
        DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is being held during " + $scope.holdTimeout / 1000 + " sec", "success", 2000);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myList").dxList({
    height: '70%',
    dataSource: new DevExpress.data.DataSource("/Content/data/states.txt"),
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p style=\"font-size:larger;\"><b>" + itemData.name + "</b></p>");
        itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
    },
    onItemHold: function (e) {
        var holdTimeout = $("#myList").dxList("instance").option("itemHoldTimeout");
        DevExpress.ui.notify("The \"" + e.itemData.name + "\" item is being held during " + holdTimeout / 1000 + " sec", "success", 2000);
    }
});
$("#timeoutSelector").dxNumberBox({
    min: 250,
    max: 2000,
    step: 50,
    showSpinButtons: true,
    value: 750,
    onValueChanged: function (e) {
        $("#myList").dxList("instance").option("itemHoldTimeout", e.value);
    }
});
//<!--/@jQuery-->