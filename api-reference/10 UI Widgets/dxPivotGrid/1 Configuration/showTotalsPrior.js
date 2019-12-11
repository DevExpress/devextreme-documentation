//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: {
            store: sales,
            fields: [{
                dataField: "region",
                width: 120,
                area: "row" 
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
        fieldChooser: { enabled: false }
    });
    
    $("#selectBoxContainer").dxSelectBox({
        dataSource: [
            { name: 'None', value: 'none' },
            { name: 'Rows', value: 'rows' },
            { name: 'Columns', value: 'columns' },
            { name: 'Both', value: 'both' }
        ],
        valueExpr: 'value',
        displayExpr: 'name',
        value: 'none',
        onValueChanged: function (e) {
            var pivotGrid = $('#pivotGridContainer').dxPivotGrid('instance');
            pivotGrid.option('showTotalsPrior', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    showTotalsPrior: ko.observable('none')
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.showTotalsPrior = 'none';
        $scope.cityText = function (data) {
            return data.city + ' (' + data.country + ')';
        };
        $scope.sales = sales;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->