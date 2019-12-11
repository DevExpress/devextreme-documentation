$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 43,
        value: 53,
        color: 'dodgerblue',
        tooltip: {
            border: {
                visible: true,
                color: 'blue'
            }
        }
    });

    $('#showTooltipBorderCheckbox').change(function () {
        var bullet = $('#bulletContainer').dxBullet('instance');
        bullet.option({
            tooltip: {
                border: { visible: this.checked }
            }
        });
    });
});