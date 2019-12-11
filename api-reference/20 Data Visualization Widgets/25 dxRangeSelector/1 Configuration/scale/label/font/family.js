$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 1000000,
            tickInterval: 200000,
            label: {
                format: 'currency',
                font: {
                    family: 'Zapf-Chancery, cursive'
                }
            }
        }
    });
});