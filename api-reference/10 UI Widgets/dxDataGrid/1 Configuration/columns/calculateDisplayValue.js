var employeesByKey = {};

$(function () {
    for (var i = 0; i < employees.length; i++) {
        employeesByKey[employees[i].EmployeeID] = employees[i];
    };
});

//<!--@Knockout-->
var myViewModel = {
    orders: orders,
    columns: [
        'CustomerID',
        {
            caption: 'Employee',
            width: 170,
            dataField: "EmployeeID",
            calculateDisplayValue: function (data) {
                var employee = employeesByKey[data.EmployeeID];
                return [employee.TitleOfCourtesy, employee.LastName].join(' ');
            }
        },
        { dataField: 'OrderDate', dataType: 'date' },
        'Freight',
        'ShipName',
        { dataField: 'ShipCity', caption: 'Ship To' }
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.orders = orders;
    $scope.columns = [
        'CustomerID',
        {
            caption: 'Employee',
            width: 170,
            dataField: "EmployeeID",
            calculateDisplayValue: function (data) {
                var employee = employeesByKey[data.EmployeeID];
                return [employee.TitleOfCourtesy, employee.LastName].join(' ');
            }
        },
        { dataField: 'OrderDate', dataType: 'date' },
        'Freight',
        'ShipName',
        { dataField: 'ShipCity', caption: 'Ship To' }
    ];
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#gridContainer").dxDataGrid({
    dataSource: orders,
    columns: [
        'CustomerID',
        {
            caption: 'Employee',
            width: 170,
            dataField: "EmployeeID",
            calculateDisplayValue: function (data) {
                var employee = employeesByKey[data.EmployeeID];
                return [employee.TitleOfCourtesy, employee.LastName].join(' ');
            }
        },
        { dataField: 'OrderDate', dataType: 'date' },
        'Freight',
        'ShipName',
        { dataField: 'ShipCity', caption: 'Ship To' }
    ],
    paging: { pageSize: 8 }
});
//<!--/@jQuery-->