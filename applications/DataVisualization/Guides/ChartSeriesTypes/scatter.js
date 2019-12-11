$(function() {
    var iceCreamSales = [
        { temperature: 14.2, sales: 215 },
        { temperature: 16.4, sales: 325 },
        { temperature: 11.9, sales: 185 },
        { temperature: 15.2, sales: 332 },
        { temperature: 18.5, sales: 406 },
        { temperature: 22.1, sales: 522 },
        { temperature: 19.4, sales: 412 },
        { temperature: 25.1, sales: 614 },
        { temperature: 23.4, sales: 544 },
        { temperature: 18.1, sales: 421 },
        { temperature: 22.6, sales: 445 },
        { temperature: 17.2, sales: 408 }
    ];

    $("#chart").dxChart({
        dataSource: iceCreamSales,
        series: {
            type: "scatter",
            argumentField: "temperature",
            valueField: "sales",
            color: "#42bff4"
        },
        argumentAxis: {
            title: "Temperature, &deg;C"
        },
        title: "Ice Cream Sales vs Temperature",
        legend: { visible: false }
    });
});