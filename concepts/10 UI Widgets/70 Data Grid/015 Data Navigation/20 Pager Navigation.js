<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            { dataField: 'year', width: 60 }, 'genre', 'format'
        ],
        paging: { pageSize: 6 },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [3, 4, 6]
        }
    });
});
<!--/@jQuery-->
<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
});

angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
<!--/@AngularJS-->