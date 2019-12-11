//<!--@Knockout-->
var myViewModel = {
    books: books,
    columns: [
        'author',
        { dataField: 'title', width: 210 },
        { dataField: 'year', sortOrder: 'desc' },
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
        'author',
        { dataField: 'title', width: 210 },
        { dataField: 'year', sortOrder: 'desc' },
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
            'author',
            { dataField: 'title', width: 210 },
            { dataField: 'year', sortOrder: 'desc' },
            'genre', 'format'
        ],
        paging: { pageSize: 8 }
    });
});
//<!--/@jQuery-->