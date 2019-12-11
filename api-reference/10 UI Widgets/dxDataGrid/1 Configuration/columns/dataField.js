//<!--@Knockout-->
var myViewModel = {
    employees: employees,
    columns: [
        { dataField: 'TitleOfCourtesy', caption: 'Title' },
        'FirstName',
        'LastName',
        { dataField: 'Title', caption: 'Position', width: 150 },
        { dataField: 'BirthDate', dataType: 'date', format: 'shortDate' },
        { dataField: 'HireDate', dataType: 'date', format: 'shortDate' }
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.employees = employees;
    $scope.columns = [
        { dataField: 'TitleOfCourtesy', caption: 'Title' },
        'FirstName',
        'LastName',
        { dataField: 'Title', caption: 'Position', width: 150 },
        { dataField: 'BirthDate', dataType: 'date', format: 'shortDate' },
        { dataField: 'HireDate', dataType: 'date', format: 'shortDate' }
    ];
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: employees,
        columns: [
            { dataField: 'TitleOfCourtesy', caption: 'Title' },
            'FirstName',
            'LastName',
            { dataField: 'Title', caption: 'Position', width: 150 },
            { dataField: 'BirthDate', dataType: 'date', format: 'shortDate' },
            { dataField: 'HireDate', dataType: 'date', format: 'shortDate' }
        ]
    });
});
//<!--/@jQuery-->