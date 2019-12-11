var filterValues = [[2013], [2014], [2015]];

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
        filterType: 'include',
        filterValues: filterValues
    }, {
        dataField: 'amount',
        summaryType: 'sum',
        format: 'currency',
        area: 'data'
    }]
});

var changeFilterType = function (e) {
    var updFilterType = e.value ? 'include' : 'exclude';
    pivotGridDataSource.field("date", {
        filterType: updFilterType
    });
    pivotGridDataSource.load();
};

var changeFilterValues = function (e) {
    var year = Number(e.component.option('text'));
    if (e.value) {
        filterValues.push([year]);
    }
    else {
        var index;
        $.each(filterValues, function (i, filter) {
            if (filter[0] == year) {
                index = i;
                return false;
            }
        });
        filterValues.splice(index, 1);
    }
    pivotGridDataSource.load();
};

//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: pivotGridDataSource,
        fieldChooser: { enabled: false }
    });
    
    $("#switchContainer").dxSwitch({
        onText: 'include',
        offText: 'exclude',
        value: true,
        width: 80,
        onValueChanged: changeFilterType
    });
    
    $("#checkbox2013").dxCheckBox({
        text: '2013',
        value: true,
        onValueChanged: changeFilterValues
    });
    
    $("#checkbox2014").dxCheckBox({
        text: '2014',
        value: true,
        onValueChanged: changeFilterValues
    });
    
    $("#checkbox2015").dxCheckBox({
        text: '2015',
        value: true,
        onValueChanged: changeFilterValues
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    dataSource: pivotGridDataSource,
    changeFilterType: changeFilterType,
    changeFilterValues: changeFilterValues
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.dataSource = pivotGridDataSource;
        $scope.changeFilterType = changeFilterType;
        $scope.changeFilterValues = changeFilterValues;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->