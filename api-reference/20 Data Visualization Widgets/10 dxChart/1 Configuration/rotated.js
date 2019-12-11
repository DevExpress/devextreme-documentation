var citrusProduction = [
    { type: 'Oranges', brazil: 18279309, china: 2865000, usa: 7357000 },
    { type: 'Grapefruit', brazil: 72000, china: 547000, usa: 1580000 },
    { type: 'Lemons and limes', brazil: 1060000, china: 745100, usa: 722000 },
    { type: 'Tangerines, etc.', brazil: 1271000, china: 14152000, usa: 328000 }
];

//<!--@jQuery-->
$(function () {
    var chart = $("#chartContainer").dxChart({
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
        animation: false,
        valueAxis: {
            label: { format: 'largeNumber' }
        }
    }).dxChart('instance');
	
    $("#checkBoxContainer").dxCheckBox({
        text: 'Rotate the chart',
        value: false,
        onValueChanged: function (e) {
            chart.option('rotated', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    data: citrusProduction,
    checkBoxState: ko.observable(false)
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('chartController', function ($scope) {
        $scope.data = citrusProduction;
        $scope.checkBoxState = false;
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->