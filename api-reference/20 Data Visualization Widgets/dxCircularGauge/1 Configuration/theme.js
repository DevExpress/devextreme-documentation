var greenTheme = {
    name: 'gaugeGreenTheme',
    gauge: {
        rangeContainer: { backgroundColor: 'mediumseagreen' },
        subvalueIndicator: {
            trianglemarker: {
                color: 'forestgreen',
                length: 20
            }
        },
        valueIndicator: {
            twocolorneedle: {
                color: 'palegreen',
                secondColor: 'skyblue',
                width: 3,
                spindleSize: 20,
                spindleGapSize: 15
            },
            triangleneedle: {
                color: 'turquoise',
                width: 5
            }
        }
    }
};

DevExpress.viz.registerTheme(greenTheme, 'generic.light');

$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        theme: 'gaugeGreenTheme',
        scale: {
            startValue: 0,
            endValue: 100
        },
        valueIndicator: {
            type: 'twoColorNeedle'
        },
        value: 84,
        subvalues: [34.5, 52, 12.34]
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.option({
            valueIndicator: {
                type: this.value
            }
        });
    });
});