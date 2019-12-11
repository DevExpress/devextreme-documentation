var data = [];
var max = 5000;
for (var i = 0; i < max; i++) {
    data.push({ arg: i, val: i + i * (Math.random() - 0.5) });
}

$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        dataSource: data,
        chart: {
            series: {},
            useAggregation: true
        }
    });

    $('#useAggregationCheckbox').change(function () {
        var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
        rangeSelector.option({
            chart: {
                useAggregation: this.checked
            }
        });
    });
});