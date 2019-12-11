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
                groupInterval: "year",
                expanded: true
            }, {
                caption: "Total",
                dataField: "amount",
                dataType: "number",
                summaryType: "sum",
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
            itemTextPosition: 'bottom',
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        onInitialized: function(e) {
            pivotGrid.bindChart("#chartContainer", {
                inverted: false,
                customizeChart: function (opt) {
                    opt.valueAxis[0].label.visible = false;
                    opt.valueAxis[0].title = ""
                }
            });
        }
    });

    $("#checkBoxContainer").dxCheckBox({
        text: "inverted",
        value: false,
        onValueChanged: function (e) {
            pivotGrid.bindChart("#chartContainer", {
                inverted: e.value,
                customizeChart: function (opt) {
                    opt.valueAxis[0].label.visible = false;
                    opt.valueAxis[0].title = ""
                }
            });
        }
    });
});