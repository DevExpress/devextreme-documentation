$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 10
        },
        background: {
            image: {
                url: '/Content/images/doc/16_1/ChartJS/flight.png',
                location: 'leftCenter'
            }
        }
    });
});