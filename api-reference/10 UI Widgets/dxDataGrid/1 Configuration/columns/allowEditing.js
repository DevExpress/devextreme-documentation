//<!--@Knockout-->
var myViewModel = {
    books: books,
    columns: [
        { dataField: 'author', allowEditing: false },
        { dataField: 'title', allowEditing: false },
        { dataField: 'year', allowEditing: false },
        'genre', 'format',
        { dataField: 'price', format: { type: 'currency', precision: 2 } }
    ]
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.columns = [
        { dataField: 'author', allowEditing: false },
        { dataField: 'title', allowEditing: false },
        { dataField: 'year', allowEditing: false },
        'genre', 'format',
        { dataField: 'price', format: { type: 'currency', precision: 2 } }
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
            { dataField: 'author', allowEditing: false },
            { dataField: 'title', allowEditing: false },
            { dataField: 'year', allowEditing: false },
            'genre', 'format',
            { dataField: 'price', format: { type: 'currency', precision: 2 } }
        ],
        paging: { pageSize: 8 },
        editing: { allowUpdating: true }
    });
});
//<!--/@jQuery-->