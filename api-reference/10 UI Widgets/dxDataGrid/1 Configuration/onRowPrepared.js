//<!--@Knockout-->
var myViewModel = {
    dataSource: [
        { author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, genre: 'Comedy, sci-fi', format: 'hardcover' },
        { author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, genre: 'Satire, sci-fi', format: 'e-book' },
        { author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, genre: 'Historical fiction', format: 'hardcover' },
        { author: 'L. Tolstoy', title: "Anna Karenina", year: 1877, genre: 'Realist novel', format: 'hardcover' },
        { author: 'G. Orwell', title: "Nineteen Eighty-Four", year: 1949, genre: 'Dystopian novel, political fiction', format: 'hardcover' },
        { author: 'R. Bradbury', title: "The Martian Chronicles", year: 1950, genre: 'Sci-fi', format: 'e-book' },
        { author: 'J. D. Salinger', title: 'The Catcher in the Rye', year: 1951, genre: 'Bildungsroman', format: 'paperback' },
        { author: 'C. Dickens', title: "Great Expectations", year: 1861, genre: 'Realistic fiction', format: 'paperback' },
        { author: 'E. Hemingway', title: "For Whom the Bell Tolls", year: 1940, genre: 'War novel', format: 'e-book' },
        { author: 'J. Austen', title: "Pride and Prejudice", year: 1813, genre: 'Novel of manners', format: 'paperback' }
    ],
    onRowPrepared: function (info) {
        if (info.rowType != 'header' && info.data.year > 1800 && info.data.year <= 1900)
            info.rowElement.addClass('nineteenthCentury');
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.dataSource = [
        { author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, genre: 'Comedy, sci-fi', format: 'hardcover' },
        { author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, genre: 'Satire, sci-fi', format: 'e-book' },
        { author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, genre: 'Historical fiction', format: 'hardcover' },
        { author: 'L. Tolstoy', title: "Anna Karenina", year: 1877, genre: 'Realist novel', format: 'hardcover' },
        { author: 'G. Orwell', title: "Nineteen Eighty-Four", year: 1949, genre: 'Dystopian novel, political fiction', format: 'hardcover' },
        { author: 'R. Bradbury', title: "The Martian Chronicles", year: 1950, genre: 'Sci-fi', format: 'e-book' },
        { author: 'J. D. Salinger', title: 'The Catcher in the Rye', year: 1951, genre: 'Bildungsroman', format: 'paperback' },
        { author: 'C. Dickens', title: "Great Expectations", year: 1861, genre: 'Realistic fiction', format: 'paperback' },
        { author: 'E. Hemingway', title: "For Whom the Bell Tolls", year: 1940, genre: 'War novel', format: 'e-book' },
        { author: 'J. Austen', title: "Pride and Prejudice", year: 1813, genre: 'Novel of manners', format: 'paperback' }
    ];
    $scope.onRowPrepared = function (info) {
        if (info.rowType != 'header' && info.data.year > 1800 && info.data.year <= 1900)
            info.rowElement.addClass('nineteenthCentury');
    }
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: [
            { author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, genre: 'Comedy, sci-fi', format: 'hardcover' },
            { author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, genre: 'Satire, sci-fi', format: 'e-book' },
            { author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, genre: 'Historical fiction', format: 'hardcover' },
            { author: 'L. Tolstoy', title: "Anna Karenina", year: 1877, genre: 'Realist novel', format: 'hardcover' },
            { author: 'G. Orwell', title: "Nineteen Eighty-Four", year: 1949, genre: 'Dystopian novel, political fiction', format: 'hardcover' },
            { author: 'R. Bradbury', title: "The Martian Chronicles", year: 1950, genre: 'Sci-fi', format: 'e-book' },
            { author: 'J. D. Salinger', title: 'The Catcher in the Rye', year: 1951, genre: 'Bildungsroman', format: 'paperback' },
            { author: 'C. Dickens', title: "Great Expectations", year: 1861, genre: 'Realistic fiction', format: 'paperback' },
            { author: 'E. Hemingway', title: "For Whom the Bell Tolls", year: 1940, genre: 'War novel', format: 'e-book' },
            { author: 'J. Austen', title: "Pride and Prejudice", year: 1813, genre: 'Novel of manners', format: 'paperback' }
        ],
        columns: [
            'author',
            { dataField: 'title', width: 250 },
            'year', 'genre', 'format'
        ],
        onRowPrepared: function (info) {
            if (info.rowType != "header" && info.data.year > 1800 && info.data.year <= 1900)
                info.rowElement.addClass("nineteenthCentury");
        }
    });
});
//<!--/@jQuery-->