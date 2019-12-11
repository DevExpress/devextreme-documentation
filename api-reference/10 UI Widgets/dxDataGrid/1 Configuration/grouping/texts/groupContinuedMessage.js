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
    groupContinuedMessage: ko.observable()
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
    $scope.groupContinuedMessage = null;
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
        paging: { pageSize: 9 },
        groupPanel: { visible: true }
    });

    $('#groupContinuedMessage').dxTextBox({
        placeholder: 'Enter a text for the group continued message',
        onFocusOut: function (e) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.option("grouping.texts.groupContinuedMessage", e.component.option('value'));
        }
    });
});
//<!--/@jQuery-->