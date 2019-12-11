var dataSource = [
    { date: new Date(2012, 3, 2, 6, 35), traffic: 3 },
    { date: new Date(2012, 3, 2, 7, 50), traffic: 8 },
    { date: new Date(2012, 3, 2, 9, 0), traffic: 7 },
    { date: new Date(2012, 3, 2, 10, 20), traffic: 5 },
    { date: new Date(2012, 3, 2, 10, 50), traffic: 5 },
    { date: new Date(2012, 3, 2, 11, 35), traffic: 6 },
    { date: new Date(2012, 3, 2, 12, 14), traffic: 7 },
    { date: new Date(2012, 3, 2, 13, 42), traffic: 8 }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        series: [{
            valueField: 'traffic',
            argumentField: 'date'
        }],
        argumentAxis: {
            tickInterval: { hours: 1 }
        },
        animation: { enabled: false },
        legend: { visible: false }
    });
});