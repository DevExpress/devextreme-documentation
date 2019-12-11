var dataSource = [
    { year: 1997, smp: 263, mmp: 226, cnstl: 10, cluster: 1 },
    { year: 1999, smp: 169, mmp: 256, cnstl: 66, cluster: 7 },
    { year: 2001, smp: 57, mmp: 257, cnstl: 143, cluster: 43 },
    { year: 2003, smp: 0, mmp: 163, cnstl: 127, cluster: 210 },
    { year: 2005, smp: 0, mmp: 103, cnstl: 36, cluster: 361 },
    { year: 2007, smp: 0, mmp: 91, cnstl: 3, cluster: 406 },
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'spline',
            argumentField: 'year'
        },
        series: [
            { valueField: 'smp', name: 'SMP' },
            { valueField: 'mmp', name: 'MMP' },
            { valueField: 'cnstl', name: 'Cnstl' },
            { valueField: 'cluster', name: 'Cluster' },
        ],
        tooltip: { enabled: true },
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        title: 'Architecture Share Over Time (Count)'
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    chartConfiguration: {
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'spline',
            argumentField: 'year'
        },
        series: [
            { valueField: 'smp', name: 'SMP' },
            { valueField: 'mmp', name: 'MMP' },
            { valueField: 'cnstl', name: 'Cnstl' },
            { valueField: 'cluster', name: 'Cluster' },
        ],
        tooltip: { enabled: true },
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        title: 'Architecture Share Over Time (Count)'
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
                type: 'spline',
                argumentField: 'year'
            },
            series: [
                { valueField: 'smp', name: 'SMP' },
                { valueField: 'mmp', name: 'MMP' },
                { valueField: 'cnstl', name: 'Cnstl' },
                { valueField: 'cluster', name: 'Cluster' },
            ],
            tooltip: { enabled: true },
            legend: {
                verticalAlignment: 'bottom',
                horizontalAlignment: 'center'
            },
            title: 'Architecture Share Over Time (Count)'
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->