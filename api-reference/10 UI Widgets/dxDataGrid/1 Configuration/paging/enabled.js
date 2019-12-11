//<!--@Knockout-->
var myViewModel = {
    columns: [
        { dataField: 'ProductID', caption: 'ID' },
        { dataField: 'ProductName', caption: 'Name', width: 220 },
        { dataField: 'QuantityPerUnit', caption: 'Quantity', width: 150 },
        { dataField: 'UnitPrice', caption: 'Price' },
        { dataField: 'UnitsInStock', caption: 'In Stock' }
    ],
    checkBoxState: ko.observable(true)
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
    $scope.checkBoxState = true;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
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
        ]
    });

    $("#checkboxContainer").dxCheckBox({
        text: 'Enable Paging',
        value: true,
        onValueChanged: function (e) {
            $('#gridContainer').dxDataGrid('instance').option("paging.enabled", e.value);
        }
    });
});
//<!--/@jQuery-->