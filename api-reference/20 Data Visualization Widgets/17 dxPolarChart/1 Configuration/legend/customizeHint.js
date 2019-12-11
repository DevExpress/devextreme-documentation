var dataSource = [
    { city: 'Istanbul', y1990: 7620000, y2000: 10923000, y2012: 13854740 },
    { city: 'Moscow', y1990: 8967332, y2000: 10382754, y2012: 11689048 },
    { city: 'London', y1990: 6887280, y2000: 8173941, y2012: 8308369 },
    { city: 'Saint Petersburg', y1990: 5035200, y2000: 4694000, y2012: 5028000 },
    { city: 'Ankara', y1990: 2583963, y2000: 3703362, y2012: 4965542 }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'city',
            type: 'line'
        },
        series: [
			{ valueField: 'y1990', name: '1990' },
			{ valueField: 'y2000', name: '2000' },
			{ valueField: 'y2012', name: '2012' }
        ],
        palette: 'Soft Pastel',
        title: 'Largest Cities in Europe',
        valueAxis: {
            label: { format: 'largeNumber' }
        },
        legend: {
            customizeHint: function (info) {
                var valueArray = [];
                var series = $('#chartContainer').dxPolarChart('instance').getSeriesByPos(info.seriesIndex);
                $.each(series.getAllPoints(), function (_, currentPoint) {
                    valueArray.push(currentPoint.value);
                });
                return 'Maximum value in this series is ' + Math.max.apply(Math, valueArray)
            }
        }
    });
});