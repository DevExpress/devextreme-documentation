//<!--@Knockout-->
var myViewModel = {
    columns: [
        { dataField: 'ProductID', caption: 'ID' },
        { dataField: 'ProductName', caption: 'Name', width: 220 },
        { dataField: 'QuantityPerUnit', caption: 'Quantity', width: 150 },
        { dataField: 'UnitPrice', caption: 'Price' },
        { dataField: 'UnitsInStock', caption: 'In Stock' }
    ]
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
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    var scrollingModes = ['standard', 'virtual', 'infinite'];

    $("#gridContainer").dxDataGrid({
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
        scrolling: { mode: 'infinite' }
    });
});
//<!--/@jQuery-->