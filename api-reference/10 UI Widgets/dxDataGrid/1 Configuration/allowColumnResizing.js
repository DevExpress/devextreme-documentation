//<!--@Knockout-->
var myViewModel = {
    employees: employees,
    checkBoxState: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.employees = employees;
    $scope.checkBoxState = true;
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
        paging: { pageSize: 6 },
        allowColumnResizing: true
    });

    $("#allowColumnResizingCheckbox").dxCheckBox({
        text: 'Allow Column Resizing',
        value: true,
        onValueChanged: function (e) {
            $('#gridContainer').dxDataGrid('instance').option("allowColumnResizing", e.value);
        }
    });
});

//<!--/@jQuery-->