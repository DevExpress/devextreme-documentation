var volumeChanges = [
    { date: new Date(2013, 10, 1), volume: -3.12 },
    { date: new Date(2013, 10, 2), volume: 10.23 },
    { date: new Date(2013, 10, 3), volume: -8.24 },
    { date: new Date(2013, 10, 4), volume: -5.7 },
    { date: new Date(2013, 10, 7), volume: 2.06 },
    { date: new Date(2013, 10, 8), volume: 5.95 },
    { date: new Date(2013, 10, 9), volume: -5.14 },
    { date: new Date(2013, 10, 10), volume: 7 },
    { date: new Date(2013, 10, 11), volume: -12.85 },
    { date: new Date(2013, 10, 14), volume: -2.27 },
    { date: new Date(2013, 10, 15), volume: 19.85 },
    { date: new Date(2013, 10, 16), volume: -12 },
    { date: new Date(2013, 10, 17), volume: -3.75 },
    { date: new Date(2013, 10, 18), volume: 10.45 },
    { date: new Date(2013, 10, 21), volume: -14.4 },
    { date: new Date(2013, 10, 22), volume: 13 },
    { date: new Date(2013, 10, 23), volume: 18.16 },
    { date: new Date(2013, 10, 24), volume: -5.39 },
    { date: new Date(2013, 10, 25), volume: 60.28 },
    { date: new Date(2013, 10, 28), volume: -75.11 },
    { date: new Date(2013, 10, 29), volume: -6.68 },
    { date: new Date(2013, 10, 30), volume: 5.3 },
    { date: new Date(2013, 10, 31), volume: 4.69 },
]

$(function () {
    $('#sparklineContainer').dxSparkline({
        dataSource: volumeChanges,
        argumentField: 'date',
        valueField: 'volume',
        type: 'bar',
        showFirstLast: false,
        tooltip: {
            format: {
                type: 'fixedPoint',
                precision: 1
            }
        }
    });
});