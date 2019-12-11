var fruitsVegetables = [{
    name: 'Fruits',
    items: [
        { name: 'Apples', value: 4 },
        { name: 'Oranges', value: 10 },
        { name: 'Lemons', value: 6 }
    ]
}, {
    name: 'Vegetables',
    items: [
        { name: 'Cucumbers', value: 4 },
        { name: 'Tomatoes', value: 8 },
        { name: 'Turnips', value: 7 }
    ]
}];

//<!--@jQuery-->
$(function () {
    var treeMap = $("#treeMapContainer").dxTreeMap({
        dataSource: fruitsVegetables,
        colorizer: { palette: 'Soft' },
        onClick: function (e) {
            e.node.select(!e.node.isSelected());
        },
        selectionMode: 'single'
    }).dxTreeMap('instance');

    $("#selectBoxContainer").dxSelectBox({
        items: ['single', 'multiple', 'none'],
        value: 'single',
        onValueChanged: function (e) {
            treeMap.option('selectionMode', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    data: fruitsVegetables,
    currentSelectionMode: ko.observable('single'),
    selectNode: function (e) {
        e.node.select(!e.node.isSelected());
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('treeMapController', function ($scope) {
        $scope.data = fruitsVegetables;
        $scope.currentSelectionMode = 'single';
        $scope.selectNode = function (e) {
            e.node.select(!e.node.isSelected());
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->