var dataSource = [
    { date: new Date(2013, 6, 1), daytime: 21, evening: 18 },
    { date: new Date(2013, 6, 2), daytime: 27, evening: 21 },
    { date: new Date(2013, 6, 3), daytime: 28, evening: 22 },
    { date: new Date(2013, 6, 4), daytime: 29, evening: 24 },
    { date: new Date(2013, 6, 5), daytime: 29, evening: 24 },
    { date: new Date(2013, 6, 6), daytime: 29, evening: 21 },
    { date: new Date(2013, 6, 7), daytime: 26, evening: 21 },
    { date: new Date(2013, 6, 8), daytime: 22, evening: 18 },
    { date: new Date(2013, 6, 9), daytime: 22, evening: 19 },
    { date: new Date(2013, 6, 10), daytime: 24, evening: 21 },
    { date: new Date(2013, 6, 11), daytime: 25, evening: 19 },
    { date: new Date(2013, 6, 12), daytime: 26, evening: 20 },
    { date: new Date(2013, 6, 13), daytime: 27, evening: 19 },
    { date: new Date(2013, 6, 14), daytime: 20, evening: 18 },
    { date: new Date(2013, 6, 15), daytime: 24, evening: 19 },
    { date: new Date(2013, 6, 16), daytime: 19, evening: 17 },
    { date: new Date(2013, 6, 17), daytime: 22, evening: 17 },
    { date: new Date(2013, 6, 18), daytime: 23, evening: 18 },
    { date: new Date(2013, 6, 19), daytime: 25, evening: 21 },
    { date: new Date(2013, 6, 20), daytime: 17, evening: 16 },
    { date: new Date(2013, 6, 21), daytime: 14, evening: 12 },
    { date: new Date(2013, 6, 22), daytime: 15, evening: 13 },
    { date: new Date(2013, 6, 23), daytime: 17, evening: 13 },
    { date: new Date(2013, 6, 24), daytime: 18, evening: 14 },
    { date: new Date(2013, 6, 25), daytime: 19, evening: 16 },
    { date: new Date(2013, 6, 26), daytime: 20, evening: 18 },
    { date: new Date(2013, 6, 27), daytime: 17, evening: 16 },
    { date: new Date(2013, 6, 28), daytime: 19, evening: 16 },
    { date: new Date(2013, 6, 29), daytime: 19, evening: 16 },
    { date: new Date(2013, 6, 30), daytime: 19, evening: 18 },
    { date: new Date(2013, 6, 31), daytime: 20, evening: 17 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'date',
            type: 'spline'
        },
        argumentAxis: {
            valueMarginsEnabled: false,
            label: { format: 'day' },
            tickInterval: { days: 1 },
            grid: { visible: true }
        },
        valueAxis: {
            label: {
                customizeText: function (e) {
                    return e.value + ' &deg;C';
                }
            }
        },
        tooltip: {
            argumentFormat: 'monthAndDay',
            enabled: true,
            customizeTooltip: function (point) {
                return {
                    text: point.value + ' &deg;C on ' + point.argumentText
                };
            }
        },
        series: [
            { valueField: 'daytime', name: 'Daytime', color: 'skyblue' },
            { valueField: 'evening', name: 'Evening', color: 'royalblue' }
        ],
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        pointSelectionMode: 'multiple',
        onSeriesClick: function (info) {
            var clickedSeries = info.target;
            $.each(clickedSeries.getAllPoints(), function (_, point) {
                if (point.originalValue >= 20) {
                    point.fullState & 2 ? clickedSeries.deselectPoint(point) : clickedSeries.selectPoint(point);
                }
            })
        }
    });
});
