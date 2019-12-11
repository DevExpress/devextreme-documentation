//<!--@Knockout-->
var myViewModel = {
    books: books
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
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
            'author', 'title', 'year', 'genre', 'format',
            { dataField: 'price', visible: false },
            { dataField: 'length', visible: false }
        ],
        paging: { pageSize: 7 },
        columnChooser: {
            enabled: true,
            emptyPanelText: 'A place to hide the columns'
        }
    });
});
//<!--/@jQuery-->