var layoutAlgorithms = [
    { name: 'Squarified', value: 'squarified' },
    { name: 'Strip', value: 'strip' },
    { name: 'Slice and Dice', value: 'sliceanddice' },
    { name: 'Custom', value: 'custom' }
];

//<!--@jQuery-->
$(function () {
    var treeMap = $("#treeMapContainer").dxTreeMap({
        dataSource: '/Content/data/displays.json'
    }).dxTreeMap('instance');

    $("#selectBoxContainer").dxSelectBox({
        dataSource: layoutAlgorithms,
        displayExpr: 'name',
        valueExpr: 'value',
        value: layoutAlgorithms[0].value,
        onValueChanged: function (e) {
            if (e.value == 'custom') {
                treeMap.option('layoutAlgorithm', customAlgorithm);
            }
            else {
                treeMap.option('layoutAlgorithm', e.value);
            }
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    layoutAlgorithms: layoutAlgorithms,
    updateLayoutAlgorithm: function (e) {
        var treeMap = $("#treeMapContainer").dxTreeMap('instance');
        if (e.value == 'custom') {
            treeMap.option('layoutAlgorithm', customAlgorithm);
        }
        else {
            treeMap.option('layoutAlgorithm', e.value);
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('treeMapController', function ($scope) {
        $scope.layoutAlgorithms = layoutAlgorithms,
        $scope.updateLayoutAlgorithm = function (e) {
            var treeMap = $("#treeMapContainer").dxTreeMap('instance');
            if (e.value == 'custom') {
                treeMap.option('layoutAlgorithm', customAlgorithm);
            }
            else {
                treeMap.option('layoutAlgorithm', e.value);
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->

function customAlgorithm (arg) {
    var side = 0,
        totalRect = arg.rect.slice(),
        totalSum = arg.sum;
 
    arg.items.forEach(function (item) {
        var size = Math.round((totalRect[side + 2] -
                totalRect[side]) * item.value / totalSum),
            pos,
            rect = totalRect.slice();

        totalSum -= item.value;
        rect[side + 2] = totalRect[side] = totalRect[side] + size;
        item.rect = rect;
        side = 1 - side;
    });
};