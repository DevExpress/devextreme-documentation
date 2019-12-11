$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 60,
        value: 50,
        color: 'olivedrab',
        tooltip: {
            border: {
                color: 'forestgreen'
            }
        }
    });
});