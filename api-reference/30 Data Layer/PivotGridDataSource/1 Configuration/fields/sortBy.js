var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
    store: {
        type: 'xmla',
        url: 'https://demos.devexpress.com/Services/OLAP/msmdpump.dll',
        catalog: 'Adventure Works DW Standard Edition',
        cube: 'Adventure Works'
    },
    retrieveFields: false,
    fields: [
        { dataField: '[Product].[Category]', area: 'row' },
        { dataField: '[Product].[Subcategory]', area: 'row', width: 130 },
        {
            dataField: '[Ship Date].[Calendar Year]',
            area: 'column',
            filterType: 'include',
            filterValues: ['CY 2004'],
            caption: '2004',
            expanded: true
        },
        { dataField: "[Ship Date].[Month of Year]", area: "column", sortBy: 'value' },
        { dataField: '[Measures].[Customer Count]', area: 'data' }
    ]
});

var selectBoxDataSource = [
    { name: 'displayText', value: 'displayText' },
    { name: 'value', value: 'value' }
];

var changeSortBy = function (e) {
    pivotGridDataSource.field(3, {
        sortBy: e.value
    });
    pivotGridDataSource.load();
};

//<!--@jQuery-->
$(function () {
    $('#pivotGridContainer').dxPivotGrid({
        dataSource: pivotGridDataSource,
        fieldChooser: { enabled: false }
    });
    
    $('#selectBoxContainer').dxSelectBox({
        dataSource: selectBoxDataSource,
        valueExpr: 'value',
        displayExpr: 'name',
        value: 'value',
        onValueChanged: changeSortBy
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    pivotGridDataSource: pivotGridDataSource,
    selectBoxDataSource: selectBoxDataSource,
    changeSortBy: changeSortBy
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.pivotGridDataSource = pivotGridDataSource;
        $scope.selectBoxDataSource = selectBoxDataSource;
        $scope.changeSortBy = changeSortBy;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->