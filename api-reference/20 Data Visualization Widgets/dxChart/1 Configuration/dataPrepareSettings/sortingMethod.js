var dataSource = [
    { argument: 1, value: 5 },
    { argument: 6, value: 8 },
    { argument: 3.5, value: 4 },
    { argument: 14, value: 3 },
    { argument: 8.4, value: 8.5 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'argument',
            type: 'spline'
        },
        series: [{ valueField: 'value' }],
        dataPrepareSettings: {
            sortingMethod: function (a, b) {
                return a.value - b.value;
            }
        }
    });
});