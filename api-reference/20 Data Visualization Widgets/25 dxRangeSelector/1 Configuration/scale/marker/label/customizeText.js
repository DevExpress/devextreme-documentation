$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2010, 2, 5),
            endValue: new Date(2014, 3, 10),
            marker: {
                label: {
                    format: 'quarterAndYear',
                    customizeText: function () {
                        return this.valueText;
                    }
                }
            }
        }
    });
});