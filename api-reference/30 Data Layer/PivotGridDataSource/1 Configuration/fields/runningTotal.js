var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
    store: sales,
    fields: [{
        dataField: 'region',
        width: 120,
        area: 'row'
    }, {
        dataField: 'city',
        width: 150,
        area: 'row',
        selector: function (data) {
            return data.city + ' (' + data.country + ')';
        }
    }, {
        dataField: 'date',
        dataType: 'date',
        area: 'column'
    }, {
        dataField: 'amount',
        summaryType: 'sum',
        format: 'currency',
        area: 'data',
        runningTotal: 'row'
    }]
});

var selectBoxDataSource = [
    { name: 'rows', value: 'row' },
    { name: 'columns', value: 'column' }
];

var changeRunningTotal = function (e) {
    pivotGridDataSource.field('amount', {
        runningTotal: e.value
    });
    pivotGridDataSource.load();
};

//<!--@jQuery-->
$(function () {
    $('#pivotGridContainer').dxPivotGrid({
        dataSource: pivotGridDataSource,
        fieldChooser: { enabled: false }
    });
    
    $('#selectBoxContainer').dxSelectBox({
        dataSource: selectBoxDataSource,
        valueExpr: 'value',
        displayExpr: 'name',
        value: 'row',
        onValueChanged: changeRunningTotal
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    pivotGridDataSource: pivotGridDataSource,
    selectBoxDataSource: selectBoxDataSource,
    changeRunningTotal: changeRunningTotal
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.pivotGridDataSource = pivotGridDataSource;
        $scope.selectBoxDataSource = selectBoxDataSource;
        $scope.changeRunningTotal = changeRunningTotal;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->