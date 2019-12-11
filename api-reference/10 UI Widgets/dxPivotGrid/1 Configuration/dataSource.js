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
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    pivotGridOptions: {
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
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.pivotGridOptions = {
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
        }
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->