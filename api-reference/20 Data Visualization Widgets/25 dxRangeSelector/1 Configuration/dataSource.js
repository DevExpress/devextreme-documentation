var dataSource = [
    { day: new Date(2011, 11, 22), cost: 6 },
    { day: new Date(2011, 11, 29), cost: 8 },
    { day: new Date(2012, 0, 5), cost: 15 },
    { day: new Date(2012, 0, 12), cost: 20 },
    { day: new Date(2012, 0, 19), cost: 18 },
    { day: new Date(2012, 0, 26), cost: 15 },
    { day: new Date(2012, 1, 2), cost: 14 },
    { day: new Date(2012, 1, 9), cost: 14, }
];

$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        dataSource: dataSource,
        chart: {
            series: [{
                argumentField: 'day',
                valueField: 'cost'
            }]
        },
        scale: {
            marker: { visible: false },
            label: { format: 'monthAndDay' },
            minorTickInterval: 'day'
        }
    });
});