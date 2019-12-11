//<!--@jQuery-->
$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        startValue: 0,
        endValue: 100,
        value: 34,
        subvalues: [30.3, 34.8, 7],
        tooltip: { enabled: true }
    });
    
    $('#barGaugeContainer').dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [30.3, 34.8, -8, 7],
        tooltip: { enabled: true }
    });
    
    $('#linearGaugeContainer').dxLinearGauge({
        startValue: 0,
        endValue: 100,
        value: 30.3,
        subvalues: [30.3, 34.8, 7],
        tooltip: { enabled: true }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    circularGaugeConfig: {
        startValue: 0,
        endValue: 100,
        value: 34,
        subvalues: [30.3, 34.8, 7],
        tooltip: { enabled: true }
    },
    
    barGaugeConfig: {
        startValue: -50,
        endValue: 50,
        values: [30.3, 34.8, -8, 7],
        tooltip: { enabled: true }
    },
    
    linearGaugeConfig: {
        startValue: 0,
        endValue: 100,
        value: 30.3,
        subvalues: [30.3, 34.8, 7],
        tooltip: { enabled: true }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('gaugesController', function ($scope) {
        $scope.circularGaugeConfig = {
            startValue: 0,
            endValue: 100,
            value: 34,
            subvalues: [30.3, 34.8, 7],
            tooltip: { enabled: true }
        };
        
        $scope.barGaugeConfig = {
            startValue: -50,
            endValue: 50,
            values: [30.3, 34.8, -8, 7],
            tooltip: { enabled: true }
        };
        
        $scope.linearGaugeConfig = {
            startValue: 0,
            endValue: 100,
            value: 30.3,
            subvalues: [30.3, 34.8, 7],
            tooltip: { enabled: true }
        };
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->