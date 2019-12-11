var fruitsVegetables = [{
    name: 'Fruits',
    items: [
        { name: 'Apples', value: 4 },
        { name: 'Oranges', value: 10 },
        { name: 'Lemons', value: 6 },
        { name: 'Bananas', value: 1 }
    ]
}, {
    name: 'Vegetables',
    items: [
        { name: 'Cucumbers', value: 4 },
        { name: 'Tomatoes', value: 8 },
        { name: 'Turnips', value: 7 },
        { name: 'Peppers', value: 2 }
    ]
}];

//<!--@jQuery-->
$(function () {
    var treeMap = $("#treeMapContainer").dxTreeMap({
        dataSource: fruitsVegetables,
        tile: { color: 'white' },
        colorizer: {
            type: 'gradient',
            palette: ['orange', 'blue'],
            range: [1, 10]
        }
    }).dxTreeMap('instance');
    
    $("#rangeSliderContainer").dxRangeSlider({
        min: 1, max: 10,
        start: 1, end: 10,
        step: 1,
        label: { visible: true },
        onValueChanged: function (e) {
            treeMap.option('colorizer.range', [ e.start, e.end ]);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var ViewModel = function () {
    this.data = fruitsVegetables;
    this.currentStart = ko.observable(1);
    this.currentEnd = ko.observable(10);
    this.currentRange = ko.pureComputed(function () {
        return [ this.currentStart(), this.currentEnd() ];
    });
};

ko.applyBindings(ViewModel());
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('treeMapController', function ($scope) {
        $scope.data = fruitsVegetables;
        $scope.currentStart = 1;
        $scope.currentEnd = 10;
        $scope.$watchGroup(['currentStart', 'currentEnd'], function () {
            $scope.currentRange = [ $scope.currentStart, $scope.currentEnd ];
        });
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->