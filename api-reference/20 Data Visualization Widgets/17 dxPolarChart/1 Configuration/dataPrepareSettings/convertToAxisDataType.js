var dataSource = [
    { arg: 1, val: 5 },
    { arg: '6', val: 8 },
    { arg: 3.5, val: '4' },
    { arg: '15', val: 10 },
    { arg: '8.4', val: '8.5' }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'arg',
            type: 'line',
            closed: false
        },
        series: [{ valueField: 'val' }],
        dataPrepareSettings: {
            convertToAxisDataType: true
        }
    });
});