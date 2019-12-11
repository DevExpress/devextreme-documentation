$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        dataSource: [
            { arg: '0' },
            { arg: '25' },
            { arg: '50' },
            { arg: '75' },
            { arg: '100' }
        ],
        background: { color: 'lightcoral' },
        scale: { valueType: 'numeric' }
    });
});