var dataSource = [
    { year: 1997, smp: 263, mmp: 226, cnstl: 10 },
    { year: 1999, smp: 169, mmp: 256, cnstl: 667 },
    { year: 2001, smp: 57, mmp: 257, cnstl: 143 },
    { year: 2003, smp: 0, mmp: 163, cnstl: 127 },
    { year: 2005, smp: 0, mmp: 103, cnstl: 36 },
    { year: 2007, smp: 0, mmp: 91, cnstl: 3 }
];
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'spline',
            argumentField: 'year'
        },
        series: [
            { valueField: 'smp', name: 'SMP' },
            { valueField: 'mmp', name: 'MMP' },
            { valueField: 'cnstl', name: 'cnstl' }
        ],
        legend: {
            columnCount: 2,
            orientation: 'horizontal',
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center',
            itemsAlignment: 'left'
        },
        animation: false
    });

    $('#dropdownListSelector').change(function () {
        var chart = $('#chartContainer').dxChart('instance');
        chart.option({
            legend: { itemsAlignment: this.value }
        });
    });
});