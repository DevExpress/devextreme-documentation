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
        groupName: 'date',
        groupInterval: 'year',
        expanded: true
    }, {
        dataField: "amount",
        summaryType: "sum",
        format: "currency",
        area: "data"
    }]
});

//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: pivotGridDataSource,
        fieldChooser: { enabled: false }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    pivotGridOptions: {
        dataSource: pivotGridDataSource,
        fieldChooser: { enabled: false }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.pivotGridOptions = {
            dataSource: pivotGridDataSource,
            fieldChooser: { enabled: false }
        };
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->