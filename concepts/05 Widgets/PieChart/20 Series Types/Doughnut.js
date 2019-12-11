var dataSource = [
    { continent: 'Africa', area: 30370000 },
    { continent: 'Antarctica', area: 13720000 },
    { continent: 'Asia', area: 43820000 },
    { continent: 'Australia', area: 9008500 },
    { continent: 'Europe', area: 10180000 },
    { continent: 'North America', area: 24490000 },
    { continent: 'South America', area: 17840000 }
];

//<!--@jQuery-->
$(function () {
    $("#pieChartContainer").dxPieChart({
        dataSource: dataSource,
        series: {
            argumentField: 'continent',
            valueField: 'area',
            type: 'doughnut'
        },
        title: 'Area of Continents',
        palette: 'Soft Pastel',
        tooltip: {
            enabled: true,
            format: {
                type: 'largeNumber',
                precision: 1
            },
            customizeTooltip: function (e) {
                return { html: e.valueText + ' km<sup>2</sup>' }
            }
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    pieChartConfiguration: {
        dataSource: dataSource,
        series: {
            argumentField: 'continent',
            valueField: 'area',
            type: 'doughnut'
        },
        title: 'Area of Continents',
        palette: 'Soft Pastel',
        tooltip: {
            enabled: true,
            format: {
                type: 'largeNumber',
                precision: 1
            },
            customizeTooltip: function (e) {
                return { html: e.valueText + ' km<sup>2</sup>' }
            }
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pieChartController', function ($scope) {
        $scope.pieChartConfiguration = {
            dataSource: dataSource,
            series: {
                argumentField: 'continent',
                valueField: 'area',
                type: 'doughnut'
            },
            title: 'Area of Continents',
            palette: 'Soft Pastel',
            tooltip: {
                enabled: true,
                format: {
                    type: 'largeNumber',
                    precision: 1
                },
                customizeTooltip: function (e) {
                    return { html: e.valueText + ' km<sup>2</sup>' }
                }
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->