var dataSource = [
    { continent: 'Africa', population: 1022234000 },
    { continent: 'Antarctica', population: 4490 },
    { continent: 'Asia', population: 4164252000 },
    { continent: 'Australia', population: 29127000 },
    { continent: 'Europe', population: 738199000 },
    { continent: 'North America', population: 542056000 },
    { continent: 'South America', population: 392555000 }
];

var myTheme = {
    name: 'mySuperTheme',
    chart: {
        commonSeriesSettings: {
            pie: {
                label: {
                    visible: true,
                    connector: { visible: true },
                    format: 'largeNumber'
                }
            }
        },
        legend: {
            border: {
                visible: true,
                color: 'forestgreen',
                cornerRadius: 20
            }
        },
        tooltip: {
            enabled: true,
            format: 'largeNumber'
        }
    }
};

DevExpress.viz.registerTheme(myTheme, 'generic.light');

$(function () {
    $("#pieChartContainer").dxPieChart({
        theme: 'mySuperTheme',
        dataSource: dataSource,
        series: {
            argumentField: 'continent',
            valueField: 'population'
        },
        title: 'Population by Continent'
    });
});