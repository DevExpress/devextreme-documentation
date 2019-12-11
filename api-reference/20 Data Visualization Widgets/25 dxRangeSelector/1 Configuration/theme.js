var customTheme = {
    name: 'greenTheme',
    rangeSelector: {
        background: {
            color: 'darkseagreen'
        },
        scale: {
            label: {
                font: {
                    color: 'olive',
                    family: 'Zapf-Chancery, cursive',
                    opacity: 1,
                    size: 13
                }
            },
            tick: {
                color: 'yellow',
                opacity: 0.5
            }
        },
        shutter: {
            color: 'white'
        },
        sliderMarker: {
            color: 'seagreen',
            format: {
                type: 'fixedPoint',
                precision: 2
            }
        }
    }
};

DevExpress.viz.registerTheme(customTheme, 'generic.light');

$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        theme: 'greenTheme',
        scale: {
            startValue: 0,
            endValue: 10,
            minorTickInterval: 0.25
        }
    });
});