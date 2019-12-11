var rowFields = [
    { dataField: "[Product].[Category]", area: "row" },
    { dataField: "[Product].[Subcategory]", area: "row" },
    { dataField: "[Product].[Product]", area: "row" }
];
var columnFields = [
    { dataField: "[Date].[Calendar Year]", area: "column" },
    { dataField: "[Date].[Calendar Quarter of Year]", area: "column" },
    { dataField: "[Date].[Month of Year]", area: "column" }
];
var dataFields = [
    { dataField: "[Measures].[Order Count]", area: "data" },
    { dataField: "[Measures].[Internet Order Count]", area: "data" }
];
<!--@jQuery-->
var updateFields = function () {
    var newFields = [];
    if ($("#columnCheckBox").dxCheckBox('instance').option('value')){
        newFields = newFields.concat(columnFields);
    }
    if ($("#rowCheckBox").dxCheckBox('instance').option('value')) {
        newFields = newFields.concat(rowFields);
    }
    if ($("#dataCheckBox").dxCheckBox('instance').option('value')) {
        newFields = newFields.concat(dataFields);
    }
    var pivotGridDataSource = $('#pivotGridContainer').dxPivotGrid('instance').getDataSource();
    pivotGridDataSource.fields(newFields);
    pivotGridDataSource.load();
}
 
$(function () {
    $('#pivotGridContainer').dxPivotGrid({
        dataSource: {
            store: {
                type: 'xmla',
                url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
                catalog: "Adventure Works DW Standard Edition",
                cube: "Adventure Works"
            },
            retrieveFields: false
        },
        allowExpandAll: true,
        allowFiltering: true,
        allowSorting: true,
        allowSortingBySummary: true,
        fieldChooser: { enabled: false }
    });
    
    $("#rowCheckBox").dxCheckBox({
        text: 'Populate Row Area',
        value: false,
        onValueChanged: updateFields
    });
    
    $("#columnCheckBox").dxCheckBox({
        text: 'Populate Column Area',
        value: false,
        onValueChanged: updateFields
    });
    
    $("#dataCheckBox").dxCheckBox({
        text: 'Populate Data Area',
        value: false,
        onValueChanged: updateFields
    });
});
<!--/@jQuery-->
<!--@Knockout-->
var demoViewModel = {
    rowCheckBoxValue: ko.observable(false),
    columnCheckBoxValue: ko.observable(false),
    dataCheckBoxValue: ko.observable(false),
    gridDataSource: new DevExpress.data.PivotGridDataSource({
        store: {
            type: 'xmla',
            url: 'https://demos.devexpress.com/Services/OLAP/msmdpump.dll',
            catalog: 'Adventure Works DW Standard Edition',
            cube: 'Adventure Works'
        },
        retrieveFields: false
    }),
    updateFields: function () {
        var newFields = [];
        if (this.columnCheckBoxValue()){
            newFields = newFields.concat(columnFields);
        }
        if (this.rowCheckBoxValue()) {
            newFields = newFields.concat(rowFields);
        }
        if (this.dataCheckBoxValue()) {
            newFields = newFields.concat(dataFields);
        }
        this.gridDataSource.fields(newFields);
        this.gridDataSource.load();
    } 
};
ko.applyBindings(demoViewModel);
<!--/@Knockout-->
<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller('exampleController', function ($scope) {
    $scope.rowCheckBoxValue = false;
    $scope.columnCheckBoxValue = false;
    $scope.dataCheckBoxValue = false;
    $scope.gridDataSource = new DevExpress.data.PivotGridDataSource({
        store: {
            type: 'xmla',
            url: 'https://demos.devexpress.com/Services/OLAP/msmdpump.dll',
            catalog: 'Adventure Works DW Standard Edition',
            cube: 'Adventure Works'
        },
        retrieveFields: false
    });
    $scope.updateFields = function () {
        var newFields = [];
        if ($scope.columnCheckBoxValue) {
            newFields = newFields.concat(columnFields);
        }
        if ($scope.rowCheckBoxValue) {
            newFields = newFields.concat(rowFields);
        }
        if ($scope.dataCheckBoxValue) {
            newFields = newFields.concat(dataFields);
        }
        $scope.gridDataSource.fields(newFields);
        $scope.gridDataSource.load();
    } 
});
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
<!--/@AngularJS-->