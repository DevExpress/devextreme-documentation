var dataSource = [
    { arg: 10, y: -12 },
    { arg: 20, y: -32 },
    { arg: 40, y: -20 },
    { arg: 50, y: -39 },
    { arg: 60, y: -10 },
    { arg: 75, y: 10 },
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'arg'
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
            var chart = $("#chartContainer").dxChart('instance');
            chart.on("pointHoverChanged", hoverHandler);
        }
    });

    $("#offButton").dxButton({
        text: 'Unsubscribe',
        onClick: function () {
            var chart = $("#chartContainer").dxChart('instance');
            chart.off("pointHoverChanged", hoverHandler);
        }
    });
});