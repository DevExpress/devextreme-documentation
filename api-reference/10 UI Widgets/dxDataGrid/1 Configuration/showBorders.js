//<!--@Knockout-->
var myViewModel = {
    employees: employees,
    checkBoxState: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.employees = employees;
    $scope.checkBoxState = false;
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
        paging: { enabled: false },
        showBorders: false
    });

    $("#showBordersCheckbox").dxCheckBox({
        text: 'Show Grid Borders',
        value: false,
        onValueChanged: function (e) {
            $('#gridContainer').dxDataGrid('instance').option("showBorders", e.value);
        }
    });
});
//<!--/@jQuery-->