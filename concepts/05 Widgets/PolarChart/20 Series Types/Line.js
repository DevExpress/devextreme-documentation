var dataSource = [
    { country: "USA", grapes: 7744997, oranges: 7574094, peaches: 964890, lemons: 827353 },
    { country: "China", grapes: 11550024, oranges: 7304840, peaches: 11924085, lemons: 1914880 },
    { country: "Turkey", grapes: 4011409, oranges: 1781258, peaches: 637543, lemons: 726283 },
    { country: "Italy", grapes: 8010364, oranges: 1708337, peaches: 1401795, lemons: 336195 },
    { country: "India", grapes: 2483000, oranges: 6426200, peaches: 250000, lemons: 2523500 }
];

//<!--@jQuery-->
$(function () {
    $("#polarChartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'country',
            type: "line"
        },
        series: [
            { valueField: "peaches", name: "Peaches" },
            { valueField: "grapes", name: "Grapes" },
            { valueField: "oranges", name: "Oranges" },
            { valueField: "lemons", name: "Lemons" },
        ],
        title: "Fruit Production by Countries (2013)",
        useSpiderWeb: true,
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
            type: "line"
        },
        series: [
            { valueField: "peaches", name: "Peaches" },
            { valueField: "grapes", name: "Grapes" },
            { valueField: "oranges", name: "Oranges" },
            { valueField: "lemons", name: "Lemons" },
        ],
        title: "Fruit Production by Countries (2013)",
        useSpiderWeb: true,
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
                type: "line"
            },
            series: [
                { valueField: "peaches", name: "Peaches" },
                { valueField: "grapes", name: "Grapes" },
                { valueField: "oranges", name: "Oranges" },
                { valueField: "lemons", name: "Lemons" },
            ],
            title: "Fruit Production by Countries (2013)",
            useSpiderWeb: true,
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