var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
    store: sales,
    fields: [{
        dataField: 'region',
        width: 120,
        area: 'row',
        expanded: true,
        allowFiltering: false
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

var changeAllowFiltering = function (e) {
    pivotGridDataSource.field("region", {
        allowFiltering: e.value
    });
    pivotGridDataSource.load();
};

//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: pivotGridDataSource,
        fieldChooser: {
            enabled: true,
            width: 420,
            height: 340
        }
    });
    
    $("#switchContainer").dxSwitch({
        onText: 'true',
        offText: 'false',
        value: false,
        onValueChanged: changeAllowFiltering
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    dataSource: pivotGridDataSource,
    changeAllowFiltering: changeAllowFiltering
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.dataSource = pivotGridDataSource;
        $scope.changeAllowFiltering = changeAllowFiltering;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->