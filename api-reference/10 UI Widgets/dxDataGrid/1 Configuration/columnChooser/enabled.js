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
            'author', 'title', 'year', 'genre', 'format',
            { dataField: 'price', visible: false },
            { dataField: 'language', visible: false },
            { dataField: 'length', visible: false }
        ],
        paging: { pageSize: 7 },
        columnChooser: { enabled: true }
    });

    $("#enableColumnChooserCheckbox").dxCheckBox({
        text: 'Enable Column Chooser',
        value: true,
        onValueChanged: function (e) {
            $('#gridContainer').dxDataGrid('instance').option("columnChooser.enabled", e.value);
        }
    });
});
//<!--/@jQuery-->