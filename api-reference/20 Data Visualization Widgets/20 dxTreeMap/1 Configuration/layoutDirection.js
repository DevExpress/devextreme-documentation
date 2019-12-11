var layoutDirections = [
    'leftTopRightBottom', 'leftBottomRightTop', 'rightTopLeftBottom', 'rightBottomLeftTop'
];

//<!--@jQuery-->
$(function () {
    var treeMap = $("#treeMapContainer").dxTreeMap({
        dataSource: '/Content/data/displays.json'
    }).dxTreeMap('instance');

    $("#selectBoxContainer").dxSelectBox({
        items: layoutDirections,
        value: layoutDirections[0],
        onValueChanged: function (e) {
            treeMap.option('layoutDirection', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    layoutDirections: layoutDirections,
    selectedLayoutDirection: ko.observable(layoutDirections[0])
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('treeMapController', function ($scope) {
        $scope.layoutDirections = layoutDirections,
        $scope.selectedLayoutDirection = layoutDirections[0]
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->