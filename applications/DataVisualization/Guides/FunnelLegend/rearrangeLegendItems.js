$(function(){
    var legendOrientation = "vertical";
    var legendColumnCount = 1;
    var legendRowCount = 1;
    var legendRowItemSpacing = 8;
    var legendColumnItemSpacing = 20;
    
    var chart = $("#chart").dxFunnel({
        dataSource: [
            { x: "Item 4", y1: 1 },
            { x: "Item 3", y1: 2 },
            { x: "Item 2", y1: 3 },
            { x: "Item 1", y1: 4 }
        ],
        argumentField: 'x',
        valueField: 'y1',
        label: { visible: false },
        legend: {
            visible: true,
            orientation: legendOrientation,
            columnCount: legendColumnCount
        }
    }).dxFunnel("instance");
    
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
        min: 1, max: 2,
        showSpinButtons: true,
        onValueChanged: function (e) {
         	chart.option("legend.columnCount", e.value)
        }
    }).dxNumberBox("instance");
    
    var rowCountEditor = $("#rowCount").dxNumberBox({
        value: legendRowCount,
        step: 1,
        min: 1, max: 2,
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