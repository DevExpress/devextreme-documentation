var dataSource = [
    { year: 1995, revenue: 6.075, grossmargin: 4.729 },
    { year: 1996, revenue: 9.050, grossmargin: 6.905 },
    { year: 1997, revenue: 11.936, grossmargin: 9.766 },
    { year: 1998, revenue: 15.262, grossmargin: 12.802 },
    { year: 1999, revenue: 19.747, grossmargin: 16.933 },
    { year: 2000, revenue: 22.956, grossmargin: 19.954 },
    { year: 2001, revenue: 25.296, grossmargin: 21.841 },
    { year: 2002, revenue: 28.365, grossmargin: 22.666 },
    { year: 2003, revenue: 32.187, grossmargin: 26.128 },
    { year: 2004, revenue: 36.835, grossmargin: 30.239 },
    { year: 2005, revenue: 39.788, grossmargin: 33.757 },
    { year: 2006, revenue: 44.282, grossmargin: 36.632 },
    { year: 2007, revenue: 51.122, grossmargin: 40.429 },
    { year: 2008, revenue: 60.420, grossmargin: 48.822 },
    { year: 2009, revenue: 58.437, grossmargin: 46.282 },
    { year: 2010, revenue: 62.484, grossmargin: 50.089 },
    { year: 2011, revenue: 69.943, grossmargin: 54.366 },
    { year: 2012, revenue: 73.723, grossmargin: 56.193 },
    { year: 2013, revenue: 77.849, grossmargin: 57.6 },
    { year: 2014, revenue: 86.833, grossmargin: 59.755 }
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'splinearea',
            argumentField: 'year'
        },
        series: [
            { valueField: 'revenue', name: 'Revenue (mln USD)' },
            { valueField: 'grossmargin', name: 'Gross margin (mln USD)' }
        ],
        title: 'Microsoft Inc. Yearly Income Statements',
        tooltip: {
            enabled: true,
            customizeTooltip: function (e) {
                return { text: e.originalValue + ' mln USD' }
            }
        },
        argumentAxis: { valueMarginsEnabled: false },
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center',
            itemTextPosition: 'right'
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    chartConfiguration: {
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'splinearea',
            argumentField: 'year'
        },
        series: [
            { valueField: 'revenue', name: 'Revenue (mln USD)' },
            { valueField: 'grossmargin', name: 'Gross margin (mln USD)' }
        ],
        title: 'Microsoft Inc. Yearly Income Statements',
        tooltip: {
            enabled: true,
            customizeTooltip: function (e) {
                return { text: e.originalValue + ' mln USD' }
            }
        },
        argumentAxis: { valueMarginsEnabled: false },
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center',
            itemTextPosition: 'right'
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
                type: 'splinearea',
                argumentField: 'year'
            },
            series: [
                { valueField: 'revenue', name: 'Revenue (mln USD)' },
                { valueField: 'grossmargin', name: 'Gross margin (mln USD)' }
            ],
            title: 'Microsoft Inc. Yearly Income Statements',
            tooltip: {
                enabled: true,
                customizeTooltip: function (e) {
                    return { text: e.originalValue + ' mln USD' }
                }
            },
            argumentAxis: { valueMarginsEnabled: false },
            legend: {
                verticalAlignment: 'bottom',
                horizontalAlignment: 'center',
                itemTextPosition: 'right'
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->