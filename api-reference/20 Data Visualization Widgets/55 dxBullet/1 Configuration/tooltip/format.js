$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 94.923,
        value: 43.4631,
        color: 'lightsteelblue',
        tooltip: {
            format: {
                type: 'fixedPoint',
                precision: 2
            }
        }
    });
})
