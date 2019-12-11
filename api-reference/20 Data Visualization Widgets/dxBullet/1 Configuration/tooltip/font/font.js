$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 68,
        value: 64,
        color: 'lightsalmon',
        tooltip: {
            color: 'seashell',
            font: {
                color: 'crimson',
                size: 10,
                family: 'Zapf-Chancery, cursive',
                opacity: 0.75,
                weight: 400
            }
        }
    });
})
