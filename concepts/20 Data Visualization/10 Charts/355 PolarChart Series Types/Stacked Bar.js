var dataSource = [
    { country: "USA", male: 134782000, female: 140786000 },
    { country: "Brasil", male: 85127000, female: 87730000 },
    { country: "Russia", male: 68278000, female: 64750000 },
    { country: "Japan", male: 52387000, female: 64586000 },
    { country: "Germany", male: 40450000, female: 42344000 },
    { country: "Great Britain", male: 23486000, female: 30206000 }
];

//<!--@jQuery-->
$(function () {
    $("#polarChartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'country',
            type: "stackedbar"
        },
        valueAxis: {
            label: { format: 'largeNumber' }
        },
        series: [
            { valueField: "male", name: "Male" },
            { valueField: "female", name: "Female" }
        ],
        tooltip: {
            enabled: true,
            format: { 
                type: 'largeNumber',
                precision: 1
            },
            customizeTooltip: function (e) {
                return { text: e.valueText + ' - ' + e.percentText }
            }
        },
        title: "Human Sex Ratio"
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    polarChartConfiguration: {
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'country',
            type: "stackedbar"
        },
        valueAxis: {
            label: { format: 'largeNumber' }
        },
        series: [
            { valueField: "male", name: "Male" },
            { valueField: "female", name: "Female" }
        ],
        tooltip: {
            enabled: true,
            format: { 
                type: 'largeNumber',
                precision: 1
            },
            customizeTooltip: function (e) {
                return { text: e.valueText + ' - ' + e.percentText }
            }
        },
        title: "Human Sex Ratio"
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('polarChartController', function ($scope) {
        $scope.polarChartConfiguration = {
            dataSource: dataSource,
            commonSeriesSettings: {
                argumentField: 'country',
                type: "stackedbar"
            },
            valueAxis: {
                label: { format: 'largeNumber' }
            },
            series: [
                { valueField: "male", name: "Male" },
                { valueField: "female", name: "Female" }
            ],
            tooltip: {
                enabled: true,
                format: { 
                    type: 'largeNumber',
                    precision: 1
                },
                customizeTooltip: function (e) {
                    return { text: e.valueText + ' - ' + e.percentText }
                }
            },
            title: "Human Sex Ratio"
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->