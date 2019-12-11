//<!--@Knockout-->
var myViewModel = {
    customizeColumns: function (columns) {
        columns[0].width = 100;
        columns[1].width = 210;
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.customizeColumns = function (columns) {
        columns[0].width = 100;
        columns[1].width = 210;
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
        customizeColumns: function (columns) {
            columns[0].width = 100;
            columns[1].width = 210;
        },
        paging: { pageSize: 8 }
    });
});
//<!--/@jQuery-->