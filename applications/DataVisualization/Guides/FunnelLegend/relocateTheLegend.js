$(function(){
    var legendHorizontalAlignment = "right";
    var legendVerticalAlignment = "top";
    
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
            horizontalAlignment: legendHorizontalAlignment,
            verticalAlignment: legendVerticalAlignment
        }
    }).dxFunnel("instance");

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