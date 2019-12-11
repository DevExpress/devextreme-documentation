$(function() {
    var marketCapitalization = [
        { quarter: "2016 QI", apple: 607465000000, alphabet: 535660000000, microsoft: 439734000000, amazon: 281888000000, berkshire: 349740000000 },
        { quarter: "2016 QII", apple: 517069000000, alphabet: 475320000000, microsoft: 397268000000, amazon: 337641000000, berkshire: 345860000000 },
        { quarter: "2016 QIII", apple: 604475000000, alphabet: 535660000000, microsoft: 447290000000, amazon: 393030000000, berkshire: 358300000000 },
        { quarter: "2016 QIV", apple: 617588490000, alphabet: 531970000000, microsoft: 483160280000, amazon: 356313120000, berkshire: 404390000000 },
        { quarter: "2017 QI", apple: 753718000000, alphabet: 573570000000, microsoft: 508935000000, amazon: 423031000000, berkshire: 410880000000 }
    ];

    var chart = $("#chart").dxChart({
        dataSource: marketCapitalization,
        commonSeriesSettings: {
            type: "stackedarea",
            argumentField: "quarter",
            label: {
                visible: true,
                connector: { visible: true },
                format: {
                    type: "largeNumber",
                    precision: 2
                }
            }
        },
        series: [
            { valueField: "apple", name: "Apple Inc." },
            { valueField: "alphabet", name: "Alphabet" },
            { valueField: "microsoft", name: "Microsoft" },
            { valueField: "amazon", name: "Amazon.com" },
            { valueField: "berkshire", name: "Berkshire Hathaway" }
        ],
        title: {
            text: "Top 5 Public Corporations by Market Capitalization",
            subtitle: "as of the first quarter of 2017"
        },
        valueAxis: {
            label: {
                format: {
                    type: "largeNumber",
                    precision: 1
                }
            }
        },
        argumentAxis: {
            valueMarginsEnabled: false
        },
        resolveLabelOverlapping: "stack",
        legend: {
            horizontalAlignment: "center",
            itemTextPosition: "right"
        }
    }).dxChart("instance");

    $("#selectBox").dxSelectBox({
        items: [
            { text: "Stacked Area", value: "stackedarea" },
            { text: "Stacked Spline Area", value: "stackedsplinearea" },
            { text: "Full-Stacked Area", value: "fullstackedarea" },
            { text: "Full-Stacked Spline Area", value: "fullstackedsplinearea" },
        ],
        valueExpr: "value",
        displayExpr: "text",
        value: "stackedarea",
        onValueChanged: function (e) {
            var newSettings;
            if (e.value.substring(0, 4) == "full") {
                newSettings = {
                    commonSeriesSettings: { type: e.value },
                    valueAxis: { 
                        label: { format: "percent", precision: 0 }
                    }
                }
            } else {
                newSettings = {
                    commonSeriesSettings: { type: e.value },
                    valueAxis: { 
                        label: { format: "largeNumber", precision: 1 }
                    }
                }
            }
            chart.option(newSettings);
            //chart.option("commonSeriesSettings.type", e.value);
        }
    });
});