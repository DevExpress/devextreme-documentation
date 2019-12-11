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
        dataField: "amount",
        summaryType: "sum",
        format: "currency",
        area: "data",
        showGrandTotals: true
    }]
});

var changeShowGrandTotals = function (e) {
    pivotGridDataSource.field("amount", {
        showGrandTotals: e.value
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
        value: true,
        onValueChanged: changeShowGrandTotals
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    dataSource: pivotGridDataSource,
    changeShowGrandTotals: changeShowGrandTotals
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.dataSource = pivotGridDataSource;
        $scope.changeShowGrandTotals = changeShowGrandTotals;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->