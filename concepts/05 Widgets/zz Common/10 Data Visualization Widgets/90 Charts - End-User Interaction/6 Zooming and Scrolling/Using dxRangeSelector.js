var dataSource =  [
    { arg: 10, y1: -12, y2: 10, y3: 32 },
    { arg: 20, y1: -32, y2: 30, y3: 12 },
    { arg: 40, y1: -20, y2: 20, y3: 30 },
    { arg: 50, y1: -39, y2: 50, y3: 19 },
    { arg: 60, y1: -10, y2: 10, y3: 15 },
    { arg: 75, y1: 10, y2: 10, y3: 15 },
    { arg: 80, y1: 30, y2: 100, y3: 130 },
    { arg: 90, y1: 40, y2: 110, y3: 140 },
    { arg: 100, y1: 50, y2: 90, y3: 90 },
    { arg: 105, y1: 40, y2: 145, y3: 120 },
    { arg: 110, y1: -12, y2: 10, y3: 32 },
    { arg: 120, y1: -32, y2: 30, y3: 12 },
    { arg: 130, y1: -20, y2: 20, y3: 30 },
];

var series = [
    { argumentField: 'arg', valueField: 'y1' },
    { argumentField: 'arg', valueField: 'y2' },
    { argumentField: 'arg', valueField: 'y3' }
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        series: series,
        legend: { visible: false },
        onInitialized: function (e) {
            // Setting initial zoom range
            e.component.zoomArgument(75, 130);
        }
    })

    $("#rangeSelectorContainer").dxRangeSelector({
        dataSource: dataSource,
        chart: { series: series },
        scale: { minRange: 10 },
        value: [75, 130],
        behavior: { callValueChanged: 'onMoving' },
        onValueChanged: function (e) {
            var chartInstance = $("#chartContainer").dxChart("instance");
            chartInstance.zoomArgument(e.value[0], e.value[1]);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    chartInstance: {},
    chartConfiguration: {
        dataSource: dataSource,
        series: series,
        legend: { visible: false },
        onInitialized: function (e) {
            // Setting initial zoom range
            e.component.zoomArgument(75, 130);
            // Preserving the chart instance to use later in dxRangeSelector
            viewModel.chartInstance = e.component;
        }
    },
    rangeSelectorConfiguration: {
        dataSource: dataSource,
        chart: { series: series },
        scale: { minRange: 10 },
        value: [75, 130],
        behavior: { callValueChanged: 'onMoving' },
        onValueChanged: function (e) {
            viewModel.chartInstance.zoomArgument(e.value[0], e.value[1]);
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('exampleController', function ($scope) {
        $scope.chartInstance = {};
        $scope.chartConfiguration = {
            dataSource: dataSource,
            series: series,
            legend: { visible: false },
            onInitialized: function (e) {
                // Setting initial zoom range
                e.component.zoomArgument(75, 130);
                // Preserving the chart instance to use later in dxRangeSelector
                $scope.chartInstance = e.component;
            }
        };
        $scope.rangeSelectorConfiguration = {
            dataSource: dataSource,
            chart: { series: series },
            scale: { minRange: 10 },
            value: [75, 130],
            behavior: { callValueChanged: 'onMoving' },
            onValueChanged: function (e) {
                $scope.chartInstance.zoomArgument(e.value[0], e.value[1]);
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->