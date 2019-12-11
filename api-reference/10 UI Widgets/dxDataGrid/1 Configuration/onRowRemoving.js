//<!--@Knockout-->
var myViewModel = {
    books: books,
    onRowRemoving: function (info) {
        if (info.data.format == 'hardcover') {
            info.cancel = true
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.onRowRemoving = function (info) {
        if (info.data.format == 'hardcover') {
            info.cancel = true
        }
    }
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
        paging: { pageSize: 8 },
        editing: {
            allowDeleting: true,
            mode: 'batch'
        },
        onRowRemoving: function (info) {
            if (info.data.format == 'hardcover') {
                info.cancel = true
            }
        }
    });
});
//<!--/@jQuery-->