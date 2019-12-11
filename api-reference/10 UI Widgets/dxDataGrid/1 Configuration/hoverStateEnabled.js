//<!--@Knockout-->
var myViewModel = {
    books: books,
    checkBoxState: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.checkBoxState = true;
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
        hoverStateEnabled: true
    });

    $("#enableHighlightingCheckbox").dxCheckBox({
        text: 'Enable Row Highlighting on Hover Over',
        value: true,
        onValueChanged: function (e) {
            $('#gridContainer').dxDataGrid('instance').option("hoverStateEnabled", e.value);
        }
    });
});
//<!--/@jQuery-->