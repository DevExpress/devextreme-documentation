var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
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
        area: "column"
    }, {
        caption: "Sales Total",
        dataField: "amount",
        dataType: "number",
        summaryType: "sum",
        format: "currency",
        area: "data"
    }, {
        caption: "Var",
        dataField: "amount",
        dataType: "number",
        summaryDisplayMode: 'absoluteVariation',
        area: "data"
    }]
});

//<!--@jQuery-->
$(function () {
    $('#pivotGridContainer').dxPivotGrid({
        dataSource: pivotGridDataSource,
        fieldChooser: { enabled: false },
        fieldPanel: {
            visible: true,
            allowFieldDragging: false,
            showFilterFields: false
        },
        onContextMenuPreparing: function (e) {
            if (e.field.caption == "Var" ) {
                var dataSource = e.component.getDataSource();

                var changeSummaryDisplayMode = function (clickedItem) {
                    dataSource.field(e.field.index, {
                        summaryDisplayMode: clickedItem.itemData.value
                    });
                    dataSource.load();
                };

                var items = [
                    { text: 'Absolute Variation', value: 'absoluteVariation', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent Variation', value: 'percentVariation', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent of Column Total', value: 'percentOfColumnTotal', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent of Row Total', value: 'percentOfRowTotal', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent of Column Grand Total', value: 'percentOfColumnGrandTotal', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent of Row Grand Total', value: 'percentOfRowGrandTotal', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent of Grand Total', value: 'percentOfGrandTotal', onItemClick: changeSummaryDisplayMode }
                ];

                $.each(items, function (_, item) {
                    if (item.value == dataSource.field(e.field.index).summaryDisplayMode)
                        item.selected = true;
                });

                Array.prototype.push.apply(e.items, items);
            }
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    pivotGridOptions: {
        dataSource: pivotGridDataSource,
        fieldChooser: { enabled: false },
        fieldPanel: {
            visible: true,
            allowFieldDragging: false,
            showFilterFields: false
        },
        onContextMenuPreparing: function (e) {
            if (e.field.caption == "Var" ) {
                var dataSource = e.component.getDataSource();

                var changeSummaryDisplayMode = function (clickedItem) {
                    dataSource.field(e.field.index, {
                        summaryDisplayMode: clickedItem.itemData.value
                    });
                    dataSource.load();
                };

                var items = [
                    { text: 'Absolute Variation', value: 'absoluteVariation', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent Variation', value: 'percentVariation', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent of Column Total', value: 'percentOfColumnTotal', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent of Row Total', value: 'percentOfRowTotal', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent of Column Grand Total', value: 'percentOfColumnGrandTotal', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent of Row Grand Total', value: 'percentOfRowGrandTotal', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent of Grand Total', value: 'percentOfGrandTotal', onItemClick: changeSummaryDisplayMode }
                ];

                $.each(items, function (_, item) {
                    if (item.value == dataSource.field(e.field.index).summaryDisplayMode)
                        item.selected = true;
                });

                Array.prototype.push.apply(e.items, items);
            }
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.pivotGridDataSource = pivotGridDataSource;
        $scope.pivotGridOptions = {
            dataSource: $scope.pivotGridDataSource,
            fieldChooser: { enabled: false },
            fieldPanel: {
                visible: true,
                allowFieldDragging: false,
                showFilterFields: false
            },
            onContextMenuPreparing: function (e) {
                if (e.field.caption == "Var" ) {
                    var dataSource = e.component.getDataSource();

                    var changeSummaryDisplayMode = function (clickedItem) {
                        dataSource.field(e.field.index, {
                            summaryDisplayMode: clickedItem.itemData.value
                        });
                        dataSource.load();
                    };

                    var items = [
                        { text: 'Absolute Variation', value: 'absoluteVariation', onItemClick: changeSummaryDisplayMode },
                        { text: 'Percent Variation', value: 'percentVariation', onItemClick: changeSummaryDisplayMode },
                        { text: 'Percent of Column Total', value: 'percentOfColumnTotal', onItemClick: changeSummaryDisplayMode },
                        { text: 'Percent of Row Total', value: 'percentOfRowTotal', onItemClick: changeSummaryDisplayMode },
                        { text: 'Percent of Column Grand Total', value: 'percentOfColumnGrandTotal', onItemClick: changeSummaryDisplayMode },
                        { text: 'Percent of Row Grand Total', value: 'percentOfRowGrandTotal', onItemClick: changeSummaryDisplayMode },
                        { text: 'Percent of Grand Total', value: 'percentOfGrandTotal', onItemClick: changeSummaryDisplayMode }
                    ];

                    $.each(items, function (_, item) {
                        if (item.value == dataSource.field(e.field.index).summaryDisplayMode)
                            item.selected = true;
                    });

                    Array.prototype.push.apply(e.items, items);
                }
            }
        }
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->