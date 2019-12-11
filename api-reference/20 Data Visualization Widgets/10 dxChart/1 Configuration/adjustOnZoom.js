var data = [
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
    { arg: 130, y1: -20, y2: 20, y3: 30 }
];

var seriesSettings = [
    { valueField: 'y1' },
    { valueField: 'y2' },
    { valueField: 'y3' }
];

//<!--@jQuery-->
$(function () {
    var chart = $("#chartContainer").dxChart({
        dataSource: data,
        series: seriesSettings,
        legend: { visible: false }
    }).dxChart('instance');

    $("#rangeSelectorContainer").dxRangeSelector({
        dataSource: data,
        chart: {
            series: seriesSettings
        },
        behavior: { callSelectedRangeChanged: 'onMoving' },
        onSelectedRangeChanged: function (e) {
            chart.zoomArgument(e.startValue, e.endValue);
        }
    });

    $("#checkBoxContainer").dxCheckBox({
        text: 'adjustOnZoom',
        value: true,
        onValueChanged: function (e) {
            chart.option('adjustOnZoom', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    data: data,
    seriesSettings: seriesSettings,
    zoomChart: function (e) {
        var chart = $("#chartContainer").dxChart('instance');
        chart.zoomArgument(e.startValue, e.endValue);
    },
    checkBoxState: ko.observable(true)
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('chartController', function ($scope) {
        $scope.data = data;
        $scope.seriesSettings = seriesSettings;
        $scope.zoomChart = function (e) {
            var chart = $("#chartContainer").dxChart('instance');
            chart.zoomArgument(e.startValue, e.endValue);
        };
        $scope.checkBoxState = true
    });

angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->