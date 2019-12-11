//<!--@jQuery-->
$(function () {
    var pivotGridInstance = $("#pivotGridContainer").dxPivotGrid({
        dataSource: {
            store: sales,
            fields: [{
                caption: "Region",
                width: 120,
                dataField: "region",
                area: "row" 
            }, {
                caption: "City",
                dataField: "city",
                width: 100,
                area: "row"
            }, {
                dataField: "date",
                dataType: "date",
                area: "column",
                filterType: 'exclude',
                filterValues: [[2015]]
            }, {
                caption: "Total",
                dataField: "amount",
                dataType: "number",
                summaryType: "sum",
                format: "currency",
                area: "data"
            }, {
                caption: "Average",
                dataField: "amount",
                dataType: "number",
                summaryType: "avg",
                format: "currency",
                area: "data"
            }]
        },
        fieldChooser: { enabled: false }
    }).dxPivotGrid('instance');
    
    $("#chartContainer").dxChart({
        dataSource: [],
        commonSeriesSettings: {
            type: 'bar'
        },
        onInitialized: function (e) {
            pivotGridInstance.bindChart(e.component, {
                alternateDataFields: false,
                dataFieldsDisplayMode: 'splitPanes',
                customizeChart: function (chartOptions) {
                    var colors = ['rgba(204, 230, 255, 0.3)', 'rgba(230, 255, 230, 0.5)'];
                    $.each(chartOptions.panes, function (i, pane) {
                        $.extend(pane, {
                            backgroundColor: colors[i]
                        })
                    });
                }
            });
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    pivotGridInstance: {},
    pivotGridOptions: {
        dataSource: {
            store: sales,
            fields: [{
                caption: "Region",
                width: 120,
                dataField: "region",
                area: "row" 
            }, {
                caption: "City",
                dataField: "city",
                width: 100,
                area: "row"
            }, {
                dataField: "date",
                dataType: "date",
                area: "column",
                filterType: 'exclude',
                filterValues: [[2015]]
            }, {
                caption: "Total",
                dataField: "amount",
                dataType: "number",
                summaryType: "sum",
                format: "currency",
                area: "data"
            }, {
                caption: "Average",
                dataField: "amount",
                dataType: "number",
                summaryType: "avg",
                format: "currency",
                area: "data"
            }]
        },
        fieldChooser: { enabled: false },
        onInitialized: function (e) {
            viewModel.pivotGridInstance = e.component;
        }
    },
    chartOptions: {
        dataSource: [],
        commonSeriesSettings: {
            type: 'bar'
        },
        onInitialized: function (e) {
            viewModel.pivotGridInstance.bindChart(e.component, {
                alternateDataFields: false,
                dataFieldsDisplayMode: 'splitPanes',
                customizeChart: function (chartOptions) {
                    var colors = ['rgba(204, 230, 255, 0.3)', 'rgba(230, 255, 230, 0.5)'];
                    $.each(chartOptions.panes, function (i, pane) {
                        $.extend(pane, {
                            backgroundColor: colors[i]
                        })
                    });
                }
            })
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('widgetController', function ($scope) {
        $scope.sales = sales;
        $scope.pivotGridInstance = {};
        $scope.pivotGridOptions = {
            dataSource: {
                store: $scope.sales,
                fields: [{
                    caption: "Region",
                    width: 120,
                    dataField: "region",
                    area: "row" 
                }, {
                    caption: "City",
                    dataField: "city",
                    width: 100,
                    area: "row"
                }, {
                    dataField: "date",
                    dataType: "date",
                    area: "column",
                    filterType: 'exclude',
                    filterValues: [[2015]]
                }, {
                    caption: "Total",
                    dataField: "amount",
                    dataType: "number",
                    summaryType: "sum",
                    format: "currency",
                    area: "data"
                }, {
                    caption: "Average",
                    dataField: "amount",
                    dataType: "number",
                    summaryType: "avg",
                    format: "currency",
                    area: "data"
                }]
            },
            fieldChooser: { enabled: false },
            onInitialized: function (e) {
                $scope.pivotGridInstance = e.component;
            }
        };
        $scope.chartOptions = {
            dataSource: [],
            commonSeriesSettings: {
                type: 'bar'
            },
            onInitialized: function (e) {
                $scope.pivotGridInstance.bindChart(e.component, {
                    alternateDataFields: false,
                    dataFieldsDisplayMode: 'splitPanes',
                    customizeChart: function (chartOptions) {
                        var colors = ['rgba(204, 230, 255, 0.3)', 'rgba(230, 255, 230, 0.5)'];
                        $.each(chartOptions.panes, function (i, pane) {
                            $.extend(pane, {
                                backgroundColor: colors[i]
                            })
                        });
                    }
                })
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->