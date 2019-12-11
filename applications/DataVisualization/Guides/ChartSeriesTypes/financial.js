$(function() {
    var financialData = [
        { date: new Date(1994,2,1), low: 24.00, high: 25.00, open: 25.00, close: 24.875 },
        { date: new Date(1994,2,2), low: 23.625, high: 25.125, open: 24.00, close: 24.875 },
        { date: new Date(1994,2,3), low: 26.25, high: 28.25, open: 26.75, close: 27.00 },
        { date: new Date(1994,2,4), low: 26.50, high: 27.875, open: 26.875, close: 27.25 },
        { date: new Date(1994,2,7), low: 26.375, high: 27.50, open: 27.375, close: 26.75 },
        { date: new Date(1994,2,8), low: 25.75,high:  26.875, open: 26.75, close: 26.00 },
        { date: new Date(1994,2,9), low: 25.75, high: 26.75, open: 26.125, close: 26.25 },
        { date: new Date(1994,2,10), low: 25.75, high: 26.375, open: 26.375, close: 25.875 },
        { date: new Date(1994,2,11), low: 24.875, high: 26.125, open: 26.00, close: 25.375 },
        { date: new Date(1994,2,14), low: 25.125, high: 26.00, open: 25.625, close: 25.75 },
        { date: new Date(1994,2,15), low: 25.875, high: 26.625, open: 26.125, close: 26.375 },
        { date: new Date(1994,2,16), low: 26.25, high: 27.375, open: 26.25, close: 27.25 },
        { date: new Date(1994,2,17), low: 26.875, high: 27.25, open: 27.125, close: 26.875 },
        { date: new Date(1994,2,18), low: 26.375, high: 27.125, open: 27.00, close: 27.125 },
        { date: new Date(1994,2,21), low: 26.75, high: 27.875, open: 26.875, close: 27.75 },
        { date: new Date(1994,2,22), low: 26.75, high: 28.375, open: 27.50, close: 27.00 },
        { date: new Date(1994,2,23), low: 26.875, high: 28.125, open: 27.00, close: 28.00 },
        { date: new Date(1994,2,24), low: 26.25, high: 27.875, open: 27.75, close: 27.625 },
        { date: new Date(1994,2,25), low: 27.50, high: 28.75, open: 27.75, close: 28.00 },
        { date: new Date(1994,2,28), low: 25.75, high: 28.25, open: 28.00, close: 27.25 },
        { date: new Date(1994,2,29), low: 26.375, high: 27.50, open: 27.50, close: 26.875 },
        { date: new Date(1994,2,30), low: 25.75, high: 27.50, open: 26.375, close: 26.25 },
        { date: new Date(1994,2,31), low: 24.75, high: 27.00, open: 26.50, close: 25.25 }
    ];

    var chart = $("#chart").dxChart({
        dataSource: financialData,
        series: { type: 'candlestick' },
        title: 'Stock Prices',
        legend: {
            visible: false
        },
        tooltip: { enabled: true },
        argumentAxis: {
            label: { format: 'dd/MM' }
        }
    }).dxChart("instance");

    $("#selectBox").dxSelectBox({
        items: [
            { text: "Candlestick", value: "candlestick" },
            { text: "Stock", value: "stock" }
        ],
        valueExpr: "value",
        displayExpr: "text",
        value: "candlestick",
        onValueChanged: function (e) {
            chart.option("series.type", e.value);
        }
    });
});