var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
    store: sales,
    fields: [{
        dataField: 'region',
        width: 120,
        area: 'row',
        sortBySummaryField: 'amount',
        sortBySummaryPath: [2015]
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
        area: "data"
    }]
});

var selectBoxDataSource = [
    { text: '2013', value: [2013] },
    { text: '2014', value: [2014] },
    { text: '2015', value: [2015] },
    { text: 'Grand Total', value: [] }
];

var changeSummaryPath = function (e) {
    pivotGridDataSource.field("region", {
        sortBySummaryPath: e.value
    });
    pivotGridDataSource.load();
};

//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: pivotGridDataSource
    });
    
    $("#selectBoxContainer").dxSelectBox({
        dataSource: selectBoxDataSource,
        displayExpr: 'text',
        valueExpr: 'value',
        onValueChanged: changeSummaryPath
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    pivotGridDataSource: pivotGridDataSource,
    selectBoxDataSource: selectBoxDataSource,
    changeSummaryPath: changeSummaryPath
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.pivotGridDataSource = pivotGridDataSource;
        $scope.selectBoxDataSource - selectBoxDataSource;
        $scope.changeSummaryPath = changeSummaryPath;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->