//<!--@Knockout-->
var myViewModel = {
    dataSource: [
        { author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, format: 'hardcover', price: 12.43, isDiscounted: true },
        { author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, format: 'e-book', price: 7.21, isDiscounted: false },
        { author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, format: 'hardcover', price: 29.84, isDiscounted: false },
        { author: 'H. Lee', title: "To Kill a Mockingbird", year: 1960, format: 'e-book', price: 4.73, isDiscounted: true },
        { author: 'G. Orwell', title: "Nineteen Eighty-Four", year: 1949, format: 'hardcover', price: 15.53, isDiscounted: false },
        { author: 'R. Bradbury', title: "The Martian Chronicles", year: 1950, format: 'e-book', price: 4.5, isDiscounted: false },
        { author: 'K. Vonnegut', title: "God Bless You, Mr. Rosewater, or Pearls Before Swine", year: 1965, format: 'paperback', price: 4.95, isDiscounted: true },
        { author: 'J. D. Salinger', title: 'The Catcher in the Rye', year: 1951, format: 'paperback', price: 4.56, isDiscounted: true },
        { author: 'J. Austen', title: "Pride and Prejudice", year: 1813, format: 'paperback', price: 8.28, isDiscounted: false }
    ],
    columns: [
        'author', 'title',
        { dataField: 'year', width: 60 },
        'format',
        { dataField: 'price', format: { type: 'currency', precision: 2 } },
        { dataField: 'isDiscounted', showEditorAlways: true }
    ],
    dataGrid: null,
    getDataGrid: function (e) { dataGrid = e.component },
    onValueChanged: function (info) {
        dataGrid.columnOption('isDiscounted', 'showEditorAlways', info.value);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.dataSource = [
        { author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, format: 'hardcover', price: 12.43, isDiscounted: true },
        { author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, format: 'e-book', price: 7.21, isDiscounted: false },
        { author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, format: 'hardcover', price: 29.84, isDiscounted: false },
        { author: 'H. Lee', title: "To Kill a Mockingbird", year: 1960, format: 'e-book', price: 4.73, isDiscounted: true },
        { author: 'G. Orwell', title: "Nineteen Eighty-Four", year: 1949, format: 'hardcover', price: 15.53, isDiscounted: false },
        { author: 'R. Bradbury', title: "The Martian Chronicles", year: 1950, format: 'e-book', price: 4.5, isDiscounted: false },
        { author: 'K. Vonnegut', title: "God Bless You, Mr. Rosewater, or Pearls Before Swine", year: 1965, format: 'paperback', price: 4.95, isDiscounted: true },
        { author: 'J. D. Salinger', title: 'The Catcher in the Rye', year: 1951, format: 'paperback', price: 4.56, isDiscounted: true },
        { author: 'J. Austen', title: "Pride and Prejudice", year: 1813, format: 'paperback', price: 8.28, isDiscounted: false }
    ];
    $scope.columns = [
        'author', 'title',
        { dataField: 'year', width: 60 },
        'format',
        { dataField: 'price', format: { type: 'currency', precision: 2 } },
        { dataField: 'isDiscounted', showEditorAlways: true }
    ];
    $scope.dataGrid = null;
    $scope.getDataGrid = function (e) { dataGrid = e.component };
    $scope.onValueChanged = function (info) {
        dataGrid.columnOption('isDiscounted', 'showEditorAlways', info.value);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: [
            { author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, format: 'hardcover', price: 12.43, isDiscounted: true },
            { author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, format: 'e-book', price: 7.21, isDiscounted: false },
            { author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, format: 'hardcover', price: 29.84, isDiscounted: false },
            { author: 'H. Lee', title: "To Kill a Mockingbird", year: 1960, format: 'e-book', price: 4.73, isDiscounted: true },
            { author: 'G. Orwell', title: "Nineteen Eighty-Four", year: 1949, format: 'hardcover', price: 15.53, isDiscounted: false },
            { author: 'R. Bradbury', title: "The Martian Chronicles", year: 1950, format: 'e-book', price: 4.5, isDiscounted: false },
            { author: 'K. Vonnegut', title: "God Bless You, Mr. Rosewater, or Pearls Before Swine", year: 1965, format: 'paperback', price: 4.95, isDiscounted: true },
            { author: 'J. D. Salinger', title: 'The Catcher in the Rye', year: 1951, format: 'paperback', price: 4.56, isDiscounted: true },
            { author: 'J. Austen', title: "Pride and Prejudice", year: 1813, format: 'paperback', price: 8.28, isDiscounted: false }
        ],
        columns: [
            'author', 'title',
            { dataField: 'year', width: 60 },
            'format',
            { dataField: 'price', format: { type: 'currency', precision: 2 } },
            { dataField: 'isDiscounted', showEditorAlways: true }
        ],
        scrolling: { mode: 'standard' }
    });

    $("#showEditorsCheckbox").dxCheckBox({
        text: 'Show Editors',
        value: true,
        onValueChanged: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.columnOption('isDiscounted', 'showEditorAlways', info.value);
        }
    });
});
//<!--/@jQuery-->