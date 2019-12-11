var goldCosts = [
    { month: 1, 2011: 1358 }, { month: 2, 2011: 1375 },
    { month: 3, 2011: 1423 }, { month: 4, 2011: 1486 },
    { month: 5, 2011: 1511 }, { month: 6, 2011: 1529 },
    { month: 7, 2011: 1573 }, { month: 8, 2011: 1765 },
    { month: 9, 2011: 1771 }, { month: 10, 2011: 1672 },
    { month: 11, 2011: 1741 }, { month: 12, 2011: 1643 }
];

//<!--@jQuery-->
$(function () {
    $("#sparklineContainer").dxSparkline({
        dataSource: goldCosts,
        argumentField: 'month',
        valueField: '2011',
        type: 'area',
        lineColor: 'yellowgreen'
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    sparklineConfiguration: {
        dataSource: goldCosts,
        argumentField: 'month',
        valueField: '2011',
        type: 'area',
        lineColor: 'yellowgreen'
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('sparklineController', function ($scope) {
        $scope.sparklineConfiguration = {
            dataSource: goldCosts,
            argumentField: 'month',
            valueField: '2011',
            type: 'area',
            lineColor: 'yellowgreen'
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->