$(function () {
    $("#bulletContainer").dxBullet({
        startScaleValue: 0,
        endScaleValue: 10,
        target: 7,
        value: 1,
        color: 'khaki',
        tooltip: {
            enabled: true,
            customizeTooltip: function () {
                if (this.value > this.target) {
                    return {
                        color: 'orangered'
                    }
                }
            }
        }
    });

    $('#subtractButton').click(function () {
        var bullet = $('#bulletContainer').dxBullet('instance');
        var currentValue = bullet.option('value');
        currentValue--;
        bullet.option('value', currentValue);
    });

    $('#addButton').click(function () {
        var bullet = $('#bulletContainer').dxBullet('instance');
        var currentValue = bullet.option('value');
        currentValue++;
        bullet.option('value', currentValue);
    });
});