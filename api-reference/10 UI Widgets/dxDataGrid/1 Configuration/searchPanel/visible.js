//<!--@Knockout-->
var myViewModel = {
    orders: orders,
    columns: [
        'OrderID', 'CustomerID',
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
        'OrderID', 'CustomerID',
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
            'OrderID', 'CustomerID',
            { dataField: 'OrderDate', dataType: 'date' },
            { dataField: 'ShippedDate', dataType: 'date' },
            'ShipName',
            { dataField: 'ShipCountry', caption: 'Ship To' }
        ],
        paging: { pageSize: 7 },
        searchPanel: { visible: true }
    });

    $("#showSearchPanelCheckbox").dxCheckBox({
        text: 'Show Search Panel',
        value: true,
        onValueChanged: function (e) {
            $('#gridContainer').dxDataGrid('instance').option("searchPanel.visible", e.value);
        }
    });
});
//<!--/@jQuery-->