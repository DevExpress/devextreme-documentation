//<!--@Knockout-->
var myViewModel = {
    onInitNewRow: function (info) {
        info.data.format = 'paperback';
    },
    books: books
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.onInitNewRow = function (info) {
        info.data.format = 'paperback';
    }
    $scope.books = books;
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
        editing: { allowAdding: true },
        onInitNewRow: function (info) {
            info.data.format = 'paperback';
        }
    });
});
//<!--/@jQuery-->