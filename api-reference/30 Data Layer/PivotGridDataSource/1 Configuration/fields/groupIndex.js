var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
    store: sales,
    fields: [{
        groupName: 'Location',
        area: 'row',
        expanded: true
    }, {
        dataField: 'region',
        groupName: 'Location',
        groupIndex: 0,
        width: 120
    }, {
        dataField: 'city',
        groupName: 'Location',
        groupIndex: 2,
        width: 80
    }, {
        dataField: 'country',
        groupName: 'Location',
        groupIndex: 1,
        width: 80
    }, {
        dataField: 'date',
        dataType: 'date',
        area: 'column'
    }, {
        dataField: 'amount',
        summaryType: 'sum',
        format: 'currency',
        area: 'data'
    }]
});

//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: pivotGridDataSource
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    dataSource: pivotGridDataSource
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.dataSource = pivotGridDataSource;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->