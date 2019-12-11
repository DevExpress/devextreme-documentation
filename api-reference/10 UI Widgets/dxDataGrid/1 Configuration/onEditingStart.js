//<!--@Knockout-->
var myViewModel = {
    onEditingStart: function (info) {
        if (info.key) {
            info.cancel = true;
        }
    },
    books: books
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.onEditingStart = function (info) {
        if (info.key) {
            info.cancel = true;
        }
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
        editing: {
            mode: 'batch',
            allowAdding: true,
            allowUpdating: true
        },
        onEditingStart: function (info) {
            if (info.key) {
                info.cancel = true;
            }
        }
    });
});
//<!--/@jQuery-->