//<!--@Knockout-->
var myViewModel = {
    books: books,
    onRowUpdating: function (info) {
        if (info.oldData.format == 'hardcover') {
            info.cancel = true;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.onRowUpdating = function (info) {
        if (info.oldData.format == 'hardcover') {
            info.cancel = true;
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
            mode: 'batch',
            allowUpdating: true
        },
        onRowUpdating: function (info) {
            if (info.oldData.format == 'hardcover') {
                info.cancel = true;
            }
        }
    });
});
//<!--/@jQuery-->