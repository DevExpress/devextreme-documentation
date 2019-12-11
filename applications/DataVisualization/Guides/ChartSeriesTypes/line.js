$(function() {
    var oscarViewers = [
        { year: 2001, viewers: 42.9 },
        { year: 2002, viewers: 41.8 },
        { year: 2003, viewers: 33 },
        { year: 2004, viewers: 43.5 },
        { year: 2005, viewers: 42.1 },
        { year: 2006, viewers: 38.9 },
        { year: 2007, viewers: 40.2 },
        { year: 2008, viewers: 32 },
        { year: 2009, viewers: 36.3 },
        { year: 2010, viewers: 41.7 },
        { year: 2011, viewers: 37.9 },
        { year: 2012, viewers: 39.5 },
        { year: 2013, viewers: 40.4 },
        { year: 2014, viewers: 43.7 },
        { year: 2015, viewers: 37.3 },
        { year: 2016, viewers: 34.3 },
        { year: 2017, viewers: 32.9 }
    ];

    var chart = $("#chart").dxChart({
        dataSource: oscarViewers,
        series: {
            argumentField: "year",
            valueField: "viewers",
            color: "rgba(104, 169, 77, 0.8)",
            label: {
                visible: true
            }
        },
        title: "Oscar Viewers",
        legend: { visible: false },
        valueAxis: {
            title: "Viewers, mln"
        },
        argumentAxis: {
            minValueMargin: 0.05,
            maxValueMargin: 0.05,
            type: "discrete"
        }
    }).dxChart("instance");

    $("#selectBox").dxSelectBox({
        items: [
            { text: "Line", value: "line" },
            { text: "Spline", value: "spline" },
            { text: "Step Line", value: "stepline" }
        ],
        valueExpr: "value",
        displayExpr: "text",
        value: "line",
        onValueChanged: function (e) {
            chart.option("series.type", e.value);
        }
    });
});