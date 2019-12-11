//<!--@Knockout-->
var myViewModel = {
    books: books,
    columns: [
        { dataField: 'author', sortIndex: 0, sortOrder: 'asc' },
        { dataField: 'title', width: 210 },
        { dataField: 'year', sortIndex: 1, sortOrder: 'asc' },
        'genre', 'format'
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.columns = [
        { dataField: 'author', sortIndex: 0, sortOrder: 'asc' },
        { dataField: 'title', width: 210 },
        { dataField: 'year', sortIndex: 1, sortOrder: 'asc' },
        'genre', 'format'
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
            { dataField: 'author', sortIndex: 0, sortOrder: 'asc' },
            { dataField: 'title', width: 210 },
            { dataField: 'year', sortIndex: 1, sortOrder: 'asc' },
            'genre', 'format'
        ],
        paging: { pageSize: 8 }
    });
});
//<!--/@jQuery-->