//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        fieldChooser: { enabled: false }
    });
    
    $("#textBoxContainer").dxTextBox({
        placeholder: "Type in a Text for an Empty Pivot Grid...",
        value: 'No data',
        onValueChanged: function (e) {
            var pivotGrid = $('#pivotGridContainer').dxPivotGrid('instance');
            pivotGrid.option('texts.noData', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    noDataText: ko.observable('No data')
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.noDataText = "No data";
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->