dataSource = [
    { theta: 0, X: 1.82753, Y: 1.8246 },
    { theta: 10, X: 1.95364, Y: 1.82448 },
    { theta: 20, X: 2.07285, Y: 1.82427 },
    { theta: 30, X: 2.18925, Y: 1.82354 },
    { theta: 40, X: 2.29169, Y: 1.82398 },
    { theta: 50, X: 2.38192, Y: 1.82477 },
    { theta: 60, X: 2.45409, Y: 1.82396 },
    { theta: 70, X: 2.50841, Y: 1.82452 },
    { theta: 80, X: 2.54115, Y: 1.82419 },
    { theta: 90, X: 2.55309, Y: 1.82453 },
    { theta: 100, X: 2.54318, Y: 1.82442 },
    { theta: 110, X: 2.51096, Y: 1.82468 },
    { theta: 120, X: 2.45880, Y: 1.82493 },
    { theta: 130, X: 2.38802, Y: 1.82448 },
    { theta: 140, X: 2.29796, Y: 1.82452 },
    { theta: 150, X: 2.19665, Y: 1.82435 },
    { theta: 160, X: 2.08295, Y: 1.82408 },
    { theta: 170, X: 1.96147, Y: 1.82491 },
    { theta: 180, X: 1.83737, Y: 1.82438 },
    { theta: 190, X: 1.71152, Y: 1.82405 },
    { theta: 200, X: 1.58970, Y: 1.82476 },
    { theta: 210, X: 1.47630, Y: 1.82488 },
    { theta: 220, X: 1.37227, Y: 1.82450 },
    { theta: 230, X: 1.28285, Y: 1.82429 },
    { theta: 240, X: 1.20983, Y: 1.82381 },
    { theta: 250, X: 1.15622, Y: 1.82400 },
    { theta: 260, X: 1.12292, Y: 1.82441 },
    { theta: 270, X: 1.11168, Y: 1.82417 },
    { theta: 280, X: 1.12162, Y: 1.82472 },
    { theta: 290, X: 1.15363, Y: 1.82406 },
    { theta: 300, X: 1.20639, Y: 1.82370 },
    { theta: 310, X: 1.27844, Y: 1.82403 },
    { theta: 320, X: 1.36566, Y: 1.82419 },
    { theta: 330, X: 1.46803, Y: 1.82525 },
    { theta: 340, X: 1.58157, Y: 1.82412 },
    { theta: 350, X: 1.70193, Y: 1.82414 },
    { theta: 360, X: 1.82753, Y: 1.82375 }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'theta',
            scatter: {
                point: {
                    symbol: 'polygon',
                    size: 7
                }
            }
        },
        series: [{
            valueField: 'Y',
            name: 'Y axis',
            type: 'line',
            point: {visible: false}
        }, {
            valueField: 'X',
            name: 'X axis'
        }],
        title: 'Accelerometer research'
    });
});