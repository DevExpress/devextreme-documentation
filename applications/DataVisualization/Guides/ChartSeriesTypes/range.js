$(function() {
    var arizonaTemperatures = [
        { month: "January", high: 20, low: 8 },
        { month: "February", high: 22, low: 9 },
        { month: "March", high: 26, low: 12 },
        { month: "April", high: 30, low: 16 },
        { month: "May", high: 35, low: 21 },
        { month: "June", high: 40, low: 25 },
        { month: "July", high: 41, low: 28 },
        { month: "August", high: 40, low: 28 },
        { month: "September", high: 38, low: 24 },
        { month: "October", high: 32, low: 18 },
        { month: "November", high: 25, low: 11 },
        { month: "December", high: 20, low: 7 }
    ];

    var chart = $("#chart").dxChart({
        dataSource: arizonaTemperatures,
        series: {
            type: 'rangearea',
            argumentField: "month",
            rangeValue1Field: "high",
            rangeValue2Field: "low",
            label: {
                visible: true
            },
            color: "#1e96ce"
        },
        title: 'Average Temperatures in Phoenix, Arizona',
        legend: {
            visible: false
        },
        valueAxis: {
            title: "Temperature, &deg;C"
        }
    }).dxChart("instance");

    $("#selectBox").dxSelectBox({
        items: [
            { text: "Range Area", value: "rangearea" },
            { text: "Range Bar", value: "rangebar" }
        ],
        valueExpr: "value",
        displayExpr: "text",
        value: "rangearea",
        onValueChanged: function (e) {
            chart.option("series.type", e.value);
        }
    });
});