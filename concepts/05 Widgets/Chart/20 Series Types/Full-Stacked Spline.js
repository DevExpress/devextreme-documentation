var dataSource = [
    { quarter: '2011 Q1', android: 36.12, ios: 18.31, others: 45.57},
    { quarter: '2011 Q2', android: 46.86, ios: 18.82, others: 34.31},
    { quarter: '2011 Q3', android: 57.32, ios: 13.80, others: 28.79},
    { quarter: '2011 Q4', android: 52.85, ios: 23.00, others: 24.15},
    { quarter: '2012 Q1', android: 59.03, ios: 23.05, others: 17.93},
    { quarter: '2012 Q2', android: 68.05, ios: 16.88, others: 15.07},
    { quarter: '2012 Q3', android: 75.10, ios: 14.85, others: 10.05},
    { quarter: '2012 Q4', android: 70.15, ios: 20.98, others: 8.87 },
    { quarter: '2013 Q1', android: 74.98, ios: 17.30, others: 7.73 },
    { quarter: '2013 Q2', android: 79.27, ios: 13.20, others: 7.53 },
    { quarter: '2013 Q3', android: 81.04, ios: 12.95, others: 6.01 },
    { quarter: '2013 Q4', android: 78.07, ios: 17.61, others: 4.32 },
    { quarter: '2014 Q1', android: 83.06, ios: 15.55, others: 3.8  },
    { quarter: '2014 Q2', android: 84.73, ios: 11.68, others: 3.59 },
    { quarter: '2014 Q3', android: 84.37, ios: 11.70, others: 4    }
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'fullstackedspline',
            argumentField: 'quarter',
            point: { visible: false }
        },
        series: [
            { valueField: 'android', name: 'Android' },
            { valueField: 'ios', name: 'iOS' },
            { valueField: 'others', name: 'others' }
        ],
        title: 'IDC: Smartphone Market Share',
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        crosshair: { enabled: true },
        argumentAxis: {
            valueMarginsEnabled: false,
            label: { overlappingBehavior: 'stagger' }
        },
        tooltip: {
            enabled: true,
            customizeTooltip: function (e) {
                return { text: e.originalValue + '%' }
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
            type: 'fullstackedspline',
            argumentField: 'quarter',
            point: { visible: false }
        },
        series: [
            { valueField: 'android', name: 'Android' },
            { valueField: 'ios', name: 'iOS' },
            { valueField: 'others', name: 'others' }
        ],
        title: 'IDC: Smartphone Market Share',
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        crosshair: { enabled: true },
        argumentAxis: {
            valueMarginsEnabled: false,
            label: { overlappingBehavior: 'stagger' }
        },
        tooltip: {
            enabled: true,
            customizeTooltip: function (e) {
                return { text: e.originalValue + '%' }
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
                type: 'fullstackedspline',
                argumentField: 'quarter',
                point: { visible: false }
            },
            series: [
                { valueField: 'android', name: 'Android' },
                { valueField: 'ios', name: 'iOS' },
                { valueField: 'others', name: 'others' }
            ],
            title: 'IDC: Smartphone Market Share',
            legend: {
                verticalAlignment: 'bottom',
                horizontalAlignment: 'center'
            },
            crosshair: { enabled: true },
            argumentAxis: {
                valueMarginsEnabled: false,
                label: { overlappingBehavior: 'stagger' }
            },
            tooltip: {
                enabled: true,
                customizeTooltip: function (e) {
                    return { text: e.originalValue + '%' }
                }
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->