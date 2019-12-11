var dataSource = [
    { city: 'Istanbul', y1990: 7620000, y2000: 10923000, y2012: 13854740 },
    { city: 'Moscow', y1990: 8967332, y2000: 10382754, y2012: 11689048 },
    { city: 'London', y1990: 6887280, y2000: 8173941, y2012: 8308369 },
    { city: 'Saint Petersburg', y1990: 5035200, y2000: 4694000, y2012: 5028000 },
    { city: 'Ankara', y1990: 2583963, y2000: 3703362, y2012: 4965542 }
];

var dataSourceTotal = [
    { city: '1990', population: 31093775 },
    { city: '2000', population: 37877057 },
    { city: '2012', population: 43845699 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'city',
            type: 'bar',
            label: {
                visible: true,
                connector: { visible: true },
                format: {
                    type: 'largeNumber',
                    precision: 2
                }
            },
            selectionMode: 'allSeriesPoints'
        },
        series: [
            { valueField: 'y1990', name: '1990' },
            { valueField: 'y2000', name: '2000' },
            { valueField: 'y2012', name: '2012' }
        ],
        palette: 'Soft Pastel',
        title: 'Largest Cities in Europe',
        valueAxis: {
            label: { format: 'largeNumber' },
            title: 'Population within borders'
        },
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        onSeriesClick: function (info) {
            var clickedSeries = info.target;
            clickedSeries.isSelected() ? clickedSeries.clearSelection() : clickedSeries.select();
        },
        onSeriesSelectionChanged: function (info) {
            var selectedSeries = info.target;
            var pieChart = $('#pieChartContainer').dxPieChart('instance');
            var chart = $('#chartContainer').dxChart('instance');
            if (selectedSeries.isSelected()) {
                var newPieDataSource = [];
                $.each(selectedSeries.getAllPoints(), function (_, point) {
                    newPieDataSource.push({ city: point.originalArgument, population: point.originalValue });
                });
                pieChart.option({
                    dataSource: newPieDataSource
                });
            } else {
                pieChart.option({
                    dataSource: dataSourceTotal
                });
            }
        }
    });
});

$(function () {
    $("#pieChartContainer").dxPieChart({
        dataSource: dataSourceTotal,
        series: {
            argumentField: 'city',
            valueField: 'population',
            label: {
                visible: true,
                connector: { visible: true },
                format: {
                    type: 'largeNumber',
                    precision: 2
                }
            }
        },
        palette: 'Soft Pastel'
    });
});