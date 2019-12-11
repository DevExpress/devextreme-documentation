var copperCosts = [
    { month: 1, 2012: 7501 }, { month: 2, 2012: 8470 },
    { month: 3, 2012: 8591 }, { month: 4, 2012: 8459 },
    { month: 5, 2012: 8320 }, { month: 6, 2012: 7465 },
    { month: 7, 2012: 7475 }, { month: 8, 2012: 7430 },
    { month: 9, 2012: 7614 }, { month: 10, 2012: 8245 },
    { month: 11, 2012: 7727 }, { month: 12, 2012: 7880 }
];

//<!--@jQuery-->
$(function () {
    $("#sparklineContainer").dxSparkline({
        dataSource: copperCosts,
        argumentField: 'month',
        valueField: '2012',
        type: 'winloss',
        winlossThreshold: 8000,
        showFirstLast: false,
        winColor: '#7e4452',
        lossColor: '#ebdd8f'
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    sparklineConfiguration: {
        dataSource: copperCosts,
        argumentField: 'month',
        valueField: '2012',
        type: 'winloss',
        winlossThreshold: 8000,
        showFirstLast: false,
        winColor: '#7e4452',
        lossColor: '#ebdd8f'
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('sparklineController', function ($scope) {
        $scope.sparklineConfiguration = {
            dataSource: copperCosts,
            argumentField: 'month',
            valueField: '2012',
            type: 'winloss',
            winlossThreshold: 8000,
            showFirstLast: false,
            winColor: '#7e4452',
            lossColor: '#ebdd8f'
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->