$(function() {
    var internetLanguages = [
        { lang: "English", ratio: 51.6 },
        { lang: "Russian", ratio: 6.6 },
        { lang: "Japanese", ratio: 5.6 },
        { lang: "German", ratio: 5.6 },
        { lang: "Spanish", ratio: 5.1 },
        { lang: "French", ratio: 4.1 },
        { lang: "Portuguese", ratio: 2.6 },
        { lang: "Italian", ratio: 2.3 },
        { lang: "Chinese", ratio: 2.0 },
        { lang: "Polish", ratio: 1.7 },
        { lang: "Turkish", ratio: 1.6 },
        { lang: "Persian", ratio: 1.5 },
        { lang: "Dutch, Flemish", ratio: 1.4 },
        { lang: "Korean", ratio: 1.4 },
        { lang: "Czech", ratio: 0.9 },
        { lang: "Arabic", ratio: 0.8 },
        { lang: "Vietnamese", ratio: 0.6 },
        { lang: "Indonesian", ratio: 0.5 },
        { lang: "Greek", ratio: 0.5 },
        { lang: "Swedish", ratio: 0.5 },
        { lang: "Romanian", ratio: 0.5 },
        { lang: "Hungarian", ratio: 0.4 },
        { lang: "Danish", ratio: 0.3 },
        { lang: "Thai", ratio: 0.3 },
        { lang: "Slovak", ratio: 0.3 },
        { lang: "Finnish", ratio: 0.3 },
        { lang: "Bulgarian", ratio: 0.2 },
        { lang: "Hebrew", ratio: 0.2 },
        { lang: "Lithuanian", ratio: 0.1 },
        { lang: "Norwegian", ratio: 0.1 },
        { lang: "Ukrainian", ratio: 0.1 },
        { lang: "Croatian", ratio: 0.1 },
        { lang: "Norwegian Bokmål", ratio: 0.1 },
        { lang: "Serbian", ratio: 0.1 },
        { lang: "Catalan, Valencian", ratio: 0.1 },
        { lang: "Slovenian", ratio: 0.1 },
        { lang: "Latvian", ratio: 0.1 },
        { lang: "Estonian", ratio: 0.1 }
    ];

    var pieChart = $("#pieChart").dxPieChart({
        dataSource: internetLanguages,
        series: {
            argumentField: "lang",
            valueField: "ratio",
            label: {
                visible: true,
                connector: { visible: true },
                format: {
                    type: "fixedPoint",
                    precision: 1
                },
                customizeText: function (e) {
                    return e.argumentText + ": " + e.valueText + "%"
                }
            },
            smallValuesGrouping: {
                mode: "topN",
                topCount: 6
            }
        },
        palette: "Ocean",
        resolveLabelOverlapping: "shift",
        title: "Internet Languages"
    }).dxPieChart("instance");

    $("#selectBox").dxSelectBox({
        items: [
            { text: "Pie", value: "pie" },
            { text: "Doughnut", value: "doughnut" }
        ],
        valueExpr: "value",
        displayExpr: "text",
        value: "pie",
        onValueChanged: function (e) {
            pieChart.option("type", e.value);
        }
    });
});