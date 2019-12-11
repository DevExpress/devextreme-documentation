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
    
    $("#switchContainer").dxSwitch({
        onText: 'true',
        offText: 'false',
        value: true,
        onValueChanged: function (e) {
            var pivotGrid = $('#pivotGridContainer').dxPivotGrid('instance');
            pivotGrid.option('loadPanel.showIndicator', e.value);
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
    showLoadingIndicator: ko.observable(true),
    pivotGridInstance: {}
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.showLoadingIndicator = true;
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