//<!--@Knockout-->
var myViewModel = {
    books: books,
    columns: [
        { dataField: 'author', filterValue: 'Bradbury' },
        'title',
        { dataField: 'year', width: 70 },
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
        { dataField: 'author', filterValue: 'Bradbury' },
        'title',
        { dataField: 'year', width: 70 },
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
            { dataField: 'author', filterValue: 'Bradbury' },
            'title',
            { dataField: 'year', width: 70 },
            'genre', 'format'
        ],
        filterRow: { visible: true },
        paging: { pageSize: 7 }
    });
});
//<!--/@jQuery-->