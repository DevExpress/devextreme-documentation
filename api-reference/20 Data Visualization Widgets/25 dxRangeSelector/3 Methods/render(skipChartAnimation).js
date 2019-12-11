var dataSource = [
    { arg: 1, val: 5 },
    { arg: 6, val: 8 },
    { arg: 3.5, val: 4 },
    { arg: 10, val: 10 },
    { arg: 8.4, val: 8.5 }
];

$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        dataSource: dataSource,
        chart: {
            commonSeriesSettings: {
                type: 'spline'
            },
            series: {}
        }
    });

    $('#changeContainerSizeButton').click(function () {
        var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
        if ($('#rangeSelectorContainer').height() > 120 || $('#rangeSelectorContainer').width() > 600) {
            $('#rangeSelectorContainer').height(120);
            $('#rangeSelectorContainer').width(600);
        } else {
            $('#rangeSelectorContainer').height(150);
            $('#rangeSelectorContainer').width(700);
        }
        rangeSelector.render()
    });
});