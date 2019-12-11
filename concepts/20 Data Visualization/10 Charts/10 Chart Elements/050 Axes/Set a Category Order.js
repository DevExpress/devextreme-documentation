var dataSource = [
    { month: 'June', val1: 15 },
    { month: 'January', val1: 10, val2: 10, val3: 32 },
    { month: 'February', val1: 30, val2: 30, val3: 12 },
    { month: 'March', val1: 20, val2: 20, val3: 30 },
    { month: 'April', val1: 50, val2: 50, val3: 19 },
    { month: 'May', val1: 10, val2: 10, val3: 15 }
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'bar',
            argumentField: 'month'
        },
        argumentAxis: {
            categories: ['January', 'February', 'March', 'April', 'May']
        },
        series: [
            { valueField: 'val1' },
            { valueField: 'val2' },
            { valueField: 'val3' }
        ],
        legend: { visible: false }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    chartConfiguration: {
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'bar',
            argumentField: 'month'
        },
        argumentAxis: {
            categories: ['January', 'February', 'March', 'April', 'May']
        },
        series: [
            { valueField: 'val1' },
            { valueField: 'val2' },
            { valueField: 'val3' }
        ],
        legend: { visible: false }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('chartController', function ($scope) {
        $scope.chartConfiguration = {
            dataSource: dataSource,
            commonSeriesSettings: {
                type: 'bar',
                argumentField: 'month'
            },
            argumentAxis: {
                categories: ['January', 'February', 'March', 'April', 'May']
            },
            series: [
                { valueField: 'val1' },
                { valueField: 'val2' },
                { valueField: 'val3' }
            ],
            legend: { visible: false }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->