var silverCosts = [
    { month: 1, 2010: 17 }, { month: 2, 2010: 28 },
    { month: 3, 2010: 34 }, { month: 4, 2010: 37 },
    { month: 5, 2010: 47 }, { month: 6, 2010: 37 },
    { month: 7, 2010: 34 }, { month: 8, 2010: 40 },
    { month: 9, 2010: 41 }, { month: 10, 2010: 30 },
    { month: 11, 2010: 34 }, { month: 12, 2010: 32 }
];

//<!--@jQuery-->
$(function () {
    var sparklineInstance = $('#sparklineContainer').dxSparkline({
        dataSource: silverCosts,
        argumentField: 'month',
        valueField: '2010',
        type: 'area',
        lineColor: 'palevioletred',
        showMinMax: true
    }).dxSparkline("instance");

    $('#horizontalAlignmentSelectBoxContainer').dxSelectBox({
        dataSource: ['left', 'center', 'right'],
        value: 'center',
        onValueChanged: function (e) {
            sparklineInstance.option({
                tooltip: { horizontalAlignment: e.value }
            });
        }
    });
    
    $('#verticalAlignmentSelectBoxContainer').dxSelectBox({
        dataSource: ['top', 'bottom'],
        value: 'top',
        onValueChanged: function (e) {
            sparklineInstance.option({
                tooltip: { verticalAlignment: e.value }
            });
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    sparklineInstance: {},
    sparklineConfiguration: {
        dataSource: silverCosts,
        argumentField: 'month',
        valueField: '2010',
        type: 'area',
        lineColor: 'palevioletred',
        showMinMax: true,
        onInitialized: function (e) {
            viewModel.sparklineInstance = e.component;
        }
    },
    
    horizontalAlignmentSelectBoxConfiguration: {
        dataSource: ['left', 'center', 'right'],
        value: 'center',
        onValueChanged: function (e) {
            viewModel.sparklineInstance.option({
                tooltip: { horizontalAlignment: e.value }
            });
        }
    },
    
    verticalAlignmentSelectBoxConfiguration: {
        dataSource: ['top', 'bottom'],
        value: 'top',
        onValueChanged: function (e) {
            viewModel.sparklineInstance.option({
                tooltip: { verticalAlignment: e.value }
            });
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('sparklineController', function ($scope) {
        $scope.sparklineInstance = {};
        $scope.sparklineConfiguration = {
            dataSource: silverCosts,
            argumentField: 'month',
            valueField: '2010',
            type: 'area',
            lineColor: 'palevioletred',
            showMinMax: true,
            onInitialized: function (e) {
                $scope.sparklineInstance = e.component;
            }
        };
        
        $scope.horizontalAlignmentSelectBoxConfiguration = {
            dataSource: ['left', 'center', 'right'],
            value: 'center',
            onValueChanged: function (e) {
                $scope.sparklineInstance.option({
                    tooltip: { horizontalAlignment: e.value }
                });
            }
        };
        
        $scope.verticalAlignmentSelectBoxConfiguration = {
            dataSource: ['top', 'bottom'],
            value: 'top',
            onValueChanged: function (e) {
                $scope.sparklineInstance.option({
                    tooltip: { verticalAlignment: e.value }
                });
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->