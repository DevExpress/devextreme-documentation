var oilCosts = [
    { month: 1, 2012: 107 }, { month: 2, 2012: 112 },
    { month: 3, 2012: 123 }, { month: 4, 2012: 123 },
    { month: 5, 2012: 116 }, { month: 6, 2012: 102 },
    { month: 7, 2012: 94 }, { month: 8, 2012: 105 },
    { month: 9, 2012: 113 }, { month: 10, 2012: 111 },
    { month: 11, 2012: 107 }, { month: 12, 2012: 110 }
];

//<!--@jQuery-->
$(function () {
    $("#sparklineContainer").dxSparkline({
        dataSource: oilCosts,
        argumentField: 'month',
        valueField: '2012',
        type: 'splinearea',
        lineColor: 'darkolivegreen'
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    sparklineConfiguration: {
        dataSource: oilCosts,
        argumentField: 'month',
        valueField: '2012',
        type: 'splinearea',
        lineColor: 'darkolivegreen'
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
            valueField: '2012',
            type: 'splinearea',
            lineColor: 'darkolivegreen'
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->