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
        },
        visible: true
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

var showCityField = function (e) {
    pivotGridDataSource.field('city', {
        visible: e.value
    });
    pivotGridDataSource.load();
};

//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: pivotGridDataSource,
        fieldChooser: { enabled: false }
    });
    
    $("#fieldChooserContainer").dxPivotGridFieldChooser({
        dataSource: pivotGridDataSource
    });
    
    $("#switchContainer").dxSwitch({
        onText: 'true',
        offText: 'false',
        value: true,
        onValueChanged: showCityField
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    dataSource: pivotGridDataSource,
    showCityField: showCityField
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.dataSource = pivotGridDataSource;
        $scope.showCityField = showCityField;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->