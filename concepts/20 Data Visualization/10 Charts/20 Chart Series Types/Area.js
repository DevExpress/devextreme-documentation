var dataSource = [
    { company: 'Apple Inc.',           firstQ: 724.8, secondQ: 772.6, thirdQ: 611.3, fourthQ: 586.9 },
    { company: 'Google/Alphabet Inc.', firstQ: 345.8, secondQ: 334, thirdQ: 441.5, fourthQ: 535.1 },
    { company: 'Microsoft',            firstQ: 333.5, secondQ: 357.2, thirdQ: 356.3, fourthQ: 443.2 },
    { company: 'Exxon Mobil',          firstQ: 356.5, secondQ: 347.9, thirdQ: 308.3, fourthQ: 324.5 },
    { company: 'Berkshire Hathaway',   firstQ: 356.5, secondQ: 336, thirdQ: 320, fourthQ: 323.4 }
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'company',
            type: 'area'
        },
        series: [
            { valueField: 'firstQ', name: '1st quarter' },
            { valueField: 'secondQ', name: '2nd quarter' },
            { valueField: 'thirdQ', name: '3rd quarter' },
            { valueField: 'fourthQ', name: '4th quarter' }
        ],
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        palette: 'Vintage',
        title: 'Corporations with the Highest Market Value (2015)',
        argumentAxis: { valueMarginsEnabled: false },
        valueAxis: { title: 'Capitalization, bln USD' }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    chartConfiguration: {
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'company',
            type: 'area'
        },
        series: [
            { valueField: 'firstQ', name: '1st quarter' },
            { valueField: 'secondQ', name: '2nd quarter' },
            { valueField: 'thirdQ', name: '3rd quarter' },
            { valueField: 'fourthQ', name: '4th quarter' }
        ],
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        palette: 'Vintage',
        title: 'Corporations with the Highest Market Value (2015)',
        argumentAxis: { valueMarginsEnabled: false },
        valueAxis: { title: 'Capitalization, bln USD' }
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
                argumentField: 'company',
                type: 'area'
            },
            series: [
                { valueField: 'firstQ', name: '1st quarter' },
                { valueField: 'secondQ', name: '2nd quarter' },
                { valueField: 'thirdQ', name: '3rd quarter' },
                { valueField: 'fourthQ', name: '4th quarter' }
            ],
            legend: {
                verticalAlignment: 'bottom',
                horizontalAlignment: 'center'
            },
            palette: 'Vintage',
            title: 'Corporations with the Highest Market Value (2015)',
            argumentAxis: { valueMarginsEnabled: false },
            valueAxis: { title: 'Capitalization, bln USD' }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->