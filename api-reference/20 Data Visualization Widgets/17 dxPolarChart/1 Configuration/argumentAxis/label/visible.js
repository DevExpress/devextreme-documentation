var dataSource = [
    { year: 1950, europe: 546, americas: 332, africa: 227 },
    { year: 2050, europe: 650, americas: 1231, africa: 1937 },
    { year: 2040, europe: 680, americas: 1178, africa: 1665 },
    { year: 2030, europe: 704, americas: 1110, africa: 1416 },
    { year: 2020, europe: 721, americas: 1027, africa: 1189 },
    { year: 2010, europe: 728, americas: 935, africa: 982 },
    { year: 2000, europe: 730, americas: 836, africa: 797 },
    { year: 1990, europe: 721, americas: 721, africa: 623 },
    { year: 1980, europe: 694, americas: 614, africa: 471 },
    { year: 1970, europe: 656, americas: 513, africa: 361 },
    { year: 1960, europe: 605, americas: 417, africa: 283 }
];

$(function () {
    $('#chartContainer').dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'year',
            type: 'line'
        },
        animation: false,
        series: [
            { valueField: 'europe', name: 'Europe' },
            { valueField: 'americas', name: 'Americas' },
            { valueField: 'africa', name: 'Africa' }
        ]
    });

    $('#visibleArgumentLabelsCheckbox').change(function () {
        var chart = $('#chartContainer').dxPolarChart('instance');
        chart.option({
            argumentAxis: {
                label: { visible: this.checked }
            }
        });
    });
});