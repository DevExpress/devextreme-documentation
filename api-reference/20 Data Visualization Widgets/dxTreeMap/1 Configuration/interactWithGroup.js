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
        dataSource: fruitsVegetables
    }).dxTreeMap('instance');

    $("#checkBoxContainer").dxCheckBox({
        text: 'interactWithGroup',
        value: false,
        onValueChanged: function (e) {
            treeMap.option('interactWithGroup', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    data: fruitsVegetables,
    interactWithGroup: ko.observable(false)
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('treeMapController', function ($scope) {
        $scope.data = fruitsVegetables;
        $scope.interactWithGroup = false;
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->