$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 85,
        value: 53,
        color: 'pink',
        tooltip: {
            border: {
                opacity: 0.8,
                width: 2,
                color: 'orchid'
            }
        }
    });
});