var dataSource = [
    { x: 'A', y1: 4, y2: 0, y3: 4 },
    { x: 'B', y1: 6, y2: 3, y3: 7 },
    { x: 'C', y1: 2, y2: 12 },
    { x: 'D', y1: 10, y3: 9 },
    { x: 'E', y2: 5, y3: 12 },
    { x: 'F', y1: 16, y2: 11, y3: 5 }
];

$(function () {
    $('#chartContainer').dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'x',
            type: 'bar'
        },
        series: [{
            valueField: 'y1'
        }, {
            valueField: 'y2'
        }, {
            valueField: 'y3'
        }],
        animation: false,
        equalBarWidth: true
    });

    $('#equalBarWidthCheckbox').change(function () {
        var chart = $('#chartContainer').dxPolarChart('instance');
        chart.option('equalBarWidth', this.checked);
    });
});