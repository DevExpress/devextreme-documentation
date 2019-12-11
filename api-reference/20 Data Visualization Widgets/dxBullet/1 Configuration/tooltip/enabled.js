$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 95,
        value: 53,
        color: 'silver',
        tooltip: {
            enabled: true
        }
    });

    $('#enableTooltipCheckbox').change(function () {
        var bullet = $('#bulletContainer').dxBullet('instance');
        bullet.option({
            tooltip: { enabled: this.checked }
        });
    });
});