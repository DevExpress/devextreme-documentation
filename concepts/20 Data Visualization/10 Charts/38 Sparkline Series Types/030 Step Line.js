var silverCosts = [
    { month: 1, 2012: 27 }, { month: 2, 2012: 33 },
    { month: 3, 2012: 35 }, { month: 4, 2012: 32 },
    { month: 5, 2012: 30 }, { month: 6, 2012: 28 },
    { month: 7, 2012: 27 }, { month: 8, 2012: 27 },
    { month: 9, 2012: 31 }, { month: 10, 2012: 34 },
    { month: 11, 2012: 31 }, { month: 12, 2012: 33 }
];

//<!--@jQuery-->
$(function () {
    $("#sparklineContainer").dxSparkline({
        dataSource: silverCosts,
        argumentField: 'month',
        valueField: '2012',
        type: 'stepline',
        lineColor: 'darksalmon'
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    sparklineConfiguration: {
        dataSource: silverCosts,
        argumentField: 'month',
        valueField: '2012',
        type: 'stepline',
        lineColor: 'darksalmon'
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('sparklineController', function ($scope) {
        $scope.sparklineConfiguration = {
            dataSource: silverCosts,
            argumentField: 'month',
            valueField: '2012',
            type: 'stepline',
            lineColor: 'darksalmon'
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->