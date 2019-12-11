var data = [
    { type: 'Oranges', brazil: 18279309, usa: 7357000 },
    { type: 'Grapefruit', brazil: 72000, china: 547000, usa: 1580000 },
    { type: 'Lemons and limes', brazil: 1060000, china: 745100, usa: 722000 },
    { type: 'Tangerines, etc.', china: 14152000, usa: 328000 }
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
        }
    }).dxChart('instance');
	
    $("#checkBoxContainer").dxCheckBox({
        text: 'equalBarWidth',
        value: true,
        onValueChanged: function (e) {
            chart.option('equalBarWidth', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    data: data,
    checkBoxState: ko.observable(true)
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('chartController', function ($scope) {
        $scope.data = data;
        $scope.checkBoxState = true
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->