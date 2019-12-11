<!--@jQuery-->
$(function () {
    $('#pivotGridContainer').dxPivotGrid({
        dataSource: {
            store: {
                type: 'xmla',
                url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
                catalog: "Adventure Works DW Standard Edition",
                cube: "Adventure Works"
            },
            fields: [
                { dataField: "[Product].[Category]", area: "row" },
                { dataField: "[Product].[Subcategory]", area: "row" },
                { dataField: "[Product].[Product]", area: "row" },
                { dataField: "[Date].[Calendar Year]", area: "column"},
                { dataField: "[Date].[Calendar Quarter of Year]", area: "column"},
                { dataField: "[Date].[Month of Year]", area: "column"},
                { dataField: "[Measures].[Order Count]", area: "data" },
                { dataField: "[Measures].[Internet Order Count]", area: "data"}
            ],
            retrieveFields: false
        },
        allowExpandAll: true,
        allowFiltering: true,
        allowSorting: true,
        allowSortingBySummary: true,
        fieldChooser: { enabled: false }
    });
    
    $("#relocateFieldButton").dxButton({
        text: 'Relocate the Year field',
        onClick: function () {
            var pivotGridDataSource = $('#pivotGridContainer').dxPivotGrid('instance').getDataSource();
            var areaIndex_old = pivotGridDataSource.field("[Date].[Calendar Year]").areaIndex;
            pivotGridDataSource.field("[Date].[Calendar Year]", {
                areaIndex: areaIndex_old == 0 ? 3 : 0
            });
            pivotGridDataSource.load();
        }
    });
});
<!--/@jQuery-->
<!--@Knockout-->
var demoViewModel = {
    pivotGridDataSource: new DevExpress.data.PivotGridDataSource({
        store: {
            type: 'xmla',
            url: 'https://demos.devexpress.com/Services/OLAP/msmdpump.dll',
            catalog: 'Adventure Works DW Standard Edition',
            cube: 'Adventure Works'
        },
        fields: [
            { dataField: '[Product].[Category]', area: 'row' },
            { dataField: '[Product].[Subcategory]', area: 'row' },
            { dataField: '[Product].[Product]', area: 'row' },
            { dataField: '[Date].[Calendar Year]', area: 'column'},
            { dataField: '[Date].[Calendar Quarter of Year]', area: 'column'},
            { dataField: '[Date].[Month of Year]', area: 'column'},
            { dataField: '[Measures].[Order Count]', area: 'data' },
            { dataField: '[Measures].[Internet Order Count]', area: 'data'}
        ],
        retrieveFields: false
    }),
    buttonClicked: function () {
        var areaIndex_old = this.pivotGridDataSource.field('[Date].[Calendar Year]').areaIndex;
        this.pivotGridDataSource.field("[Date].[Calendar Year]", {
            areaIndex: areaIndex_old == 0 ? 3 : 0
        });
        this.pivotGridDataSource.load();
    }
};
ko.applyBindings(demoViewModel);
<!--/@Knockout-->
<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller('exampleController', function ($scope) {
    $scope.pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        store: {
            type: 'xmla',
            url: 'https://demos.devexpress.com/Services/OLAP/msmdpump.dll',
            catalog: 'Adventure Works DW Standard Edition',
            cube: 'Adventure Works'
        },
        fields: [
            { dataField: '[Product].[Category]', area: 'row' },
            { dataField: '[Product].[Subcategory]', area: 'row' },
            { dataField: '[Product].[Product]', area: 'row' },
            { dataField: '[Date].[Calendar Year]', area: 'column'},
            { dataField: '[Date].[Calendar Quarter of Year]', area: 'column'},
            { dataField: '[Date].[Month of Year]', area: 'column'},
            { dataField: '[Measures].[Order Count]', area: 'data' },
            { dataField: '[Measures].[Internet Order Count]', area: 'data'}
        ],
        retrieveFields: false
    });
    $scope.buttonClicked = function () {
        var areaIndex_old = $scope.pivotGridDataSource.field('[Date].[Calendar Year]').areaIndex;
        $scope.pivotGridDataSource.field("[Date].[Calendar Year]", {
            areaIndex: areaIndex_old == 0 ? 3 : 0
        });
        $scope.pivotGridDataSource.load();
    }
});
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
<!--/@AngularJS-->