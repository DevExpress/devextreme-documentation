//<!--@jQuery-->
$(function () {
    var treeMap = $("#treeMapContainer").dxTreeMap({
        dataSource: '/Content/data/mostPopulatedCities.json',
        maxDepth: 1
    }).dxTreeMap('instance');
    
    $("#numberBoxContainer").dxNumberBox({
        min: 1, max: 3,
        value: 1,
        showSpinButtons: true,
        onValueChanged: function (e) {
            treeMap.option('maxDepth', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    currentMaxDepth: ko.observable(1)
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('treeMapController', function ($scope) {
        $scope.currentMaxDepth = 1;
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->