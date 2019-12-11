var population = [
    { year: 1950, europe: 549043000, americas: 339484000, africa: 228827000 },
    { year: 1960, europe: 605517000, americas: 424791000, africa: 285270000 },
    { year: 1970, europe: 657369000, americas: 519017000, africa: 366475000 },
    { year: 1980, europe: 694510000, americas: 618950000, africa: 478459000 },
    { year: 1990, europe: 723248000, americas: 727489000, africa: 629987000 },
    { year: 2000, europe: 729105000, americas: 841695000, africa: 808304000 },
    { year: 2010, europe: 742452000, americas: 942692000, africa: 1031084000 },
    { year: 2020, europe: 721000000, americas: 1027000000, africa: 1189000000 },
    { year: 2030, europe: 704000000, americas: 1110000000, africa: 1416000000 },
    { year: 2040, europe: 680000000, americas: 1178000000, africa: 1665000000 },
    { year: 2050, europe: 650000000, americas: 1231000000, africa: 1937000000 }
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: population,
        commonSeriesSettings: {
            argumentField: 'year'
        },
        series: [
            { valueField: 'europe', name: 'Europe' },
            { valueField: 'americas', name: 'Americas' },
            { valueField: 'africa', name: 'Africa' }
        ],
        valueAxis: {
            label: { format: 'largeNumber' },
            strips: [{
                startValue: 200000000, endValue: 250000000, color: 'rgba(68, 100, 213, 0.2)',
                label: { text: 'Lowest' }
            }, {
                startValue: 1900000000, endValue: 2000000000, color: 'rgba(68, 100, 213, 0.2)',
                label: { text: 'Highest' }
            }]
        },
        argumentAxis: {
            strips: [{
                startValue: 2016, endValue: 2050, color: 'rgba(68, 100, 213, 0.2)',
                label: { text: 'Forecast' }
            }]
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    chartOptions: {
        dataSource: population,
        commonSeriesSettings: {
            argumentField: 'year'
        },
        series: [
            { valueField: 'europe', name: 'Europe' },
            { valueField: 'americas', name: 'Americas' },
            { valueField: 'africa', name: 'Africa' }
        ],
        valueAxis: {
            label: { format: 'largeNumber' },
            strips: [{
                startValue: 200000000, endValue: 250000000, color: 'rgba(68, 100, 213, 0.2)',
                label: { text: 'Lowest' }
            }, {
                startValue: 1900000000, endValue: 2000000000, color: 'rgba(68, 100, 213, 0.2)',
                label: { text: 'Highest' }
            }]
        },
        argumentAxis: {
            strips: [{
                startValue: 2016, endValue: 2050, color: 'rgba(68, 100, 213, 0.2)',
                label: { text: 'Forecast' }
            }]
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('chartController', function ($scope) {
        $scope.chartOptions = {
            dataSource: population,
            commonSeriesSettings: {
                argumentField: 'year'
            },
            series: [
                { valueField: 'europe', name: 'Europe' },
                { valueField: 'americas', name: 'Americas' },
                { valueField: 'africa', name: 'Africa' }
            ],
            valueAxis: {
                label: { format: 'largeNumber' },
                strips: [{
                    startValue: 200000000, endValue: 250000000, color: 'rgba(68, 100, 213, 0.2)',
                    label: { text: 'Lowest' }
                }, {
                    startValue: 1900000000, endValue: 2000000000, color: 'rgba(68, 100, 213, 0.2)',
                    label: { text: 'Highest' }
                }]
            },
            argumentAxis: {
                strips: [{
                    startValue: 2016, endValue: 2050, color: 'rgba(68, 100, 213, 0.2)',
                    label: { text: 'Forecast' }
                }]
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->