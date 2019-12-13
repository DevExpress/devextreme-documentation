$(function(){
    var legendOrientation = "vertical";
    var legendColumnCount = 1;
    var legendRowCount = 1;
    var legendRowItemSpacing = 8;
    var legendColumnItemSpacing = 20;
    
    var chart = $("#chart").dxChart({
        dataSource: [
            { x: "A", y1: 1, y2: 2, y3: 3, y4: 4, y5: 5 },
            { x: "B", y1: 1, y2: 2, y3: 3, y4: 4, y5: 5 },
            { x: "C", y1: 1, y2: 2, y3: 3, y4: 4, y5: 5 },
            { x: "D", y1: 1, y2: 2, y3: 3, y4: 4, y5: 5 }
        ],
        commonSeriesSettings: {
            argumentField: 'x'
        },
        series: [
            { valueField: 'y1' },
            { valueField: 'y2' },
            { valueField: 'y3' },
            { valueField: 'y4' },
            { valueField: 'y5' }
        ],
        animation: false,
        // title: 'Chart Title',
        legend: {
            orientation: legendOrientation,
            columnCount: legendColumnCount
        }
    }).dxChart("instance");
    
    $("#orientation").dxSelectBox({
        items: ['vertical', 'horizontal'],
        value: legendOrientation,
        onValueChanged: function (e) {
            if(e.value == "vertical") {
                columnCountEditor.option("disabled", false);
                chart.option({
                    legend: {
                        orientation: e.value,
                        rowCount: 0,
                        columnCount: columnCountEditor.option("value"),
                        horizontalAlignment: 'right'
                    }
                });
                rowCountEditor.option("disabled", true);
            } else {
                rowCountEditor.option("disabled", false);
                chart.option({
                    legend: {
                        orientation: e.value,
                        rowCount: rowCountEditor.option("value"),
                        columnCount: 0,
                        horizontalAlignment: 'center'
                    }
                });
                columnCountEditor.option("disabled", true);
            }
        }
    });
    
    var columnCountEditor = $("#columnCount").dxNumberBox({
        value: legendColumnCount,
        step: 1,
        min: 1, max: 3,
        showSpinButtons: true,
        onValueChanged: function (e) {
         	chart.option("legend.columnCount", e.value)
        }
    }).dxNumberBox("instance");
    
    var rowCountEditor = $("#rowCount").dxNumberBox({
        value: legendRowCount,
        step: 1,
        min: 1, max: 3,
        disabled: true,
        showSpinButtons: true,
        onValueChanged: function (e) {
         	chart.option("legend.rowCount", e.value)
        }
    }).dxNumberBox("instance");

    $("#rowItemSpacing").dxNumberBox({
        value: legendRowItemSpacing,
        step: 1,
        min: 0, max: 50,
        showSpinButtons: true,
        onValueChanged: function (e) {
         	chart.option("legend.rowItemSpacing", e.value)
        }
    });

    $("#columnItemSpacing").dxNumberBox({
        value: legendColumnItemSpacing,
        step: 1,
        min: 0, max: 50,
        showSpinButtons: true,
        onValueChanged: function (e) {
         	chart.option("legend.columnItemSpacing", e.value)
        }
    });
});