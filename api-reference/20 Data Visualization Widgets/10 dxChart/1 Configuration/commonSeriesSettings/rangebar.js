var dataSource = [
    { month: 'January', min1: 36, max1: 43.29, min2:  42.12, max2: 49.91 },
    { month: 'February', min1: 40.68, max1: 47.07, min2: 28.33, max2: 51.75 },
    { month: 'March', min1: 45.01, max1: 52.77, min2: 48.96, max2: 56.72},
    { month: 'April', min1: 45.99, max1: 54.14, min2: 49.72, max2: 57.27},
    { month: 'May', min1: 43.73, max1: 49.03, min2: 46.8, max2: 52.07},
    { month: 'June', min1: 49.94, max1: 57.94, min2: 52.54, max2: 60.54},
    { month: 'July', min1: 52.88, max1: 58.98, min2: 54.93, max2: 61.28},
    { month: 'August', min1: 58.81, max1: 67.06, min2: 60.86, max2: 68.94},
    { month: 'September', min1: 61, max1: 66.72, min2: 63, max2: 69.47},
    { month: 'October', min1: 57.86, max1: 63.47, min2: 59.76, max2: 65.47},
    { month: 'November', min1: 54.24, max1: 59.98, min2: 56.14, max2: 61.78},
    { month: 'December', min1: 55.22, max1: 59.22, min2: 57.34, max2: 61.37},
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'rangeBar',
            rangebar: {
                argumentField: 'month'
            }
        },
        series: [
            { rangeValue1Field: 'min1', rangeValue2Field: 'max1', name: 'ANS West Coast' },
            { rangeValue1Field: 'min2', rangeValue2Field: 'max2', name: 'West Texas Intermediate' }
        ],
        title: {
            text: 'Crude Oil Prices in 2005'
        },
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        tooltip: {
            enabled: true
        }
    });
});