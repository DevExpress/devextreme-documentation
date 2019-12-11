$(function() {
    var worldPopulation = [
        //{ year: 1950, africa: 228902000, americas: 340459000, asia: 1394018000, europe: 549089000, oceania: 12682000 },
        //{ year: 1960, africa: 284887000, americas: 425357000, asia: 1686698000, europe: 605619000, oceania: 15784000 },
        //{ year: 1970, africa: 365626000, americas: 519522000, asia: 2120430000, europe: 657221000, oceania: 19688000 },
        { year: 1980, africa: 477965000, americas: 619252000, asia: 2625584000, europe: 693859000, oceania: 22972000 },
        { year: 1990, africa: 631614000, americas: 727522000, asia: 3202475000, europe: 721086000, oceania: 26971000 },
        { year: 2000, africa: 814063000, americas: 840614000, asia: 3714470000, europe: 726407000, oceania: 31068000 },
        { year: 2010, africa: 1044107000, americas: 943952000, asia: 4169860000, europe: 735395000, oceania: 36411000 },
        { year: 2016, africa: 1216130000, americas: 1001559000, asia: 4436224000, europe: 738848000, oceania: 39901000 }
    ];

    var chart = $("#chart").dxChart({
        dataSource: worldPopulation,
        commonSeriesSettings: {
            argumentField: "year",
            type: "bar"
        },
        palette: "Ocean",
        series: [
            { valueField: "africa", name: "Africa" },
            { valueField: "americas", name: "Americas" },
            { valueField: "asia", name: "Asia" },
            { valueField: "europe", name: "Europe" },
            { valueField: "oceania", name: "Oceania" }
        ],
        title: "World Population",
        valueAxis: {
            label: {
                format: {
                    type: "largeNumber"
                }
            }
        },
        argumentAxis: {
            type: "discrete"
        },
        legend: {
            verticalAlignment: "top",
            horizontalAlignment: "center"
        },
        tooltip: {
            enabled: true,
            format: {
                type: "largeNumber",
                precision: 1
            }
        }
    }).dxChart("instance");

    $("#selectBox").dxSelectBox({
        items: [
            { text: "Bar", value: "bar" },
            { text: "Stacked Bar", value: "stackedbar" },
            { text: "Full-Stacked Bar", value: "fullstackedbar" }
        ],
        valueExpr: "value",
        displayExpr: "text",
        value: "bar",
        onValueChanged: function (e) {
            var newSettings;
            if (e.value.substring(0, 4) == "full") {
                newSettings = {
                    commonSeriesSettings: { type: e.value },
                    valueAxis: { 
                        label: { format: "percent" }
                    }
                }
            } else {
                newSettings = {
                    commonSeriesSettings: { type: e.value },
                    valueAxis: { 
                        label: { format: "largeNumber" }
                    }
                }
            }
            chart.option(newSettings);
            //chart.option("commonSeriesSettings.type", e.value);
        }
    });
});