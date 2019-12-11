//<!--@Knockout-->
var myViewModel = {
    onRowInserting: function (info) {
        if (!info.data.author || !info.data.title) {
            info.cancel = true;
            alert('The \'Author\' or \'Title\' field is not specified.');
        }
    },
    books: books
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.onRowInserting = function (info) {
        if (!info.data.author || !info.data.title) {
            info.cancel = true;
            alert('The \'Author\' or \'Title\' field is not specified.');
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
        editing: { allowAdding: true },
        onRowInserting: function (info) {
            if (!info.data.author || !info.data.title) {
                info.cancel = true;
                alert("The \"Author\" or \"Title\" field is not specified.");
            }
        }
    });
});
//<!--/@jQuery-->