var dataSource = [
    { month: 'January', min: 2.08, max: 4.28 },
    { month: 'February', min: 2.42, max: 4.03 },
    { month: 'March', min: 2.78, max: 3.98 },
    { month: 'April', min: 2.57, max: 3.94 },
    { month: 'May', min: 2.69, max: 4.18 },
    { month: 'June', min: 2.69, max: 5.02 },
    { month: 'July', min: 2.36, max: 5.6 },
    { month: 'August', min: 1.97, max: 5.37 },
    { month: 'September', min: 2.76, max: 4.94 },
    { month: 'October', min: 3.54, max: 3.66 },
    { month: 'November', min: 1.07, max: 4.31 },
    { month: 'December', min: 0.09, max: 4.08 }
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        series: {
            rangeValue1Field: 'min',
            rangeValue2Field: 'max',
            type: 'rangearea',
            argumentField: 'month',
            name: '2007-2008'
        },
        title: 'Annual Inflation in 2007-2008',
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        argumentAxis: {
            valueMarginsEnabled: false,
            label: { overlappingBehavior: 'stagger' }
        },
        tooltip: { enabled: true }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    chartConfiguration: {
        dataSource: dataSource,
        series: {
            rangeValue1Field: 'min',
            rangeValue2Field: 'max',
            type: 'rangearea',
            argumentField: 'month',
            name: '2007-2008'
        },
        title: 'Annual Inflation in 2007-2008',
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        argumentAxis: {
            valueMarginsEnabled: false,
            label: { overlappingBehavior: 'stagger' }
        },
        tooltip: { enabled: true }
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
            series: {
                rangeValue1Field: 'min',
                rangeValue2Field: 'max',
                type: 'rangearea',
                argumentField: 'month',
                name: '2007-2008'
            },
            title: 'Annual Inflation in 2007-2008',
            legend: {
                verticalAlignment: 'bottom',
                horizontalAlignment: 'center'
            },
            argumentAxis: {
                valueMarginsEnabled: false,
                label: { overlappingBehavior: 'stagger' }
            },
            tooltip: { enabled: true }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->