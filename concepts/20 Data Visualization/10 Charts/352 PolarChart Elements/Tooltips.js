var dataSource = [
    { year: 1950, europe: 546000, americas: 332000, africa: 227000 },
    { year: 1960, europe: 605000, americas: 417000, africa: 283000 },
    { year: 1970, europe: 656000, americas: 513000, africa: 361000 },
    { year: 1980, europe: 694000, americas: 614000, africa: 471000 },
    { year: 1990, europe: 721000, americas: 721000, africa: 623000 },
    { year: 2000, europe: 730000, americas: 836000, africa: 797000 },
    { year: 2010, europe: 728000, americas: 935000, africa: 982000 },
    { year: 2020, europe: 721000, americas: 1027000, africa: 1189000 },
    { year: 2030, europe: 704000, americas: 1110000, africa: 1416000 },
    { year: 2040, europe: 680000, americas: 1178000, africa: 1665000 },
    { year: 2050, europe: 650000, americas: 1231000, africa: 1937000 }
];

var commonFormat = {
    type: 'largeNumber',
    precision: 1
};

//<!--@jQuery-->
$(function () {
    $("#polarChartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'year',
            type: 'line',
            closed: false,
            point: { hoverMode: 'allArgumentPoints' }
        },
        series: [
            { valueField: 'europe', name: 'Europe' },
            { valueField: 'americas', name: 'Americas' },
            { valueField: 'africa', name: 'Africa' }
        ],
        tooltip: {
            enabled: true,
            shared: true,
            format: commonFormat
        },
        valueAxis: {
            label: {
                format: commonFormat
            }
        },
        title: 'Historic, Current and Future Population',
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    polarChartConfiguration: {
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'year',
            type: 'line',
            closed: false,
            point: { hoverMode: 'allArgumentPoints' }
        },
        series: [
            { valueField: 'europe', name: 'Europe' },
            { valueField: 'americas', name: 'Americas' },
            { valueField: 'africa', name: 'Africa' }
        ],
        tooltip: {
            enabled: true,
            shared: true,
            format: commonFormat
        },
        valueAxis: {
            label: {
                format: commonFormat
            }
        },
        title: 'Historic, Current and Future Population',
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('polarChartController', function ($scope) {
        $scope.polarChartConfiguration = {
            dataSource: dataSource,
            commonSeriesSettings: {
                argumentField: 'year',
                type: 'line',
                closed: false,
                point: { hoverMode: 'allArgumentPoints' }
            },
            series: [
                { valueField: 'europe', name: 'Europe' },
                { valueField: 'americas', name: 'Americas' },
                { valueField: 'africa', name: 'Africa' }
            ],
            tooltip: {
                enabled: true,
                shared: true,
                format: commonFormat
            },
            valueAxis: {
                label: {
                    format: commonFormat
                }
            },
            title: 'Historic, Current and Future Population',
            legend: {
                verticalAlignment: 'bottom',
                horizontalAlignment: 'center'
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->