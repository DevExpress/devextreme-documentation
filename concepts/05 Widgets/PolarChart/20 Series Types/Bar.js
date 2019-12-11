var dataSource = [
    { month: "January", day: 6, night: 2 },
    { month: "February", day: 7, night: 2 },
    { month: "March", day: 10, night: 3 },
    { month: "April", day: 14, night: 5 },
    { month: "May", day: 18, night: 8 },
    { month: "June", day: 21, night: 11 },
    { month: "July", day: 22, night: 13 },
    { month: "August", day: 22, night: 13 },
    { month: "September", day: 19, night: 11 },
    { month: "October", day: 15, night: 8 },
    { month: "November", day: 10, night: 5 },
    { month: "December", day: 7, night: 3 }
];

//<!--@jQuery-->
$(function () {
    $("#polarChartContainer").dxPolarChart({
        commonSeriesSettings: {
            argumentField: "month",
            type: "bar"
        },
        dataSource: dataSource,
        series: [
            { valueField: "day", name: "Day", color: "#ba4d51" }, 
            { valueField: "night", name: "Night", color: "#5f8b95" }
        ],
        title: 'Average Temperature in London',
        valueAxis: { valueMarginsEnabled: false },
        tooltip: {
            enabled: true,
            customizeTooltip: function (e) {
                return { text: e.originalValue + ' &deg;C' }
            }
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    polarChartConfiguration: {
        commonSeriesSettings: {
            argumentField: "month",
            type: "bar"
        },
        dataSource: dataSource,
        series: [
            { valueField: "day", name: "Day", color: "#ba4d51" }, 
            { valueField: "night", name: "Night", color: "#5f8b95" }
        ],
        title: 'Average Temperature in London',
        valueAxis: { valueMarginsEnabled: false },
        tooltip: {
            enabled: true,
            customizeTooltip: function (e) {
                return { text: e.originalValue + ' &deg;C' }
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
            commonSeriesSettings: {
                argumentField: "month",
                type: "bar"
            },
            dataSource: dataSource,
            series: [
                { valueField: "day", name: "Day", color: "#ba4d51" }, 
                { valueField: "night", name: "Night", color: "#5f8b95" }
            ],
            title: 'Average Temperature in London',
            valueAxis: { valueMarginsEnabled: false },
            tooltip: {
                enabled: true,
                customizeTooltip: function (e) {
                    return { text: e.originalValue + ' &deg;C' }
                }
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->