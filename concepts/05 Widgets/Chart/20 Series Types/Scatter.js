var dataSource = [
    { temperature: 14.2, sales: 215 },
    { temperature: 16.4, sales: 325 },
    { temperature: 11.9, sales: 185 },
    { temperature: 15.2, sales: 332 },
    { temperature: 18.5, sales: 406 },
    { temperature: 22.1, sales: 522 },
    { temperature: 19.4, sales: 412 },
    { temperature: 25.1, sales: 614 },
    { temperature: 23.4, sales: 544 },
    { temperature: 18.1, sales: 421 },
    { temperature: 22.6, sales: 445 },
    { temperature: 17.2, sales: 408 }
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        series: {
            valueField: 'sales',
            argumentField: 'temperature',
            type: 'scatter'
        },
        tooltip: { enabled: true },
        title: 'Ice Cream Sales vs Temperature',
        argumentAxis: { title: 'Temperature, &deg;C' },
        valueAxis: { title: 'Ice Cream Sales, k USD' },
        legend: { visible: false }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    chartConfiguration: {
        dataSource: dataSource,
        series: {
            valueField: 'sales',
            argumentField: 'temperature',
            type: 'scatter'
        },
        tooltip: { enabled: true },
        title: 'Ice Cream Sales vs Temperature',
        argumentAxis: { title: 'Temperature, &deg;C' },
        valueAxis: { title: 'Ice Cream Sales, k USD' },
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
            series: {
                valueField: 'sales',
                argumentField: 'temperature',
                type: 'scatter'
            },
            tooltip: { enabled: true },
            title: 'Ice Cream Sales vs Temperature',
            argumentAxis: { title: 'Temperature, &deg;C' },
            valueAxis: { title: 'Ice Cream Sales, k USD' },
            legend: { visible: false }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->