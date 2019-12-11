var dataSource = [
    { year: '1896', gold: 11, silver: 7, bronze: 2 },
    { year: '1900', gold: 19, silver: 14, bronze: 14 },
    { year: '1904', gold: 78, silver: 82, bronze: 79 },
    { year: '1908', gold: 23, silver: 12, bronze: 12 },
    { year: '1912', gold: 25, silver: 19, bronze: 19 },
    { year: '1920', gold: 41, silver: 27, bronze: 27 },
    { year: '1924', gold: 46, silver: 29, bronze: 28 },
    { year: '1928', gold: 24, silver: 20, bronze: 18 },
    { year: '1932', gold: 47, silver: 36, bronze: 32 },
    { year: '1936', gold: 25, silver: 20, bronze: 15 },
    { year: '1948', gold: 41, silver: 31, bronze: 21 },
    { year: '1952', gold: 44, silver: 25, bronze: 18 },
    { year: '1956', gold: 34, silver: 28, bronze: 19 },
    { year: '1960', gold: 37, silver: 25, bronze: 19 },
    { year: '1964', gold: 37, silver: 28, bronze: 31 },
    { year: '1968', gold: 46, silver: 33, bronze: 35 },
    { year: '1972', gold: 36, silver: 33, bronze: 33 },
    { year: '1976', gold: 37, silver: 38, bronze: 29 },
    { year: '1980', gold: 6, silver: 4, bronze: 2 },
    { year: '1984', gold: 87, silver: 65, bronze: 30 },
    { year: '1988', gold: 38, silver: 32, bronze: 30 },
    { year: '1992', gold: 42, silver: 38, bronze: 39 },
    { year: '1994', gold: 6, silver: 5, bronze: 2 },
    { year: '1996', gold: 44, silver: 32, bronze: 25 },
    { year: '1998', gold: 6, silver: 3, bronze: 4 },
    { year: '2000', gold: 37, silver: 24, bronze: 32 },
    { year: '2002', gold: 10, silver: 13, bronze: 11 },
    { year: '2004', gold: 36, silver: 39, bronze: 26 },
    { year: '2006', gold: 9, silver: 9, bronze: 7 },
    { year: '2008', gold: 36, silver: 38, bronze: 36 },
    { year: '2010', gold: 9, silver: 15, bronze: 13 },
    { year: '2012', gold: 46, silver: 29, bronze: 29 }
];

var dataSourceTotal = [
    { type: 'Gold', amount: 1063 },
    { type: 'Silver', amount: 853 },
    { type: 'Bronze', amount: 737 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'year',
            type: 'stackedline',
            point: { selectionMode: 'allArgumentPoints' }
        },
        series: [
            { valueField: 'gold', name: 'Gold', color: 'gold' },
            { valueField: 'silver', name: 'Silver', color: 'silver' },
            { valueField: 'bronze', name: 'Bronze', color: '#CD7F32' }
        ],
        title: 'US Olympic Medals Overall',
        argumentAxis: {
            valueMarginsEnabled: false,
            label: { overlappingBehavior: 'stagger' }
        },
        legend: { visible: false },
        onPointClick: function (info) {
            var clickedPoint = info.target;
            clickedPoint.isSelected() ? clickedPoint.clearSelection() : clickedPoint.select();
        },
        onPointSelectionChanged: function (info) {
            var selectedPoint = info.target;
            var pieChart = $('#pieChartContainer').dxPieChart('instance');
            var chart = $('#chartContainer').dxChart('instance');
            if (selectedPoint.isSelected()) {
                var newPieDataSource = [];
                $.each(chart.getAllSeries(), function (_, currentSeries) {
                    point = currentSeries.getPointsByArg(selectedPoint.originalArgument)[0];
                    newPieDataSource.push({ type: point.series.name, amount: point.originalValue });
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
            argumentField: 'type',
            valueField: 'amount',
            label: {
                visible: true,
                connector: { visible: true }
            }
        },
        palette: ['gold', 'silver', '#CD7F32'],
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        }
    });
});