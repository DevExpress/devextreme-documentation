var oilCosts = [
    { month: 1, 2010: 77 }, { month: 2, 2010: 72 },
    { month: 3, 2010: 79 }, { month: 4, 2010: 82 },
    { month: 5, 2010: 86 }, { month: 6, 2010: 73 },
    { month: 7, 2010: 73 }, { month: 8, 2010: 77 },
    { month: 9, 2010: 76 }, { month: 10, 2010: 81 },
    { month: 11, 2010: 83 }, { month: 12, 2010: 89 }
];

//<!--@jQuery-->
$(function () {
    $("#sparklineContainer").dxSparkline({
        dataSource: oilCosts,
        argumentField: 'month',
        valueField: '2010',
        type: 'spline',
        lineColor: 'peru'
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    sparklineConfiguration: {
        dataSource: oilCosts,
        argumentField: 'month',
        valueField: '2010',
        type: 'spline',
        lineColor: 'peru'
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('sparklineController', function ($scope) {
        $scope.sparklineConfiguration = {
            dataSource: oilCosts,
            argumentField: 'month',
            valueField: '2010',
            type: 'spline',
            lineColor: 'peru'
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->