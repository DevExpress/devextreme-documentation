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
        paging: { pageSize: 8 }
    });

    $("#disableGridCheckbox").dxCheckBox({
        text: 'Disable the Grid',
        value: false,
        onValueChanged: function (e) {
            $('#gridContainer').dxDataGrid('instance').option("disabled", e.value);
        }
    });
});
//<!--/@jQuery-->