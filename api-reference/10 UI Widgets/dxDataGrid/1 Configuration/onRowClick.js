//<!--@Knockout-->
var myViewModel = {
    onRowClick: function (info) {
        info.rowElement.hasClass('clicked') ? info.rowElement.removeClass('clicked') : info.rowElement.addClass('clicked')
    },
    employees: employees
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.onRowClick = function (info) {
        info.rowElement.hasClass('clicked') ? info.rowElement.removeClass('clicked') : info.rowElement.addClass('clicked')
    }
    $scope.employees = employees;
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
        ],
        onRowClick: function (info) {
            info.rowElement.hasClass("clicked") ? info.rowElement.removeClass("clicked") : info.rowElement.addClass("clicked")
        }
    });
});
//<!--/@jQuery-->