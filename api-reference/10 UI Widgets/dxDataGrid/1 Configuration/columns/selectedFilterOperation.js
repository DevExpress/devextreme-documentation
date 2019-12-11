//<!--@Knockout-->
var myViewModel = {
    books: books,
    columns: [
        'author',
        { dataField: 'title', width: 210, selectedFilterOperation: 'startswith' },
        'year', 'genre', 'format'
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.columns = [
        'author',
        { dataField: 'title', width: 210, selectedFilterOperation: 'startswith' },
        'year', 'genre', 'format'
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
            { dataField: 'title', width: 210, selectedFilterOperation: 'startswith' },
            'year', 'genre', 'format'
        ],
        paging: { pageSize: 7 },
        filterRow: { visible: true }
    });
});
//<!--/@jQuery-->