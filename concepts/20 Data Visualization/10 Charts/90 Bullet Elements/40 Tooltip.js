//<!--@jQuery-->
$(function () {
    $('#bulletContainer').dxBullet({
        startScaleValue: 0,
        endScaleValue: 100,
        target: 95,
        value: 64,
        color: 'steelblue'
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    bulletConfiguration: {
        startScaleValue: 0,
        endScaleValue: 100,
        target: 95,
        value: 64,
        color: 'steelblue'
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('bulletController', function ($scope) {
        $scope.bulletConfiguration = {
            startScaleValue: 0,
            endScaleValue: 100,
            target: 95,
            value: 64,
            color: 'steelblue'
        };
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->