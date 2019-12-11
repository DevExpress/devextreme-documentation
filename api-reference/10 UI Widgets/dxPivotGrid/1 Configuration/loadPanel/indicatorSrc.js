//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: {
            fields: [
                { dataField: "[Product].[Category]", area: "row" },
                { dataField: "[Product].[Subcategory]", area: "row" },
                { dataField: "[Ship Date].[Calendar Year]", area: "column" },
                { dataField: "[Ship Date].[Month of Year]", area: "column" },
                { dataField: "[Measures].[Customer Count]", area: "data" }
            ],
            store: {
                type: "xmla",
                url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
                catalog: "Adventure Works DW Standard Edition",
                cube: "Adventure Works"
            }
        },
        fieldChooser: { enabled: false }
    });
    
    $("#radioGroupContainer").dxRadioGroup({
        dataSource: [
            { name: '1', value: '/Content/data/loadingIcons/default.svg' },
            { name: '2', value: '/Content/data/loadingIcons/ring.svg' },
            { name: '3', value: '/Content/data/loadingIcons/rolling.svg' }
        ],
        valueExpr: 'value',
        displayExpr: 'name', 
        value: undefined,
        layout: 'horizontal',
        onValueChanged: function (e) {
            var pivotGrid = $('#pivotGridContainer').dxPivotGrid('instance');
            pivotGrid.option('loadPanel.indicatorSrc', e.value);
        }
    });
    
    $("#buttonContainer").dxButton({
        text: 'Reload Data',
        width: 150,
        onClick: function (e) {
            var pivotGrid = $('#pivotGridContainer').dxPivotGrid('instance');
            pivotGrid.getDataSource().load();
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    indicatorSrc: ko.observable(undefined),
    pivotGridInstance: {}
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.indicatorSrc = undefined;
        $scope.pivotGridInstance = {};
        $scope.savePivotGridInstance = function (e) {
            $scope.pivotGridInstance = e.component;
        };
        $scope.reloadData = function (e) {
            $scope.pivotGridInstance.getDataSource().load();
        }
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->