//<!--@Knockout-->
var myViewModel = {
    columns: [
        { dataField: 'ProductID', caption: 'ID' },
        { dataField: 'ProductName', caption: 'Name', width: 220 },
        { dataField: 'QuantityPerUnit', caption: 'Quantity', width: 150 },
        { dataField: 'UnitPrice', caption: 'Price' },
        { dataField: 'UnitsInStock', caption: 'In Stock' }
    ],
    selectionModes: ['none', 'single', 'multiple'],
    selectionMode: ko.observable('none')
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.columns = [
        { dataField: 'ProductID', caption: 'ID' },
        { dataField: 'ProductName', caption: 'Name', width: 220 },
        { dataField: 'QuantityPerUnit', caption: 'Quantity', width: 150 },
        { dataField: 'UnitPrice', caption: 'Price' },
        { dataField: 'UnitsInStock', caption: 'In Stock' }
    ];
    $scope.selectionModes = ['none', 'single', 'multiple'];
    $scope.selectionMode = 'none';
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var selectionModes = ['none', 'single', 'multiple'];

$(function () {
    $("#gridContainer").dxDataGrid({
        height: 500,
        dataSource: {
            store: {
                type: 'odata',
                url: 'https://sampleservices.devexpress.com/Northwind.svc/Products'
            }
        },
        columns: [
            { dataField: 'ProductID', caption: 'ID' },
            { dataField: 'ProductName', caption: 'Name', width: 220 },
            { dataField: 'QuantityPerUnit', caption: 'Quantity', width: 150 },
            { dataField: 'UnitPrice', caption: 'Price' },
            { dataField: 'UnitsInStock', caption: 'In Stock' }
        ],
        paging: { pageSize: 8 },
        selection: { mode: 'none' }
    });

    $("#selectBoxContainer").dxSelectBox({
        height: 35,
        width: 150,
        items: selectionModes,
        value: selectionModes[0],
        onValueChanged: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.option({
                selection: { mode: info.value }
            });
        }
    });
});
//<!--/@jQuery-->
