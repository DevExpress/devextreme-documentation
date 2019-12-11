var dataSource = [
    { continent: 'Africa', population: 1022234000 },
    { continent: 'Antarctica', population: 4490 },
    { continent: 'Asia', population: 4164252000 },
    { continent: 'Australia', population: 29127000 },
    { continent: 'Europe', population: 738199000 },
    { continent: 'North America', population: 542056000 },
    { continent: 'South America', population: 392555000 }
];

var myPalette = ['rgb(199, 21, 133)', 'rgb(100, 149, 237)', 'rgb(34, 139, 34)', 'rgb(250, 128, 114)', 'rgb(255, 69, 0)', 'rgb(176, 224, 230)'];
DevExpress.viz.registerPalette('mySuperPalette', myPalette);

$(function () {
    $("#pieChartContainer").dxPieChart({
        dataSource: dataSource,
        series: {
            argumentField: 'continent',
            valueField: 'population'
        },
        title: 'Population by Continent',
        palette: 'mySuperPalette'
    });
});