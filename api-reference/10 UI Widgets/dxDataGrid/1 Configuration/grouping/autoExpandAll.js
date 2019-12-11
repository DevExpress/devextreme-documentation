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
        paging: { pageSize: 8 },
        groupPanel: { visible: true }
    });

    $("#autoExpandAllCheckbox").dxCheckBox({
        text: 'Expand Groups Automatically',
        value: true,
        onValueChanged: function (e) {
            $('#gridContainer').dxDataGrid('instance').option("grouping.autoExpandAll", e.value);
        }
    });
});
//<!--/@jQuery-->