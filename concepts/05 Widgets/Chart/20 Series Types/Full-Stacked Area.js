var dataSource = [
    { month: 'January', food: 3970, capital: 15366, auto: 7818, goods: 9064 },
    { month: 'March', food: 3875, capital: 15297, auto: 7518, goods: 9147 },
    { month: 'June', food: 4181, capital: 15957, auto: 7603, goods: 9311 },
    { month: 'August', food: 3826, capital: 15706, auto: 8046, goods: 9342 },
    { month: 'October', food: 3899, capital: 14940, auto: 8233, goods: 9244 },
    { month: 'December', food: 3941, capital: 15664, auto: 8642, goods: 10134 }
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'fullstackedarea',
            argumentField: 'month'
        },
        series: [
            { valueField: 'food', name: 'Food' },
            { valueField: 'capital', name: 'Capital Goods' },
            { valueField: 'auto', name: 'Automotive Vehicles' },
            { valueField: 'goods', name: 'Customer Goods' }
        ],
        title: 'Exports of Goods in USA by End-Use Category (2005)',
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        argumentAxis: { valueMarginsEnabled: false },
        tooltip: {
            enabled: true,
            customizeTooltip: function (e) {
                return { text: (e.value / 1000) + ' bln USD' }
            }
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    chartConfiguration: {
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'fullstackedarea',
            argumentField: 'month'
        },
        series: [
            { valueField: 'food', name: 'Food' },
            { valueField: 'capital', name: 'Capital Goods' },
            { valueField: 'auto', name: 'Automotive Vehicles' },
            { valueField: 'goods', name: 'Customer Goods' }
        ],
        title: 'Exports of Goods in USA by End-Use Category (2005)',
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        argumentAxis: { valueMarginsEnabled: false },
        tooltip: {
            enabled: true,
            customizeTooltip: function (e) {
                return { text: (e.value / 1000) + ' bln USD' }
            }
        }
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
                type: 'fullstackedarea',
                argumentField: 'month'
            },
            series: [
                { valueField: 'food', name: 'Food' },
                { valueField: 'capital', name: 'Capital Goods' },
                { valueField: 'auto', name: 'Automotive Vehicles' },
                { valueField: 'goods', name: 'Customer Goods' }
            ],
            title: 'Exports of Goods in USA by End-Use Category (2005)',
            legend: {
                verticalAlignment: 'bottom',
                horizontalAlignment: 'center'
            },
            argumentAxis: { valueMarginsEnabled: false },
            tooltip: {
                enabled: true,
                customizeTooltip: function (e) {
                    return { text: (e.value / 1000) + ' bln USD' }
                }
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->