$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 86,
        value: 94
    });

    $('#showTargetCheckbox').change(function () {
        var bullet = $('#bulletContainer').dxBullet('instance');
        bullet.option({
            showTarget: this.checked
        });
    });
})
