//<!--@Knockout-->
var myViewModel = {
    columns: [
        { dataField: 'ProductID', caption: 'ID' },
        { dataField: 'ProductName', caption: 'Name', width: 220 },
        { dataField: 'QuantityPerUnit', caption: 'Quantity', width: 150 },
        { dataField: 'UnitPrice', caption: 'Price' },
        { dataField: 'UnitsInStock', caption: 'In Stock' }
    ],
    showCheckBoxesModes: ["onClick", "onLongTap", "always", "none"],
    showCheckBoxesMode: ko.observable("onClick")
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
    $scope.showCheckBoxesModes = ["onClick", "onLongTap", "always", "none"];
    $scope.showCheckBoxesMode = "onClick";
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var showCheckBoxesModes = ["onClick", "onLongTap", "always", "none"];

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
        selection: { mode: 'multiple' }
    });

    $("#selectBoxContainer").dxSelectBox({
        height: 35,
        width: 150,
        items: showCheckBoxesModes,
        value: showCheckBoxesModes[0],
        onValueChanged: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.option("selection.showCheckBoxesMode", info.value);
        }
    });
});
//<!--/@jQuery-->
