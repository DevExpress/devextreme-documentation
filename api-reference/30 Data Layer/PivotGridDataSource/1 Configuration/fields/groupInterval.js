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
        area: 'column',
        groupInterval: 'year'
    }, {
        dataField: 'amount',
        summaryType: 'sum',
        format: 'currency',
        area: 'data'
    }]
});

var selectBoxDataSource = [
    { name: 'Year', value: 'year' },
    { name: 'Quarter', value: 'quarter' },
    { name: 'Month', value: 'month' },
    { name: 'Day', value: 'day' },
    { name: 'Day of Week', value: 'dayOfWeek' },
];

var changeGroupInterval = function (e) {
    pivotGridDataSource.field('date', {
        groupInterval: e.value
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
        value: 'year',
        onValueChanged: changeGroupInterval
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    pivotGridDataSource: pivotGridDataSource,
    selectBoxDataSource: selectBoxDataSource,
    changeGroupInterval: changeGroupInterval
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.pivotGridDataSource = pivotGridDataSource;
        $scope.selectBoxDataSource = selectBoxDataSource;
        $scope.changeGroupInterval = changeGroupInterval;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->