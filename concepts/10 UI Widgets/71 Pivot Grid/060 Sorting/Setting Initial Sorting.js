//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: {
            store: sales,
            fields: [{
                dataField: "region",
                width: 120,
                area: "row",
                sortBySummaryField: 'amount',
                sortBySummaryPath: [2015]
            }, {
                dataField: "city",
                width: 150,
                area: "row",
                selector: function (data) {
                    return data.city + " (" + data.country + ")";
                }
            }, {
                dataField: "date",
                dataType: "date",
                area: "column"
            }, {
                dataField: "amount",
                summaryType: "sum",
                format: "currency",
                area: "data"
            }]
        },
        fieldChooser: { enabled: false },
        allowSorting: false,
        allowSortingBySummary: false
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    pivotGridOptions: {
        dataSource: {
            store: sales,
            fields: [{
                dataField: "region",
                width: 120,
                area: "row",
                sortBySummaryField: 'amount',
                sortBySummaryPath: [2015]
            }, {
                dataField: "city",
                width: 150,
                area: "row",
                selector: function (data) {
                    return data.city + " (" + data.country + ")";
                }
            }, {
                dataField: "date",
                dataType: "date",
                area: "column"
            }, {
                dataField: "amount",
                summaryType: "sum",
                format: "currency",
                area: "data"
            }]
        },
        fieldChooser: { enabled: false },
        allowSorting: false,
        allowSortingBySummary: false
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
                store: sales,
                fields: [{
                    dataField: 'region',
                    width: 120,
                    area: 'row',
                    sortBySummaryField: 'amount',
                    sortBySummaryPath: [2015]
                }, {
                    dataField: 'city',
                    width: 150,
                    area: 'row',
                    selector: $scope.cityText
                }, {
                    dataField: 'date',
                    dataType: 'date',
                    area: 'column'
                }, {
                    dataField: 'amount',
                    summaryType: 'sum',
                    format: 'currency',
                    area: 'data'
                }]
            },
            fieldChooser: { enabled: false },
            allowSorting: false,
            allowSortingBySummary: false
        };
        $scope.sales = sales;
        $scope.cityText = function (data) {
            return data.city + ' (' + data.country + ')';
        };
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->