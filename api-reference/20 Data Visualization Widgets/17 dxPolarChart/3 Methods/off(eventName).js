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

    $("#toastContainer").dxToast({
        type: 'info',
        displayTime: 1000,
        width: 400,
        position: {
            my: 'bottom',
            at: 'bottom',
            of: '#chartContainer'
        }
    });

    var textHoverHandler = function (info) {
        var point = info.target;
        if (point.isHovered()) {
            $("#infoContainer").html("Hovered point: (" + point.originalArgument + ", " + point.originalValue + ")");
        } else {
            $("#infoContainer").html("");
        }
    }

    $("#textButton").dxButton({
        text: 'Subscribe text handler',
        onClick: function () {
            var chart = $("#chartContainer").dxPolarChart('instance');
            chart.on("pointHoverChanged", textHoverHandler);
        }
    });

    var toastHoverHandler = function (info) {
        var point = info.target;
        if (point.isHovered()) {
            var toast = $("#toastContainer").dxToast('instance');
            toast.option("message", "Hovered point: (" + point.originalArgument + ", " + point.originalValue + ")");
            toast.show();
        }
    }

    $("#toastButton").dxButton({
        text: 'Subscribe toast handler',
        onClick: function () {
            var chart = $("#chartContainer").dxPolarChart('instance');
            chart.on("pointHoverChanged", toastHoverHandler);
        }
    });

    $("#offButton").dxButton({
        text: 'Unsubscribe all',
        onClick: function () {
            var chart = $("#chartContainer").dxPolarChart('instance');
            chart.off("pointHoverChanged");
        }
    });
});