//<!--@jQuery-->
$(function () {
    var treeMap = $("#treeMapContainer").dxTreeMap({
        dataSource: '/Content/data/displays.json',
        colorizer: { palette: 'Default' }
    }).dxTreeMap('instance');

    $("#selectBoxContainer").dxSelectBox({
        items: ['Default', 'Soft Pastel', 'Harmony Light', 'Pastel',
            'Bright', 'Soft', 'Ocean', 'Vintage', 'Violet'],
        value: 'Default',
        onValueChanged: function (e) {
            treeMap.option('colorizer.palette', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    currentPalette: ko.observable('Default')
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('treeMapController', function ($scope) {
        $scope.currentPalette = 'Default';
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->