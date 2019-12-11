//<!--@Knockout-->
var myViewModel = {
    message: ko.observable(),
    count: ko.observable(0),
    onContentReady: function () {
        myViewModel.count(myViewModel.count() + 1);
        myViewModel.message(myViewModel.count() + (myViewModel.count() < 2 ? ' time' : ' times'));
    },
    orders: orders
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.count = 0;
    $scope.onContentReady = function () {
        $scope.count++;
    }
    $scope.orders = orders;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var count = 0;

$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: orders,
        columns: [
            "OrderID", "CustomerID",
            { dataField: "OrderDate", dataType: 'date', format: 'shortDate' },
            { dataField: "RequiredDate", dataType: 'date', format: 'shortDate' },
            "Freight", "ShipName"
        ],
        paging: { pageSize: 6 },
        filterRow: { visible: true },
        groupPanel: { visible: true },
        selection: { mode: 'single' },
        onContentReady: function () {
            count++;
            var message = "<b>onContentReady</b> has been called for the " + count + (count < 2 ? " time" : " times");
            $('#messageContainer').html(message);
        }
    });
});
//<!--/@jQuery-->