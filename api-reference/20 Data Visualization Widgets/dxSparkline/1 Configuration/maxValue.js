var silverCosts = [
    { month: 1, 2010: 17 }, { month: 2, 2010: 28 },
    { month: 3, 2010: 34 }, { month: 4, 2010: 37 },
    { month: 5, 2010: 47 }, { month: 6, 2010: 37 },
    { month: 7, 2010: 34 }, { month: 8, 2010: 40 },
    { month: 9, 2010: 41 }, { month: 10, 2010: 30 },
    { month: 11, 2010: 34 }, { month: 12, 2010: 32 }
]

$(function () {
    $('#sparklineContainer').dxSparkline({
        dataSource: silverCosts,
        argumentField: 'month',
        valueField: '2010',
        type: 'spline',
        lineColor: 'forestgreen',
        margin: {
            left: 10,
            right: 10,
            top: 5,
            bottom: 5
        },
        showFirstLast: true,
        showMinMax: true,
        pointSize: 5,
        pointColor: 'papayawhip',
        maxValue: 47
    });

    $("#slider").dxSlider({
        min: 22,
        value: 47,
        max: 69,
        onValueChanged: function (e) {
            $('#sliderValue').html(e.value);
            var sparkline = $('#sparklineContainer').dxSparkline('instance');
            sparkline.option("maxValue", e.value);
        }
    });
})