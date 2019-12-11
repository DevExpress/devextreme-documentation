var citrusProduction = [
    { type: 'Oranges', brazil: 18279309, china: 2865000, usa: 7357000 },
    { type: 'Grapefruit', brazil: 72000, china: 547000, usa: 1580000 },
    { type: 'Lemons and limes', brazil: 1060000, china: 745100, usa: 722000 },
    { type: 'Tangerines, etc.', brazil: 1271000, china: 14152000, usa: 328000 }
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: citrusProduction,
        commonSeriesSettings: {
            argumentField: 'type',
            type: 'bar'
        },
        series: [
            { valueField: 'brazil', name: 'Brazil' },
            { valueField: 'china', name: 'China' },
            { valueField: 'usa', name: 'USA' }
        ],
        valueAxis: {
            label: { format: 'largeNumber' }
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    chartOptions: {
        dataSource: citrusProduction,
        commonSeriesSettings: {
            argumentField: 'type',
            type: 'bar'
        },
        series: [
            { valueField: 'brazil', name: 'Brazil' },
            { valueField: 'china', name: 'China' },
            { valueField: 'usa', name: 'USA' }
        ],
        valueAxis: {
            label: { format: 'largeNumber' }
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
            dataSource: citrusProduction,
            commonSeriesSettings: {
                argumentField: 'type',
                type: 'bar'
            },
            series: [
                { valueField: 'brazil', name: 'Brazil' },
                { valueField: 'china', name: 'China' },
                { valueField: 'usa', name: 'USA' }
            ],
            valueAxis: {
                label: { format: 'largeNumber' }
            }
        };
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->