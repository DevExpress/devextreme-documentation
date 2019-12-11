$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 10,
        target: 6,
        value: 0,
        tooltip: { enabled: false },
        color: 'blue'
    });

    var moveAscending = true;
    $('#changeValueButton').click(function () {
        var bullet = $('#bulletContainer').dxBullet('instance');
        var val = bullet.option('value');
        var scaleStart = bullet.option('startScaleValue');
        var scaleEnd = bullet.option('endScaleValue');
        var targetValue = bullet.option('target');
        if (val == scaleStart) { moveAscending = true };
        if (val == scaleEnd) { moveAscending = false };
        if (val == targetValue) {
            moveAscending ? bullet.option('color', 'red') : bullet.option('color', 'blue');
        };
        moveAscending ? val++ : val--;
        bullet.option('value', val);
    });
})
