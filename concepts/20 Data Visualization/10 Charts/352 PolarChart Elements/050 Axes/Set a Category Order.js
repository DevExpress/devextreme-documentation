var dataSource = [
    { state: 'Illinois', year1998: 423.721, year2001: 476.851, year2004: 528.904 },
    { state: 'Michigan', year1998: 308.845, year2001: 335.793, year2004: 372.576 },
    { state: 'Wisconsin', year1998: 160.274, year2001: 182.373, year2004: 211.727 },
    { state: 'Ohio', year1998: 348.555, year2001: 374.771, year2004: 418.258 },
    { state: 'Indiana', year1998: 178.719, year2001: 195.769, year2004: 227.271 }
];

//<!--@jQuery-->
$(function () {
    $("#polarChartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'state',
            type: 'bar',
            label: {
                visible: true,
                format: {
                    type: "fixedPoint",
                    precision: 1
                }
            }
        },
        series: [
            { valueField: 'year2004', name: '2004' },
            { valueField: 'year2001', name: '2001' },
            { valueField: 'year1998', name: '1998' }
        ],
        argumentAxis: {
            categories: ['Illinois', 'Indiana', 'Michigan', 'Ohio']
        },
        title: 'Great Lakes Gross State Product'
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    polarChartConfiguration: {
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'state',
            type: 'bar',
            label: {
                visible: true,
                format: {
                    type: "fixedPoint",
                    precision: 1
                }
            }
        },
        series: [
            { valueField: 'year2004', name: '2004' },
            { valueField: 'year2001', name: '2001' },
            { valueField: 'year1998', name: '1998' }
        ],
        argumentAxis: {
            categories: ['Illinois', 'Indiana', 'Michigan', 'Ohio']
        },
        title: 'Great Lakes Gross State Product'
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
                argumentField: 'state',
                type: 'bar',
                label: {
                    visible: true,
                    format: {
                        type: "fixedPoint",
                        precision: 1
                    }
                }
            },
            series: [
                { valueField: 'year2004', name: '2004' },
                { valueField: 'year2001', name: '2001' },
                { valueField: 'year1998', name: '1998' }
            ],
            argumentAxis: {
                categories: ['Illinois', 'Indiana', 'Michigan', 'Ohio']
            },
            title: 'Great Lakes Gross State Product'
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->