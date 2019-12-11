var dataSource = [
    { arg: 10, y: -12 },
    { arg: 20, y: -32 },
    { arg: 40, y: -20 },
    { arg: 50, y: -39 },
    { arg: 60, y: -10 },
    { arg: 75, y: 10 },
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'line',
            closed: false,
        },
        series: [
            { valueField: 'y', name: 'value' },
        ],
        legend: { visible: false },
    });

    var hoverHandler = function (info) {
        var point = info.target;
        if (point.isHovered()) {
            $("#infoContainer").html("Hovered point: (" + point.originalArgument + ", " + point.originalValue + ")");
        } else {
            $("#infoContainer").html("");
        }
    }

    $("#onButton").dxButton({
        text: 'Subscribe',
        onClick: function () {
            var chart = $("#chartContainer").dxPolarChart('instance');
            chart.on("pointHoverChanged", hoverHandler);
        }
    });

    $("#offButton").dxButton({
        text: 'Unsubscribe',
        onClick: function () {
            var chart = $("#chartContainer").dxPolarChart('instance');
            chart.off("pointHoverChanged", hoverHandler);
        }
    });
});