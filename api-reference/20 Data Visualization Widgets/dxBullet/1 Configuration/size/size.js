$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 68,
        value: 42,
        color: 'rosybrown',
        tooltip: { enabled: false },
        size: {
            height: 35,
            width: 400
        }
    });
})
