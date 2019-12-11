//<!--@Knockout-->
var myViewModel = {
    orders: orders,
    filterOperation: ko.observable('='),
    filterOperations: [
        { value: '=' },
        { value: '<>' },
        { value: '<' },
        { value: '<=' },
        { value: '>' },
        { value: '>=' },
        { value: 'startswith' },
        { value: 'contains' },
        { value: 'notcontains' },
        { value: 'endswith' }
    ],
    operationDescription: ko.observable(''),
    dataGrid: null,
    getDataGrid: function (e) { dataGrid = e.component },
    buttonClick: function () {
        var operationDescriptions = {};
        operationDescriptions[myViewModel.filterOperation()] = myViewModel.operationDescription();
        dataGrid.option('filterRow.operationDescriptions', operationDescriptions);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.orders = orders;
    $scope.filterOperation = '=';
    $scope.filterOperations = [
        { value: '=' },
        { value: '<>' },
        { value: '<' },
        { value: '<=' },
        { value: '>' },
        { value: '>=' },
        { value: 'startswith' },
        { value: 'contains' },
        { value: 'notcontains' },
        { value: 'endswith' }
    ];
    $scope.operationDescription = "";
    $scope.dataGrid = null;
    $scope.getDataGrid = function (e) { dataGrid = e.component };
    $scope.buttonClick = function () {
        var operationDescriptions = {};
        operationDescriptions[$scope.filterOperation] = $scope.operationDescription;
        dataGrid.option('filterRow.operationDescriptions', operationDescriptions);
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: orders,
        height: 350,
        columns: [
            'OrderID', 'CustomerID',
            { dataField: 'OrderDate', dataType: 'date' },
            { dataField: 'ShippedDate', dataType: 'date' },
            'ShipName',
            { dataField: 'ShipCountry', caption: 'Ship To' }
        ],
        pager: { visible: false },
        scrolling: { mode: 'infinite' },
        filterRow: { visible: true }
    });

    $('#selectBoxContainer').dxSelectBox({
        dataSource: [
            { value: '=' },
            { value: '<>' },
            { value: '<' },
            { value: '<=' },
            { value: '>' },
            { value: '>=' },
            { value: 'startswith' },
            { value: 'contains' },
            { value: 'notcontains' },
            { value: 'endswith' }],
        valueExpr: 'value',
        displayExpr: 'value',
        value: '=',
    });

    $('#operationDescription').dxTextBox({
        placeholder: 'Enter a description for the chosen operation',
    });

    $("#changeDescriptionButton").dxButton({
        text: 'Change Description',
        onClick: function () {
            var filterOperation = $("#selectBoxContainer").dxSelectBox('instance').option('value');
            var description = $("#operationDescription").dxTextBox('instance').option('value');
            var operationDescriptions = {};
            operationDescriptions[filterOperation] = description;
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.option('filterRow.operationDescriptions', operationDescriptions);
        }
    });
});
//<!--/@jQuery-->