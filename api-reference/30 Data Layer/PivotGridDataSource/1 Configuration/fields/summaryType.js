//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
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
                area: "column"
            }, {
                caption: "Sales (Sum)",
                dataField: "amount",
                dataType: "number",
                summaryType: "sum",
                format: "currency",
                area: "data"
            }]
        },
        fieldChooser: { enabled: false },
        fieldPanel: {
            visible: true,
            allowFieldDragging: false,
            showFilterFields: false
        },
        onContextMenuPreparing: function (e) {
            if (e.field && e.field.area == "data") {
                var dataSource = e.component.getDataSource();
                
                var changeSummaryType = function (clickedItem) {
                    dataSource.field(e.field.index, {
                        caption: "Sales (" + clickedItem.itemData.text + ")",
                        format: clickedItem.itemData.value == 'count' ? undefined : 'currency',
                        summaryType: clickedItem.itemData.value
                    });
                    dataSource.load();
                };
                
                var items = [
                    { text: 'Sum', value: 'sum', onItemClick: changeSummaryType },
                    { text: 'Avg', value: 'avg', onItemClick: changeSummaryType },
                    { text: 'Min', value: 'min', onItemClick: changeSummaryType },
                    { text: 'Max', value: 'max', onItemClick: changeSummaryType },
                    { text: 'Count', value: 'count', onItemClick: changeSummaryType }
                ];
                
                $.each(items, function (_, item) {
                    if (item.value == dataSource.field(e.field.index).summaryType)
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
                area: "column"
            }, {
                caption: "Sales (Sum)",
                dataField: "amount",
                dataType: "number",
                summaryType: "sum",
                format: "currency",
                area: "data"
            }]
        },
        fieldChooser: { enabled: false },
        fieldPanel: {
            visible: true,
            allowFieldDragging: false,
            showFilterFields: false
        },
        onContextMenuPreparing: function (e) {
            if (e.field && e.field.area == "data") {
                var dataSource = e.component.getDataSource();
                
                var changeSummaryType = function (clickedItem) {
                    dataSource.field(e.field.index, {
                        caption: "Sales (" + clickedItem.itemData.text + ")",
                        format: clickedItem.itemData.value == 'count' ? undefined : 'currency',
                        summaryType: clickedItem.itemData.value
                    });
                    dataSource.load();
                };
                
                var items = [
                    { text: 'Sum', value: 'sum', onItemClick: changeSummaryType },
                    { text: 'Avg', value: 'avg', onItemClick: changeSummaryType },
                    { text: 'Min', value: 'min', onItemClick: changeSummaryType },
                    { text: 'Max', value: 'max', onItemClick: changeSummaryType },
                    { text: 'Count', value: 'count', onItemClick: changeSummaryType }
                ];
                
                $.each(items, function (_, item) {
                    if (item.value == dataSource.field(e.field.index).summaryType)
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
        $scope.sales = sales;
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
                    area: "column"
                }, {
                    caption: "Sales (Sum)",
                    dataField: "amount",
                    dataType: "number",
                    summaryType: "sum",
                    format: "currency",
                    area: "data"
                }]
            },
            fieldChooser: { enabled: false },
            fieldPanel: {
                visible: true,
                allowFieldDragging: false,
                showFilterFields: false
            },
            onContextMenuPreparing: function (e) {
                if (e.field && e.field.area == "data") {
                    var dataSource = e.component.getDataSource();
                    
                    var changeSummaryType = function (clickedItem) {
                        dataSource.field(e.field.index, {
                            caption: "Sales (" + clickedItem.itemData.text + ")",
                            format: clickedItem.itemData.value == 'count' ? undefined : 'currency',
                            summaryType: clickedItem.itemData.value
                        });
                        dataSource.load();
                    };
                    
                    var items = [
                        { text: 'Sum', value: 'sum', onItemClick: changeSummaryType },
                        { text: 'Avg', value: 'avg', onItemClick: changeSummaryType },
                        { text: 'Min', value: 'min', onItemClick: changeSummaryType },
                        { text: 'Max', value: 'max', onItemClick: changeSummaryType },
                        { text: 'Count', value: 'count', onItemClick: changeSummaryType }
                    ];
                    
                    $.each(items, function (_, item) {
                        if (item.value == dataSource.field(e.field.index).summaryType)
                            item.selected = true;
                    });
                    
                    Array.prototype.push.apply(e.items, items);
                }
            }
        };
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->