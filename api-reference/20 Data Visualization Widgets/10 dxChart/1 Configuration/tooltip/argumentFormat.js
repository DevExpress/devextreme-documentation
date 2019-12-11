var dataSource = [
    { date: new Date(2010, 0, 1), val2010: 0.0163, val2011: 0.0263 },
    { date: new Date(2010, 1, 1), val2010: 0.0211, val2011: 0.0214 },
    { date: new Date(2010, 2, 1), val2010: 0.0268, val2011: 0.0231 },
    { date: new Date(2010, 3, 1), val2010: 0.0316, val2011: 0.0224 },
    { date: new Date(2010, 4, 1), val2010: 0.0357, val2011: 0.0202 },
    { date: new Date(2010, 5, 1), val2010: 0.0356, val2011: 0.0105 },
    { date: new Date(2010, 6, 1), val2010: 0.0363, val2011: 0.0124 },
    { date: new Date(2010, 7, 1), val2010: 0.0377, val2011: 0.0115 },
    { date: new Date(2010, 8, 1), val2010: 0.0387, val2011: 0.0114 },
    { date: new Date(2010, 9, 1), val2010: 0.0353, val2011: 0.0117 },
    { date: new Date(2010, 10, 1), val2010: 0.0339, val2011: 0.0114 },
    { date: new Date(2010, 11, 1), val2010: 0.0296, val2011: 0.0150 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'spline',
            argumentField: 'date'
        },
        series: [
            { valueField: 'val2010', name: '2010' },
            { valueField: 'val2011', name: '2011' }
        ],
        title: 'Annual Inflation Rate in 2010 and 2011',
        argumentAxis: {
            valueMarginsEnabled: false,
            label: {
                overlappingBehavior: 'stagger',
                format: 'month'
            },
            grid: { visible: true }
        },
        valueAxis: {
            label: {
                format: {
                    type: 'percent',
                    precision: 2
                }
            },
            tickInterval: 0.003,
            min: 0.01
        },
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        tooltip: {
            enabled: true,
            argumentFormat: 'monthAndDay',
            customizeTooltip: function (point) {
                return {
                    text: point.argumentText
                };
            }
        }
    });
});
