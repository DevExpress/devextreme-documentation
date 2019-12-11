$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 70,
        value: 85,
        color: 'deeppink',
        tooltip: {
            border: {
                color: 'violet',
                opacity: 0.5
            }
        }
    });
});