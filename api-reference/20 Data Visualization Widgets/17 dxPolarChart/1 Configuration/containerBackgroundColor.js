var dataSource = [
    { arg: 10, y1: -12, y2: 10, y3: 32 },
    { arg: 20, y1: -32, y2: 30, y3: 12 },
    { arg: 40, y1: -20, y2: 20, y3: 30 },
    { arg: 50, y1: -39, y2: 50, y3: 19 },
    { arg: 60, y1: -10, y2: 10, y3: 15 },
    { arg: 75, y1: 10, y2: 10, y3: 15 },
    { arg: 80, y1: 30, y2: 100, y3: 130 },
    { arg: 90, y1: 40, y2: 110, y3: 140 },
    { arg: 100, y1: 50, y2: 90, y3: 90 },
    { arg: 105, y1: 40, y2: 145, y3: 120 },
    { arg: 110, y1: -12, y2: 10, y3: 32 },
    { arg: 120, y1: -32, y2: 30, y3: 12 },
    { arg: 130, y1: -20, y2: 20, y3: 30 },
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'arg',
            type: 'line',
            closed: false
        },
        series: [{
            valueField: 'y1'
        }, {
            valueField: 'y2'
        }, {
            valueField: 'y3'
        }],
        legend: {
            visible: false
        },
        containerBackgroundColor: 'aqua'
    });
});
