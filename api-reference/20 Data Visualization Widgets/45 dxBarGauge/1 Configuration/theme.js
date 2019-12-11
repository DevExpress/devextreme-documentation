var greenTheme = {
    name: 'barGaugeGreenTheme',
    barGauge: {
        backgroundColor: 'palegreen',
        tooltip: {
            enabled: true,
            font: {
                color: 'forestgreen'
            }
        }
    }
};

DevExpress.viz.registerTheme(greenTheme, 'generic.light');

$(function () {
    $("#barGaugeContainer").dxBarGauge({
        theme: 'barGaugeGreenTheme',
        startValue: 0,
        endValue: 100,
        palette: 'Bright',
        values: [34.5, 52, 12.34]
    });
});