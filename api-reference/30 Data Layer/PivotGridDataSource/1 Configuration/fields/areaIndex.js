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
        groupInterval: 'year',
        area: 'column',
        caption: 'Year',
        areaIndex: 0
    }, {
        dataField: 'date',
        dataType: 'date',
        groupInterval: 'quarter',
        area: 'column',
        caption: 'Quarter',
    }, {
        dataField: "amount",
        summaryType: "sum",
        format: "currency",
        area: "data"
    }]
});

var swapAreaIndexes = function (e) {
    var updatedYearIndex = pivotGridDataSource.field('Quarter').areaIndex;
    var updatedQuarterIndex = pivotGridDataSource.field('Year').areaIndex;

    pivotGridDataSource.field("Year", {
        areaIndex: updatedYearIndex
    });
    pivotGridDataSource.field("Quarter", {
        areaIndex: updatedQuarterIndex
    });

    pivotGridDataSource.load();
};

//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: pivotGridDataSource,
        fieldChooser: { enabled: false }
    });
    
    $("#buttonContainer").dxButton({
        text: 'Swap area indexes',
        onClick: swapAreaIndexes
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    dataSource: pivotGridDataSource,
    swapAreaIndexes: swapAreaIndexes
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.dataSource = pivotGridDataSource;
        $scope.swapAreaIndexes = swapAreaIndexes;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->