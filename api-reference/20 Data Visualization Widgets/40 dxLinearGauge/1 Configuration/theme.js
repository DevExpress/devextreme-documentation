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
            rectangle: {
                color: 'palegreen',
                length: 20
            },
            rhombus: {
                color: 'turquoise',
                width: 15
            }
        }
    }
};

DevExpress.viz.registerTheme(greenTheme, 'generic.light');

$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        theme: 'gaugeGreenTheme',
        scale: {
            startValue: 0,
            endValue: 100
        },
        valueIndicator: {
            type: 'rectangle'
        },
        value: 84,
        subvalues: [34.5, 52, 12.34]
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.option({
            valueIndicator: {
                type: this.value
            }
        });
    });
});