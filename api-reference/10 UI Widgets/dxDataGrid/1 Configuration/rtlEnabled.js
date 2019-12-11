//<!--@Knockout-->
var myViewModel = {
    books: books,
    checkBoxState: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.checkBoxState = false;
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
        rtlEnabled: false
    });

    $("#checkboxContainer").dxCheckBox({
        text: 'Enable the Right-To-Left Representation',
        value: false,
        onValueChanged: function (e) {
            $('#gridContainer').dxDataGrid('instance').option("rtlEnabled", e.value);
        }
    });
});
//<!--/@jQuery-->