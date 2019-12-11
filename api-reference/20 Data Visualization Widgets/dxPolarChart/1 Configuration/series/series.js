var dataSource = [
    { arg: 'January', minT: 4.1, maxT: 15.5, avgT: 9.85 },
    { arg: 'February', minT: 5.8, maxT: 17.8, avgT: 11.8 },
    { arg: 'March', minT: 7.2, maxT: 19.6, avgT: 13.4 },
    { arg: 'April', minT: 8.1, maxT: 22.8, avgT: 15.4 },
    { arg: 'May', minT: 10.3, maxT: 25.7, avgT: 18 },
    { arg: 'June', minT: 12.2, maxT: 29, avgT: 20.6 },
    { arg: 'July', minT: 13.2, maxT: 31.3, avgT: 22.1 },
    { arg: 'August', minT: 13.2, maxT: 31.1, avgT: 22.2 },
    { arg: 'September', minT: 12.4, maxT: 29.9, avgT: 21.2 },
    { arg: 'October', minT: 9.7, maxT: 26.1, avgT: 17.9 },
    { arg: 'November', minT: 6.2, maxT: 19.6, avgT: 12.9 },
    { arg: 'December', minT: 3.4, maxT: 15.7, avgT: 9.6 }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'arg',
            type: 'line'
        },
        series: [{
            type: 'rangeArea',
            rangeValue1Field: 'minT',
            rangeValue2Field: 'maxT',
            name: 'Monthly Temperature Ranges, °C'
        }, {
            valueField: 'avgT',
            name: 'Average Temperature, °C'
        }
        ],
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        }
    });
});