$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 50,
        value: 61,
        color: 'lightgray',
        tooltip: {
            border: {
                width: 4
            }
        }
    });
});