$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 68,
        value: 75,
        color: 'plum'
    });

    $('#showZeroLevelCheckbox').change(function () {
        var bullet = $('#bulletContainer').dxBullet('instance');
        bullet.option({
            showZeroLevel: this.checked
        });
    });
})
