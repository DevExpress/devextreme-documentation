//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: {
            store: sales,
            fields: [{
                dataField: "region",
                width: 120,
                area: "row",
                expanded: true
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
        fieldChooser: { enabled: true }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    pivotGridOptions: {
        dataSource: {
            store: sales,
            fields: [{
                dataField: 'region',
                width: 120,
                area: 'row',
                expanded: true
            }, {
                dataField: 'city',
                width: 150,
                area: 'row',
                selector: function (data) {
                    return data.city + ' (' + data.country + ')';
                }
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
        fieldChooser: { enabled: true }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.sales = sales;
        $scope.pivotGridOptions = {
            dataSource: {
                store: $scope.sales,
                fields: [{
                    dataField: 'region',
                    width: 120,
                    area: 'row',
                    expanded: true
                }, {
                    dataField: 'city',
                    width: 150,
                    area: 'row',
                    selector: function (data) {
                        return data.city + ' (' + data.country + ')';
                    }
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
            fieldChooser: { enabled: true }
        };
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->