var data = [
    { type: 'Oranges', brazil: 18279309, china: 2865000, usa: 7357000 },
    { type: 'Grapefruit', brazil: 72000, china: 547000, usa: 1580000 },
    { type: 'Lemons and limes', brazil: 1060000, china: 745100, usa: 722000 },
    { type: 'Tangerines, etc.', brazil: 1271000, china: 14152000, usa: 328000 }
];

//<!--@jQuery-->
$(function () {
    var chart = $("#chartContainer").dxChart({
        dataSource: data,
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
        },
        barWidth: 0.5
    }).dxChart('instance');
	
    $("#sliderContainer").dxSlider({
        min: 0.01, max: 1,
        value: 0.5,
        step: 0.01,
        label: { visible: true },
        showRange: false,
        onValueChanged: function (e) {
            chart.option('barWidth', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    data: data,
    sliderValue: ko.observable(0.5)
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('chartController', function ($scope) {
        $scope.data = data;
        $scope.sliderValue = 0.5
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->