$(function () {
    var baseOptions = {
        dataSource: [
            { x: 10, y1: 0, y2: 10 },
            { x: 15, y1: 6, y2: 12 },
            { x: 20, y1: 8, y2: 15 },
            { x: 30, y1: 10, y2: 10 },
            { x: 50, y1: 16, y2: 5 },
            { x: 150, y1: 12, y2: 6 },
            { x: 180, y1: 8, y2: 10 }
        ],
        sliderMarker: {
            font: {
                size: 10
            }
        },
        chart: {
            commonSeriesSettings: {
                argumentField: 'x'
            },
            bottomIndent: 0,
            topIndent: 0,
            series: [
                { valueField: 'y1' },
                { valueField: 'y2' }
            ]
        }
    };

    $('#rangeSelector1Container').dxRangeSelector(baseOptions);
    $('#rangeSelector2Container').dxRangeSelector($.extend(true, {}, baseOptions, {
        sliderMarker: {
            font: {
                size: 30
            }
        }
    }));
    $("#checkBoxContainer").dxCheckBox({
        text: 'Equal slider marker placeholder height',
        value: false,
        onValueChanged: function (e) {
            var rangeSelector1 = $('#rangeSelector1Container').dxRangeSelector('instance');
            var rangeSelector2 = $('#rangeSelector2Container').dxRangeSelector('instance');
            rangeSelector1.option("sliderMarker.placeholderHeight", e.value ? 48 : undefined);
            rangeSelector2.option("sliderMarker.placeholderHeight", e.value ? 48 : undefined);
        }
    });
});
