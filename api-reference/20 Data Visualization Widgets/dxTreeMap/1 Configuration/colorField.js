var fruitsVegetables = [{
    name: 'Fruits',
    items: [
        { name: 'Apples', value: 4,
          colorA: '#cbc87b', colorB: '#d1a1d1', colorC: '#75c099' },
        { name: 'Oranges', value: 10,
          colorA: '#9ab57e', colorB: '#eeacc5', colorC: '#acc371' },
        { name: 'Lemons', value: 6,
          colorA: '#e55253', colorB: '#7b5685', colorC: '#378a8a' }
    ]
}, {
    name: 'Vegetables',
    items: [
        { name: 'Cucumbers', value: 4,
          colorA: '#60a69f', colorB: '#dea484', colorC: '#70c92f' },
        { name: 'Tomatoes', value: 8,
          colorA: '#78b6d9', colorB: '#efc59c', colorC: '#f8ca00' },
        { name: 'Turnips', value: 7,
          colorA: '#6682bb', colorB: '#cb715e', colorC: '#bd1550' }
    ]
}];

var colorFields = [
    { name: 'Color Field A', value: 'colorA' },
    { name: 'Color Field B', value: 'colorB' },
    { name: 'Color Field C', value: 'colorC' }
];
//<!--@jQuery-->
$(function () {
    var treeMap = $("#treeMapContainer").dxTreeMap({
        dataSource: fruitsVegetables,
        colorField: 'colorA'
    }).dxTreeMap('instance');

    $("#selectBoxContainer").dxSelectBox({
        dataSource: colorFields,
        displayExpr: 'name',
        valueExpr: 'value',
        value: colorFields[0].value,
        onValueChanged: function (e) {
            treeMap.option('colorField', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    data: fruitsVegetables,
    colorFields: colorFields,
    selectedColorField: ko.observable(colorFields[0].value)
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('treeMapController', function ($scope) {
        $scope.data = fruitsVegetables;
        $scope.colorFields = colorFields;
        $scope.selectedColorField = colorFields[0].value
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->