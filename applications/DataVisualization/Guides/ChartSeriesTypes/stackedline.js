$(function() {
    var usSummerOlympics = [
        { year: 1896, gold: 11, silver: 7, bronze: 2 },
        { year: 1900, gold: 19, silver: 14, bronze: 14 },
        { year: 1904, gold: 78, silver: 82, bronze: 79 },
        { year: 1908, gold: 23, silver: 12, bronze: 12 },
        { year: 1912, gold: 25, silver: 19, bronze: 19 },
        { year: 1920, gold: 41, silver: 27, bronze: 27 },
        { year: 1924, gold: 45, silver: 27, bronze: 27 },
        { year: 1928, gold: 22, silver: 18, bronze: 16 },
        { year: 1932, gold: 41, silver: 32, bronze: 30 },
        { year: 1936, gold: 24, silver: 20, bronze: 12 },
        { year: 1948, gold: 38, silver: 27, bronze: 19 },
        { year: 1952, gold: 40, silver: 19, bronze: 17 },
        { year: 1956, gold: 32, silver: 25, bronze: 17 },
        { year: 1960, gold: 34, silver: 21, bronze: 16 },
        { year: 1964, gold: 36, silver: 26, bronze: 28 },
        { year: 1968, gold: 45, silver: 28, bronze: 34 },
        { year: 1972, gold: 33, silver: 31, bronze: 30 },
        { year: 1976, gold: 34, silver: 35, bronze: 25 },
        { year: 1980, gold: null, silver: null, bronze: null },
        { year: 1984, gold: 83, silver: 61, bronze: 30 },
        { year: 1988, gold: 36, silver: 31, bronze: 27 },
        { year: 1992, gold: 37, silver: 34, bronze: 37 },
        { year: 1996, gold: 44, silver: 32, bronze: 25 },
        { year: 2000, gold: 37, silver: 24, bronze: 32 },
        { year: 2004, gold: 36, silver: 36, bronze: 26 },
        { year: 2008, gold: 36, silver: 38, bronze: 37 },
        { year: 2012, gold: 46, silver: 28, bronze: 29 },
        { year: 2016, gold: 46, silver: 37, bronze: 38 }
    ];

    var chart = $("#chart").dxChart({
        dataSource: usSummerOlympics,
        commonSeriesSettings: {
            argumentField: "year",
            type: "stackedline"
        },
        series: [
            { valueField: "gold", name: "Gold", color: "#FFD700" },
            { valueField: "silver", name: "Silver", color: "#C0C0C0" },
            { valueField: "bronze", name: "Bronze", color: "#CD7F32" }
        ],
        title: "Medals won by the US team at Summer Olympics",
        argumentAxis: {
            type: "discrete",
            valueMarginsEnabled: false,
            constantLines: [{
                value: 1980,
                label: {
                    text: "Did not participate"
                },
                color: "darkgray"
            }]
        },
        legend: {
            verticalAlignment: "top",
            horizontalAlignment: "center"
        },
        tooltip: {
            enabled: true
        }
    }).dxChart("instance");

    $("#selectBox").dxSelectBox({
        items: [
            { text: "Stacked Line", value: "stackedline" },
            { text: "Stacked Spline", value: "stackedspline" },
            { text: "Full-Stacked Line", value: "fullstackedline" },
            { text: "Full-Stacked Spline", value: "fullstackedspline" }
        ],
        valueExpr: "value",
        displayExpr: "text",
        value: "stackedline",
        onValueChanged: function (e) {
            chart.option("commonSeriesSettings.type", e.value);
        }
    });
});