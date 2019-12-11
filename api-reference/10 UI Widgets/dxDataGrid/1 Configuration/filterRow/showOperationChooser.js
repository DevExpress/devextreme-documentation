//<!--@Knockout-->
var myViewModel = {
    orders: orders,
    columns: [
        { dataField: 'OrderID', width: 100, filterOperations: [], selectedFilterOperation: '=' },
        'CustomerID',
        { dataField: 'OrderDate', dataType: 'date' },
        { dataField: 'ShippedDate', dataType: 'date' },
        'ShipName',
        { dataField: 'ShipCountry', caption: 'Ship To' }
    ],
    checkBoxState: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.orders = orders;
    $scope.columns = [
        { dataField: 'OrderID', width: 100, filterOperations: [], selectedFilterOperation: '=' },
        'CustomerID',
        { dataField: 'OrderDate', dataType: 'date' },
        { dataField: 'ShippedDate', dataType: 'date' },
        'ShipName',
        { dataField: 'ShipCountry', caption: 'Ship To' }
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
        dataSource: orders,
        columns: [
            { dataField: 'OrderID', width: 100, filterOperations: [], selectedFilterOperation: '=' },
            'CustomerID',
            { dataField: 'OrderDate', dataType: 'date' },
            { dataField: 'ShippedDate', dataType: 'date' },
            'ShipName',
            { dataField: 'ShipCountry', caption: 'Ship To' }
        ],
        pager: { visible: false },
        scrolling: { mode: 'infinite' },
        filterRow: { visible: true }
    });

    $("#showOperationChooserCheckbox").dxCheckBox({
        text: 'Show Operation Chooser',
        value: true,
        onValueChanged: function (e) {
            $('#gridContainer').dxDataGrid('instance').option("filterRow.showOperationChooser", e.value);
        }
    });
});
//<!--/@jQuery-->