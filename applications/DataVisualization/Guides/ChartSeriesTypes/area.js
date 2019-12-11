$(function() {
    var usPersonalIncome = [
        { year: 1950, male: 26210, female: 9742 },
        { year: 1960, male: 33940, female: 10490 },
        { year: 1970, male: 42470, female: 14180 },
        { year: 1980, male: 37530, female: 14690 },
        { year: 1990, male: 38210, female: 18960 },
        { year: 2000, male: 40490, female: 22950 },
        { year: 2004, male: 39740, female: 22960 }
    ];

    var chart = $("#chart").dxChart({
        dataSource: usPersonalIncome,
        commonSeriesSettings: {
            type: "area",
            argumentField: "year",
            label: {
                //visible: true,
                //connector: { visible: true }
            }
        },
        series: [
            { valueField: "male", name: "Male", color: "#2e74d1" },
            { valueField: "female", name: "Female", color: "#7edb7a" },
        ],
        title: "Personal income in the US by sex",
        valueAxis: {
            title: "Overall income, 2017 US dollars",
            label: { format: "currency" }
        },
        argumentAxis: {
            type: "discrete",
            valueMarginsEnabled: false
        }
    }).dxChart("instance");

    $("#selectBox").dxSelectBox({
        items: [
            { text: "Area", value: "area" },
            { text: "Spline Area", value: "splinearea" },
            { text: "Step Area", value: "steparea" }
        ],
        valueExpr: "value",
        displayExpr: "text",
        value: "area",
        onValueChanged: function (e) {
            chart.option("commonSeriesSettings.type", e.value);
        }
    });
});