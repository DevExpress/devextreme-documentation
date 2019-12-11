<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: orders,
        columns: [
            { dataField: 'OrderID', width: 100 },
            'CustomerID',
            { dataField: 'OrderDate', dataType: 'date' },
            { dataField: 'ShippedDate', dataType: 'date' },
            'ShipName',
            { dataField: 'ShipCountry', caption: 'Ship To' }
        ],
        pager: { visible: false },
        scrolling: { mode: 'virtual' },
        searchPanel: { visible: true }
    });
});
<!--/@jQuery-->
<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller('demoController', function ($scope) {
    $scope.orders = orders;
});
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
<!--/@AngularJS-->