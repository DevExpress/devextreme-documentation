var population = [
    { year: 1960, europe: 605517000, americas: 424791000, africa: 285270000 },
    { year: 1970, europe: 657369000, americas: 519017000, africa: 366475000 },
    { year: 1980, europe: 694510000, americas: 618950000, africa: 478459000 },
    { year: 1990, europe: 723248000, americas: 727489000, africa: 629987000 },
    { year: 2000, europe: 729105000, americas: 841695000, africa: 808304000 },
    { year: 2010, europe: 742452000, americas: 942692000, africa: 1031084000 }
];

//<!--@jQuery-->
$(function () {
    var chart = $("#chartContainer").dxChart({
        dataSource: population,
        commonSeriesSettings: {
            argumentField: 'year'
        },
        series: [
            { valueField: 'europe', name: 'Europe' },
            { valueField: 'americas', name: 'Americas' },
            { valueField: 'africa', name: 'Africa' }
        ],
        animation: false,
        valueAxis: {
            label: { format: 'largeNumber' }
        },
        commonAxisSettings: {
            grid: { visible: true },
            visible: true
        }
    }).dxChart('instance');
	
    $("#sliderContainer").dxSlider({
        min: 0.01, max: 1,
        value: 0.1,
        step: 0.01,
        label: { visible: true },
        showRange: false,
        onValueChanged: function (e) {
            chart.option('commonAxisSettings.minValueMargin', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    data: population,
    sliderValue: ko.observable(0.1)
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('chartController', function ($scope) {
        $scope.data = population;
        $scope.sliderValue = 0.1;
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->