//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: {
            store: sales,
            fields: [{
                dataField: "region",
                width: 120,
                area: "row"
            }, {
                dataField: "city",
                width: 150,
                area: "row",
                selector: function (data) {
                    return data.city + " (" + data.country + ")";
                },
                allowSorting: false
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
        fieldChooser: {
            enabled: true,
            height: 450
        },
        showRowGrandTotals: false,
        showColumnGrandTotals: false,
        allowSorting: true
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
                area: "row"
            }, {
                dataField: "city",
                width: 150,
                area: "row",
                selector: function (data) {
                    return data.city + " (" + data.country + ")";
                },
                allowSorting: false
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
        fieldChooser: {
            enabled: true,
            height: 450
        },
        showRowGrandTotals: false,
        showColumnGrandTotals: false,
        allowSorting: true
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
                    area: 'row'
                }, {
                    dataField: 'city',
                    width: 150,
                    area: 'row',
                    selector: $scope.cityText,
                    allowSorting: false
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
            fieldChooser: {
                enabled: true,
                height: 450
            },
            showRowGrandTotals: false,
            showColumnGrandTotals: false,
            allowSorting: true
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