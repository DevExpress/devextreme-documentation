$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 65,
        value: 55,
        color: 'plum',
        tooltip: {
            border: {
                color: 'purple',
                dashStyle: 'longDash'
            }
        }
    });
});