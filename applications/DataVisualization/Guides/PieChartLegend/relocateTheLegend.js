$(function(){
    var legendHorizontalAlignment = "right";
    var legendVerticalAlignment = "top";
    
    var chart = $("#chart").dxPieChart({
        dataSource: [
            { x: "Point 1", y1: 1 },
            { x: "Point 2", y1: 1 },
            { x: "Point 3", y1: 1 },
            { x: "Point 4", y1: 1 }
        ],
        commonSeriesSettings: {
            argumentField: 'x'
        },
        series: [
            { valueField: 'y1' }
        ],
        animation: false,
        legend: {
            horizontalAlignment: legendHorizontalAlignment,
            verticalAlignment: legendVerticalAlignment
        },
        startAngle: 45
    }).dxPieChart("instance");

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