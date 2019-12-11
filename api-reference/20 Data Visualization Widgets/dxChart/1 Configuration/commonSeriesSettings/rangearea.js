var dataSource = [
    { month: 'January', min: 2.08, max: 4.28, avg: 3.18 },
    { month: 'February', min: 2.42, max: 4.03, avg: 3.225 },
    { month: 'March', min: 2.78, max: 3.98, avg: 3.38 },
    { month: 'April', min: 2.57, max: 3.94, avg: 3.255 },
    { month: 'May', min: 2.69, max: 4.18, avg: 3.435 },
    { month: 'June', min: 2.69, max: 5.02, avg: 3.855 },
    { month: 'July', min: 2.36, max: 5.6, avg: 3.98 },
    { month: 'August', min: 1.97, max: 5.37, avg: 3.67 },
    { month: 'September', min: 2.76, max: 4.94, avg: 3.85 },
    { month: 'October', min: 3.54, max: 3.66, avg: 3.6 },
    { month: 'November', min: 4.31, max: 1.07, avg: 2.69 },
    { month: 'December', min: 4.08, max: 0.09, avg: 2.085 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'month',
            rangearea: {
                rangeValue1Field: 'min',
                rangeValue2Field: 'max',
            }
        },
        series: [
            {
                type: 'rangearea',
                name: 'Variance'
            }, {
                name: 'Average',
                valueField: 'avg',
                type: 'spline'
            }
        ],
        title: {
            text: 'Annual Inflation in 2007 and 2008'
        },
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        }
    });
});