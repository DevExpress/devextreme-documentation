var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
    store: sales,
    retrieveFields: false,
    fields: [{
        dataField: 'region',
        width: 120,
        area: 'row',
        expanded: true
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
        groupInterval: 'year',
        caption: 'Year',
        displayFolder: 'Date'
    }, {
        dataField: 'date',
        dataType: 'date',
        area: 'column',
        groupInterval: 'quarter',
        caption: 'Quarter',
        displayFolder: 'Date'
    }, {
        dataField: 'date',
        dataType: 'date',
        area: 'column',
        groupInterval: 'month',
        caption: 'Month',
        displayFolder: 'Date'
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