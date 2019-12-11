$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'mediumseagreen' },
        value: 32,
        geometry: {
            startAngle: 135,
            endAngle: 45
        }
    });
});