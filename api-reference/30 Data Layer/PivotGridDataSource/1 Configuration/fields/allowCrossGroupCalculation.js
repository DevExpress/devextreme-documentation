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
        filterType: 'exclude',
        filterValues: [[2013]]
    }, {
        groupName: 'date',
        groupInterval: 'year',
        expanded: true
    }, {
        dataField: "amount",
        summaryType: "sum",
        format: "currency",
        area: "data",
        runningTotal: 'row',
        allowCrossGroupCalculation: false
    }]
});

var changeAllowCrossGroupCalc = function (e) {
    pivotGridDataSource.field('amount', {
        allowCrossGroupCalculation: e.value
    });
    pivotGridDataSource.load();
};
    
//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: pivotGridDataSource,
        fieldChooser: { enabled: false }
    });
    
    $("#switchContainer").dxSwitch({
        onText: 'true',
        offText: 'false',
        value: false,
        onValueChanged: changeAllowCrossGroupCalc
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    dataSource: pivotGridDataSource,
    changeAllowCrossGroupCalc: changeAllowCrossGroupCalc
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.dataSource = pivotGridDataSource;
        $scope.changeAllowCrossGroupCalc = changeAllowCrossGroupCalc;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->