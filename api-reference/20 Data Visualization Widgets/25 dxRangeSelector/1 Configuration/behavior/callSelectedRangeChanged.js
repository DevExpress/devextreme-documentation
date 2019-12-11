$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2011, 0, 1),
            endValue: new Date(2011, 11, 31),
            minorTickInterval: 'day',
            tickInterval: 'month',
            showMinorTicks: false,
            marker: { visible: false },
            label: {
                format: 'MMM'
            }
        },
        behavior: {
            callSelectedRangeChanged: "onMoving"
        },
        sliderMarker: {
            format: 'MMM dd, ddd'
        },
        onSelectedRangeChanged: function (e) {
            var currentDate = new Date(e.startValue);
            var workingDaysCount = 0;

            while (currentDate <= e.endValue) {
                if (currentDate.getDay() != 0 && currentDate.getDay() != 6) {
                    workingDaysCount++;
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
            $("#workingDaysDisplay").html("<b>Working days in total:</b> " + workingDaysCount);
        }
    });

    $("#dropdownListSelector").change(function () {
        var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector("instance");
        rangeSelector.option({
            behavior: { callSelectedRangeChanged: this.value }
        });
    });
});