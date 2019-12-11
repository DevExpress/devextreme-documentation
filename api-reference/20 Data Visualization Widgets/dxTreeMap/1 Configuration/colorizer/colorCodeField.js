var fruitsVegetables = [{
    name: 'Fruits',
    items: [
        { name: 'Apples', amount: 4, weight: 667 },
        { name: 'Oranges', amount: 10, weight: 2000 },
        { name: 'Lemons', amount: 6, weight: 1200 }
    ]
}, {
    name: 'Vegetables',
    items: [
        { name: 'Cucumbers', amount: 4, weight: 308 },
        { name: 'Tomatoes', amount: 8, weight: 800 },
        { name: 'Potatoes', amount: 7, weight: 1167 }
    ]
}];

var colorCodeFields = [{
    name: "amount",
    options: {
        colorCodeField: 'amount',
        range: [1, 10]
    }
}, {
    name: "weight",
    options: {
        colorCodeField: 'weight',
        range: [300, 2000]
    }
}];

//<!--@jQuery-->
$(function () {
    var treeMap = $("#treeMapContainer").dxTreeMap({
        dataSource: fruitsVegetables,
        valueField: 'amount',
        colorizer: $.extend({}, {
            type: 'gradient',
            palette: ['yellow', 'green']
        }, colorCodeFields[0].options)
    }).dxTreeMap('instance');

    $("#selectBoxContainer").dxSelectBox({
        dataSource: colorCodeFields,
        displayExpr: 'name',
        valueExpr: 'options',
        value: colorCodeFields[0].options,
        onValueChanged: function (e) {
            treeMap.option('colorizer', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var ViewModel = function () {
    this.data = fruitsVegetables;
    this.colorCodeFields = colorCodeFields;
    this.currentColorCodeField = ko.observable(colorCodeFields[0].options);
    this.colorizerOptions = ko.pureComputed(function () {
        return $.extend({}, {
            type: 'gradient',
            palette: ['yellow', 'green']
        }, this.currentColorCodeField())
    })
};

ko.applyBindings(ViewModel());
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('treeMapController', function ($scope) {
        $scope.data = fruitsVegetables;
        $scope.colorCodeFields = colorCodeFields;
        $scope.currentColorCodeField = colorCodeFields[0].options;
        $scope.$watch('currentColorCodeField', function () {
            $scope.colorizerOptions = angular.extend({}, {
                type: 'gradient',
                palette: ['yellow', 'green']
            }, $scope.currentColorCodeField)
        });
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->