var dataSource = [
    { country: 'China', y014: 320866959, y1564: 853191410, y65: 87774113 },
    { country: 'India', y014: 340419115, y1564: 626520945, y65: 47063757 },
    { country: 'United States', y014: 58554755, y1564: 182172625, y65: 34835293},
    { country: 'Indonesia', y014: 68715705, y1564: 146014815, y65: 10053690},
    { country: 'Brazil', y014: 50278034, y1564: 113391494, y65: 9190842},
    { country: 'Russia', y014: 26465156, y1564: 101123777, y65: 18412243}
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: { argumentField: 'country' },
        series: [
            { valueField: 'y014', name: '0-14 years' },
            { valueField: 'y1564', name: '15-64 years' },
            { valueField: 'y65', name: '65 years and older' }
        ],
        title: 'Population: Age Structure (2000)',
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        valueAxis: {
            label: { format: 'largeNumber' }
        },
        onSeriesClick: function (info) {
            var series = info.target;
            series.isSelected() ? series.clearSelection() : series.select();
        },
        onSeriesSelectionChanged: function (info) {
            var series = info.target;
            if (series.isSelected()) {
                var valueArray = [];
                
                $.each(series.getAllPoints(), function (_, currentPoint) {
                    valueArray.push(currentPoint.value);
                });
                
                valueArray.max = function () {
                    return Math.max.apply(Math, valueArray);
                };
                
                $('#outputText').html('Maximum value in the &#34;' + series.name + '&#34; series: ' + valueArray.max());
            } else {
                $('#outputText').html('');
            }
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    outputText: ko.observable(),
    chartConfiguration: {
        dataSource: dataSource,
        commonSeriesSettings: { argumentField: 'country' },
        series: [
            { valueField: 'y014', name: '0-14 years' },
            { valueField: 'y1564', name: '15-64 years' },
            { valueField: 'y65', name: '65 years and older' }
        ],
        title: 'Population: Age Structure (2000)',
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        valueAxis: {
            label: { format: 'largeNumber' }
        },
        onSeriesHoverChanged: function (info) {
            var series = info.target;
            if (series.isHovered()) {
                var valueArray = [];
                
                ko.utils.arrayForEach(series.getAllPoints(), function (_, currentPoint) {
                    valueArray.push(currentPoint.value);
                });
                
                valueArray.max = function () {
                    return Math.max.apply(Math, valueArray);
                };
                
                viewModel.outputText('Maximum value in the "' + series.name + '" series: ' + valueArray.max());
            } else {
                 viewModel.outputText('');
            }
        },
        onSeriesClick: function (info) {
            var series = info.target;
            series.isSelected() ? series.clearSelection() : series.select();
        },
        onSeriesSelectionChanged: function (info) {
            var series = info.target;
            if (series.isSelected()) {
                var valueArray = [];
                
                ko.utils.arrayForEach(series.getAllPoints(), function (currentPoint) {
                    valueArray.push(currentPoint.value);
                });
                
                valueArray.max = function () {
                    return Math.max.apply(Math, valueArray);
                };
                
                viewModel.outputText('Maximum value in the "' + series.name + '" series: ' + valueArray.max());
            } else {
                viewModel.outputText('');
            }
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('exampleController', function ($scope) {
        $scope.outputText = "";
        $scope.chartConfiguration = {
            dataSource: dataSource,
            commonSeriesSettings: { argumentField: 'country' },
            series: [
                { valueField: 'y014', name: '0-14 years' },
                { valueField: 'y1564', name: '15-64 years' },
                { valueField: 'y65', name: '65 years and older' }
            ],
            title: 'Population: Age Structure (2000)',
            legend: {
                horizontalAlignment: 'center',
                verticalAlignment: 'bottom'
            },
            valueAxis: {
                label: { format: 'largeNumber' }
            },
            onSeriesClick: function (info) {
                var series = info.target;
                series.isSelected() ? series.clearSelection() : series.select();
            },
            onSeriesSelectionChanged: function (info) {
                var series = info.target;
                if (series.isSelected()) {
                    var valueArray = [];
                    
                    angular.forEach(series.getAllPoints(), function (currentPoint) {
                        valueArray.push(currentPoint.value);
                    });
                    
                    valueArray.max = function () {
                        return Math.max.apply(Math, valueArray);
                    };
                    
                    $scope.outputText = 'Maximum value in the "' + series.name + '" series: ' + valueArray.max();
                } else {
                    $scope.outputText = '';
                }
            }
        };
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->