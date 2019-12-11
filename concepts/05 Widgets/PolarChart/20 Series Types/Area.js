var dataSource = [
    { country: "USA", grapes: 7744997, oranges: 7574094 },
    { country: "China", grapes: 11550024, oranges: 7304840 },
    { country: "Turkey", grapes: 4011409, oranges: 1781258 },
    { country: "Italy", grapes: 8010364, oranges: 1708337 },
    { country: "India", grapes: 2483000, oranges: 6426200 }
];

//<!--@jQuery-->
$(function () {
    $("#polarChartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'country',
            type: "area"
        },
        series: [
            { valueField: "grapes", name: "Grapes" },
            { valueField: "oranges", name: "Oranges" }
        ],
        title: "Fruit Production by Countries (2013)",
        useSpiderWeb: false,
        valueAxis: {
            label: { format: 'largeNumber' }
        },
        tooltip: {
            enabled: true,
            format: { 
                type: 'largeNumber',
                precision: 1
            },
            customizeTooltip: function (e) {
                return { text: e.valueText + ' t.'}
            }
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    polarChartConfiguration: {
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'country',
            type: "area"
        },
        series: [
            { valueField: "grapes", name: "Grapes" },
            { valueField: "oranges", name: "Oranges" }
        ],
        title: "Fruit Production by Countries (2013)",
        useSpiderWeb: false,
        valueAxis: {
            label: { format: 'largeNumber' }
        },
        tooltip: {
            enabled: true,
            format: { 
                type: 'largeNumber',
                precision: 1
            },
            customizeTooltip: function (e) {
                return { text: e.valueText + ' t.'}
            }
        }
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
                type: "area"
            },
            series: [
                { valueField: "grapes", name: "Grapes" },
                { valueField: "oranges", name: "Oranges" }
            ],
            title: "Fruit Production by Countries (2013)",
            useSpiderWeb: false,
            valueAxis: {
                label: { format: 'largeNumber' }
            },
            tooltip: {
                enabled: true,
                format: { 
                    type: 'largeNumber',
                    precision: 1
                },
                customizeTooltip: function (e) {
                    return { text: e.valueText + ' t.'}
                }
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->