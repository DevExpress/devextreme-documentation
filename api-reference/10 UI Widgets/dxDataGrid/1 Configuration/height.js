//<!--@Knockout-->
var myViewModel = {
    sliderValue: ko.observable(380),
    books: books
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.sliderValue = 380;
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
        paging: { pageSize: 8 },
        height: 380
    });

    $("#slider").dxSlider({
        min: 100,
        value: 380,
        max: 500,
        onValueChanged: function (e) {
            $('#sliderValue').html(e.value);
            $('#gridContainer').dxDataGrid('instance').option("height", e.value);
        }
    });
});
//<!--/@jQuery-->