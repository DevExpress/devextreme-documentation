//<!--@jQuery-->
$(function () {
    var treeMap = $("#treeMapContainer").dxTreeMap({
        dataSource: '/Content/data/displays.json',
        colorizer: { colorizeGroups: false }
    }).dxTreeMap('instance');

    $("#checkBoxContainer").dxCheckBox({
        text: 'colorizeGroups',
        value: false,
        onValueChanged: function (e) {
            treeMap.option('colorizer.colorizeGroups', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    colorizeGroups: ko.observable(false)
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('treeMapController', function ($scope) {
        $scope.colorizeGroups = false;
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->