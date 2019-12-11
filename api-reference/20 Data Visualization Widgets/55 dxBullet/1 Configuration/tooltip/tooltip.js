$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 68.9513,
        value: 79.441,
        color: 'powderblue',
        tooltip: {
            color: 'seashell',
            format: {
                type: 'fixedPoint',
                precision: 2
            },
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
