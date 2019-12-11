$(function(){
    var legendPosition = "outside";
    var legendHorizontalAlignment = "right";
    var legendVerticalAlignment = "top";
    
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
            position: legendPosition,
            horizontalAlignment: legendHorizontalAlignment,
            verticalAlignment: legendVerticalAlignment
        }
    }).dxChart("instance");
    
    $("#position").dxSelectBox({
        items: ['outside', 'inside'],
        value: legendPosition,
        onValueChanged: function (e) {
            chart.option("legend.position", e.value);

            /*if(e.value == "vertical") {
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
            }*/
        }
    });

    $("#horizontalAlignment").dxSelectBox({
        items: ['left', 'center', 'right'],
        value: legendHorizontalAlignment,
        onValueChanged: function (e) {
            chart.option("legend.horizontalAlignment", e.value);
        }
    });

    $("#verticalAlignment").dxSelectBox({
        items: ['top', 'bottom'],
        value: legendVerticalAlignment,
        onValueChanged: function (e) {
            chart.option("legend.verticalAlignment", e.value);
        }
    });
});