var dataSource = [
    { year: 2010, europe: 728, americas: 935, africa: 982 },
    { year: 2000, europe: 730, americas: 836, africa: 797 },
    { year: 1990, europe: 721, americas: 721, africa: 623 },
    { year: 1980, europe: 694, americas: 614, africa: 471 },
    { year: 1970, europe: 656, americas: 513, africa: 361 },
    { year: 1960, europe: 605, americas: 417, africa: 283 },
    { year: 1950, europe: 546, americas: 332, africa: 227 }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'year',
            type: 'line',
            closed: false,
        },
        series: [
            { valueField: 'europe', name: 'Europe' },
            { valueField: 'americas', name: 'Americas' },
            { valueField: 'africa', name: 'Africa' }
        ]
    });

    var pointHoverHandler = function (info) {
        var point = info.target;
        if (point.isHovered()) {
            $("#infoContainer").html("Hovered point: (" + point.originalArgument + ", " + point.originalValue + ")");
        } else {
            $("#infoContainer").html("");
        }
    }
    var seriesHoverHandler = function (info) {
        var series = info.target;
        if (series.isHovered()) {
            $("#infoContainer").html("Hovered series: " + series.name);
        } else {
            $("#infoContainer").html("");
        }
    }

    $("#onButton").dxButton({
        text: 'Subscribe',
        onClick: function () {
            var chart = $("#chartContainer").dxPolarChart('instance');
            chart.on({
                "pointHoverChanged": pointHoverHandler,
                "seriesHoverChanged": seriesHoverHandler,
            });
        }
    });

    $("#offButton").dxButton({
        text: 'Unsubscribe',
        onClick: function () {
            var chart = $("#chartContainer").dxPolarChart('instance');
            chart.off("pointHoverChanged", pointHoverHandler);
            chart.off("seriesHoverChanged", seriesHoverHandler);
        }
    });
});