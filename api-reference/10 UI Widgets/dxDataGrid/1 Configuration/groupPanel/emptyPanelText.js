//<!--@Knockout-->
var myViewModel = {
    books: books,
    columns: [
        'author',
        { dataField: 'title', width: 210 },
        'year', 'genre', 'language', 'format'
    ],
    emptyPanelText: ko.observable()
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
        'year', 'genre', 'language', 'format'
    ];
    $scope.emptyPanelText = null;
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
            'year', 'genre', 'language', 'format'
        ],
        paging: { pageSize: 7 },
        groupPanel: { visible: true }
    });

    $("#emptyPanelTextBox").dxTextBox({
        placeholder: 'Enter a text for the empty group panel',
        valueChangeEvent: 'keyup',
        height: 40,
        width: 300,
        onValueChanged: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.option({
                groupPanel: { emptyPanelText: info.value }
            });
        }
    });
});
//<!--/@jQuery-->