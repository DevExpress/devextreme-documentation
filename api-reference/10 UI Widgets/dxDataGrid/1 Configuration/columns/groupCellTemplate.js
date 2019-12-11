var groupCellTemplate = function (groupCell, info) {
    $('<div>').html(info.text).css('font-style', 'italic').appendTo(groupCell);
};

//<!--@Knockout-->
var myViewModel = {
    orders: orders,
    columns: [
        'OrderID', 'CustomerID',
        { dataField: 'OrderDate', dataType: 'date' },
        { dataField: 'ShippedDate', dataType: 'date' },
        { dataField: 'Freight', format: { type: 'fixedPoint', precision: 2 } },
        { dataField: 'ShipName', groupIndex: 1 },
        { dataField: 'ShipCountry', caption: 'Ship To', groupIndex: 0 }
    ],
    customizeColumns: function (columns) {
        $.each(columns, function (_, element) {
            element.groupCellTemplate = groupCellTemplate;
        });
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.orders = orders;
    $scope.columns = [
        'OrderID', 'CustomerID',
        { dataField: 'OrderDate', dataType: 'date' },
        { dataField: 'ShippedDate', dataType: 'date' },
        { dataField: 'Freight', format: { type: 'fixedPoint', precision: 2 } },
        { dataField: 'ShipName', groupIndex: 1 },
        { dataField: 'ShipCountry', caption: 'Ship To', groupIndex: 0 }
    ];
    $scope.customizeColumns = function (columns) {
        $.each(columns, function (_, element) {
            element.groupCellTemplate = groupCellTemplate;
        });
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: orders,
        columns: [
            'OrderID', 'CustomerID',
            { dataField: 'OrderDate', dataType: 'date' },
            { dataField: 'ShippedDate', dataType: 'date' },
            { dataField: 'Freight', format: { type: 'fixedPoint', precision: 2 } },
            { dataField: 'ShipName', groupIndex: 1 },
            { dataField: 'ShipCountry', caption: 'Ship To', groupIndex: 0 }
        ],
        customizeColumns: function (columns) {
            $.each(columns, function (_, element) {
                element.groupCellTemplate = groupCellTemplate;
            });
        },
        paging: { pageSize: 8 }
    });
});
//<!--/@jQuery-->