//<!--@Knockout-->
var myViewModel = {
    books: books,
    selectBoxValue: ko.observable('row'),
    selectBoxOptions: [
        { name: 'Row', value: 'row' },
        { name: 'Batch', value: 'batch' },
        { name: 'Cell', value: 'cell' },
        { name: 'Form', value: 'form' }
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.selectBoxValue = 'row';
    $scope.selectBoxOptions = [
        { name: 'Row', value: 'row' },
        { name: 'Batch', value: 'batch' },
        { name: 'Cell', value: 'cell' },
        { name: 'Form', value: 'form' }
    ];
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year', 'genre', 'format'
        ],
        paging: { pageSize: 7 },
        editing: {
            mode: 'row',
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true
        }
    });

    $('#selectBoxContainer').dxSelectBox({
        dataSource: [{ name: 'Row', value: 'row' },
                     { name: 'Batch', value: 'batch' },
                     { name: 'Cell', value: 'cell' },
                     { name: 'Form', value: 'form' }],
        valueExpr: 'value',
        displayExpr: 'name',
        value: 'row',
        onValueChanged: function (e) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.option('editing.mode', e.value);
        }
    });
});
//<!--/@jQuery-->
