$(function(){
    var pieStartAngle = 0;
    var pieSegmentsDirection = "clockwise";
    
    var chart = $("#chart").dxPieChart({
        dataSource: [
            { x: "Point 1", y1: 1 },
            { x: "Point 2", y1: 2 },
            { x: "Point 3", y1: 3 },
            { x: "Point 4", y1: 4 }
        ],
        palette: "Pastel",
        series: {
            argumentField: 'x',
            valueField: 'y1',
            label: {
                visible: true,
                position: "inside",
                border: { visible: true }
            }
        },
        legend: { visible: false },
        animation: false,
        startAngle: pieStartAngle,
        segmentsDirection: pieSegmentsDirection
    }).dxPieChart("instance");

    $("#segmentsDirection").dxSelectBox({
        items: ['clockwise', 'anticlockwise'],
        value: pieSegmentsDirection,
        onValueChanged: function (e) {
            chart.option("segmentsDirection", e.value);
        }
    });

    $("#startAngle").dxNumberBox({
        value: pieStartAngle,
        step: 1,
        min: -360, max: 360,
        showSpinButtons: true,
        onValueChanged: function (e) {
         	chart.option("startAngle", e.value)
        }
    });
});