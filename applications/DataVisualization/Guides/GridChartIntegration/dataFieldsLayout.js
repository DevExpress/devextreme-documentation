$(function () {
    var pivotGrid = $("#gridContainer").dxPivotGrid({
        showColumnTotals: false,
        showRowGrandTotals: false,
        showColumnGrandTotals: false,
        fieldChooser: { enabled: false },
        dataSource: {    
            fields: [{
                caption: "Region",
                width: 80,
                dataField: "region",
                area: "row",
                filterType: 'include',
                filterValues: ["Europe"],
                expanded: true
            }, {
                caption: "City",
                dataField: "city",
                area: "row"
            }, {
                dataField: "date",
                dataType: "date",
                area: "column",
                filterType: 'include',
                filterValues: [[2014]]
            }, {
                groupName: "date",
                groupInterval: "year"
            }, {
                caption: "Total",
                dataField: "amount",
                dataType: "number",
                summaryType: "sum",
                format: "currency",
                area: "data"
            },{
                caption: "Avg",
                dataField: "amount",
                dataType: "number",
                summaryType: "avg",
                format: "currency",
                area: "data"
            }],
            store: sales
        }
    }).dxPivotGrid("instance");

    $("#chartContainer").dxChart({
        dataSource: [],
        commonSeriesSettings: { type: 'bar' },
        animation: { enabled: false },
        legend: {
            itemTextPosition: 'bottom'
        },
        onInitialized: function(e) {
            pivotGrid.bindChart("#chartContainer", seriesLayout);
        }
    });
    
    var seriesLayout = {
        putDataFieldsInto: "series",
        alternateDataFields: true
    }
    
    $("#selectBoxContainer").dxSelectBox({
        dataSource: ["series", "args"],
        value: seriesLayout.putDataFieldsInto,
        onValueChanged: function (e) {
            seriesLayout.putDataFieldsInto = e.value;
            pivotGrid.bindChart("#chartContainer", seriesLayout);
        }
    });
    
    $("#checkBoxContainer").dxCheckBox({
        text: "alternateDataFields",
        value: seriesLayout.alternateDataFields,
        onValueChanged: function (e) {
            seriesLayout.alternateDataFields = e.value;
            pivotGrid.bindChart("#chartContainer", seriesLayout);
        }
    });
});