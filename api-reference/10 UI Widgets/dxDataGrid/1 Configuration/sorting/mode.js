//<!--@Knockout-->
var myViewModel = {
    books: books,
    columns: [
        'author',
        { dataField: 'title', width: 210 },
        'year', 'genre', 'format'
    ],
    sortingModes: ['none', 'single', 'multiple'],
    sortingMode: ko.observable('single')
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.columns = [
        'author',
        { dataField: 'title', width: 210 },
        'year', 'genre', 'format'
    ];
    $scope.sortingModes = ['none', 'single', 'multiple'];
    $scope.sortingMode = 'single';
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var sortingModes = ['none', 'single', 'multiple'];

$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year', 'genre', 'format'
        ],
        paging: { pageSize: 8 },
        sorting: { mode: 'single' }
    });

    $("#selectBoxContainer").dxSelectBox({
        height: 35,
        width: 150,
        items: sortingModes,
        value: sortingModes[1],
        onValueChanged: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.option({
                sorting: { mode: info.value }
            });
        }
    });
});
//<!--/@jQuery-->
