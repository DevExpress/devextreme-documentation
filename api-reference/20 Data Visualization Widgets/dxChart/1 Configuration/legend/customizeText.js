var dataSource = [
    { year: '1850', africa: 0.111, asia: 0.809, europe: 0.276, latinamerica: 0.038, northamerica: 0.026, oceania: 0.002, total: 1.262 },
    { year: '1900', africa: 0.133, asia: 0.947, europe: 0.408, latinamerica: 0.074, northamerica: 0.082, oceania: 0.006, total: 1.65 },
    { year: '1950', africa: 0.229895, asia: 1.403388, europe: 0.547287, latinamerica: 0.167368, northamerica: 0.171614, oceania: 0.012675, total: 2.532227 },
    { year: '2000', africa: 0.811101, asia: 3.719044, europe: 0.726777, latinamerica: 0.521419, northamerica: 0.313289, oceania: 0.03113, total: 6.12277 },
    { year: '2050', africa: 2.191599, asia: 5.14222, europe: 0.719257, latinamerica: 0.750956, northamerica: 0.446862, oceania: 0.055223, total: 9.306128 }
];

$(function () {
    $('#chartContainer').dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'year',
            type: 'stackedbar'
        },
        series: [{
            valueField: 'africa',
            name: 'Africa'
        }, {
            valueField: 'asia',
            name: 'Asia'
        }, {
            valueField: 'europe',
            name: 'Europe'
        }, {
            valueField: 'latinamerica',
            name: 'Latin Am. &amp; Caribbean'
        }, {
            valueField: 'northamerica',
            name: 'Northern America'
        }, {
            valueField: 'oceania',
            name: 'Oceania'
        }, {
            type: 'spline',
            valueField: 'total',
            name: 'Total',
            color: 'lightblue'
        }
        ],
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center',
            customizeText: function () {
                return this.seriesName + ', bln'
            }
        }
    });
});