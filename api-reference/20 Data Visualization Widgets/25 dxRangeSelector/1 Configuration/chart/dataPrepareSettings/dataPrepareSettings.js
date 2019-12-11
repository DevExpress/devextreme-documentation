var dataSource = [
    { arg: 1, val: 5 },
    { arg: '6', val: 8 },
    { arg: 3.5, val: '4' },
    { arg: '10', val: 10 },
    { arg: '8.4', val: '8.5' }
];

$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        dataSource: dataSource,
        scale: { valueType: 'numeric' },
        chart: {
            commonSeriesSettings: {
                argumentField: 'arg',
                type: 'spline'
            },
            series: [{ valueField: 'val' }],
            dataPrepareSettings: {
                checkTypeForAllData: true,
                convertToAxisDataType: true,
                sortingMethod: function (a, b) {
                    return a.val - b.val;
                }
            }
        }       
    });
});