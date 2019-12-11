//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: {
            store: sales,
            fields: [{
                dataField: "region",
                width: 120,
                area: "row",
                expanded: true
            }, {
                dataField: "city",
                width: 150,
                area: "row",
                selector: function (data) {
                    return data.city + " (" + data.country + ")";
                }
            }, {
                dataField: "date",
                dataType: "date",
                area: "column"
            }, {
                dataField: "amount",
                summaryType: "sum",
                format: "currency",
                area: "data"
            }]
        },
        fieldChooser: { enabled: true }
    });
    
    $("#radioGroupContainer").dxRadioGroup({
        dataSource: [
            { name: '0', value: 0 },
            { name: '1', value: 1 },
            { name: '2', value: 2 }
        ],
        valueExpr: 'value',
        displayExpr: 'name',
        value: undefined,
        layout: 'horizontal',
        onValueChanged: function (e) {
            var pivotGrid = $('#pivotGridContainer').dxPivotGrid('instance');
            pivotGrid.option('fieldChooser.layout', e.value);
            pivotGrid.getFieldChooserPopup().show();
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    layoutNumber: ko.observable(undefined),
    pivotGridInstance: {}
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.layoutNumber = undefined;
        $scope.pivotGridInstance = {};
        $scope.cityText = function (data) {
            return data.city + ' (' + data.country + ')';
        };
        $scope.savePivotGridInstance = function (e) {
            $scope.pivotGridInstance = e.component;
        };
        $scope.showFieldChooser = function (e) {
            $scope.pivotGridInstance.getFieldChooserPopup().show();
        };
        $scope.sales = sales;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->