var dataSource = [
    { year: '1850', africa: 111000000, asia: 809000000, europe: 276000000, latinamerica: 38000000, northamerica: 26000000, oceania: 2000000, total: 1262000000 },
    { year: '1900', africa: 133000000, asia: 947000000, europe: 408000000, latinamerica: 74000000, northamerica: 82000000, oceania: 6000000, total: 1650000000 },
    { year: '1950', africa: 229895000, asia: 1403388000, europe: 547287000, latinamerica: 167368000, northamerica: 171614000, oceania: 12675000, total: 2532227000 },
    { year: '2000', africa: 811101000, asia: 3719044000, europe: 726777000, latinamerica: 521419000, northamerica: 313289000, oceania: 31130000, total: 6122770000 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'year',
            type: 'stackedbar'
        },
        series: [
            { valueField: 'africa', name: 'Africa' },
            { valueField: 'asia', name: 'Asia' },
            { valueField: 'europe', name: 'Europe' },
            { valueField: 'latinamerica', name: 'Latin Am. &amp; Caribbean' },
            { valueField: 'northamerica', name: 'Northern America' },
            { valueField: 'oceania', name: 'Oceania' },
            {
                type: 'spline',
                valueField: 'total',
                name: 'Total'
            }
        ],
        palette: 'Harmony Light',
        valueAxis: {
            label: { format: 'largeNumber' }
        },
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        tooltip: {
            enabled: true,
            format: 'largeNumber',
            customizeTooltip: function (point) {
                if (point.value > 1000000000) {
                    return {
                        color: 'powderblue'
                    }
                };
            }
        }
    });
});