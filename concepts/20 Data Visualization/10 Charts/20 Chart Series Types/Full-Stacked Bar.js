var dataSource = [
    { country: 'Germany', young: 6.7, middle: 28.6, older: 5.1 },
    { country: 'Japan', young: 9.6, middle: 43.4, older: 9},
    { country: 'Russia', young: 13.5, middle: 49, older: 5.8 },
    { country: 'USA', young: 30, middle: 90.3, older: 14.5 }
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'country',
            type: 'fullstackedbar'
        },
        series: [
            { valueField: 'young', name: '0-14' },
            { valueField: 'middle', name: '15-64' },
            { valueField: 'older', name: '65 and older' }
        ],
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        title: 'Male Age Structure'
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    chartConfiguration: {
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'country',
            type: 'fullstackedbar'
        },
        series: [
            { valueField: 'young', name: '0-14' },
            { valueField: 'middle', name: '15-64' },
            { valueField: 'older', name: '65 and older' }
        ],
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        title: 'Male Age Structure'
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
                argumentField: 'country',
                type: 'fullstackedbar'
            },
            series: [
                { valueField: 'young', name: '0-14' },
                { valueField: 'middle', name: '15-64' },
                { valueField: 'older', name: '65 and older' }
            ],
            legend: {
                verticalAlignment: 'bottom',
                horizontalAlignment: 'center'
            },
            title: 'Male Age Structure'
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->