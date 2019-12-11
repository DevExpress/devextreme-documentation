var colorizerOptions = [{
    name: "Discrete",
    options: {
        type: "discrete",
        palette: "Vintage"
    }
}, {
    name: "Range",
    options: {
        type: "range",
        palette: ["#fbd600", "#78299a"],
        range: [0, 50000, 100000, 150000, 200000, 250000]
    }
}, {
    name: "Gradient",
    options: {
        type: "gradient",
        palette: ["#fbd600", "#78299a"],
        range: [10000, 250000]
    }
}];

//<!--@jQuery-->
$(function () {
    var treeMap = $("#treeMapContainer").dxTreeMap({
        dataSource: '/Content/data/displays.json',
        colorizer: colorizerOptions[0].options
    }).dxTreeMap('instance');

    $("#selectBoxContainer").dxSelectBox({
        dataSource: colorizerOptions,
        displayExpr: 'name',
        valueExpr: 'options',
        value: colorizerOptions[0].options,
        onValueChanged: function (e) {
            treeMap.option('colorizer', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    colorizerOptions: colorizerOptions,
    currentColorizerOptions: ko.observable(colorizerOptions[0].options)
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('treeMapController', function ($scope) {
        $scope.colorizerOptions = colorizerOptions;
        $scope.currentColorizerOptions = colorizerOptions[0].options
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->