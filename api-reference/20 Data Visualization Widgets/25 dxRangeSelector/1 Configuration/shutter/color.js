$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        dataSource: [
            { arg: 10, y1: 0, y2: 10 },
            { arg: 15, y1: 6, y2: 12 },
            { arg: 20, y1: 8, y2: 15 },
            { arg: 30, y1: 10, y2: 10 },
            { arg: 50, y1: 16, y2: 5 },
            { arg: 150, y1: 12, y2: 6 },
            { arg: 180, y1: 8, y2: 10 }
        ],
        chart: {
            series: [
                { valueField: 'y1' },
                { valueField: 'y2' }
            ],
        },
        selectedRange: {
            startValue: 20,
            endValue: 60
        },
        shutter: {
            color: 'palegreen'
        }
    });
});