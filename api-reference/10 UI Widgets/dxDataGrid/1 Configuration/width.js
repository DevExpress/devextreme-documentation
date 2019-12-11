//<!--@Knockout-->
var myViewModel = {
    sliderValue: ko.observable(530),
    books: books
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.sliderValue = 530;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: ['author', 'title', 'year', 'genre', 'language', 'format'],
        paging: { pageSize: 8 },
        width: 530
    });

    $("#slider").dxSlider({
        min: 430,
        value: 530,
        max: 630,
        onValueChanged: function (e) {
            $('#sliderValue').html(e.value);
            $('#gridContainer').dxDataGrid('instance').option("width", e.value);
        }
    });
});
//<!--/@jQuery-->