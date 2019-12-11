//<!--@Knockout-->
var myViewModel = {
    books: books,
    columns: [
        'author', 'title',
        { dataField: 'year', width: 60 },
        'genre',
        { dataField: 'format', autoExpandGroup: false }
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.columns = [
        'author', 'title',
        { dataField: 'year', width: 60 },
        'genre',
        { dataField: 'format', autoExpandGroup: false }
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
            'author', 'title',
            { dataField: 'year', width: 60 },
            'genre',
            { dataField: 'format', autoExpandGroup: false }
        ],
        paging: { pageSize: 8 },
        groupPanel: { visible: true }
    });
});
//<!--/@jQuery-->