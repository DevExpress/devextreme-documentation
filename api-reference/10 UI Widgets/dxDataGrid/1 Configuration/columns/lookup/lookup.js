var books = [
   { author: 'J. D. Salinger', title: 'The Catcher in the Rye', year: 1951, genre: 'Bildungsroman', formatID: 2 },	
   { author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, genre: 'Comedy, sci-fi', formatID: 1 },
   { author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, genre: 'Satire, sci-fi', formatID: 3 },
   { author: 'K. Vonnegut', title: "God Bless You, Mr. Rosewater, or Pearls Before Swine", year: 1965, genre: 'Novel', formatID: 2 },
   { author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, genre: 'Historical fiction', formatID: 1 },
   { author: 'H. Lee', title: "To Kill a Mockingbird", year: 1960, genre: 'Novel', formatID: 3 },
   { author: 'G. Orwell', title: "Nineteen Eighty-Four", year: 1949, genre: 'Dystopian novel, political fiction', formatID: 1 },
   { author: 'G. Grass', title: "The Tin Drum", year: 1959, genre: 'Speculative fiction', formatID: 1 },
   { author: 'R. Bradbury', title: "Dandelion Wine", year: 1957, genre: 'Novel', formatID: 3 },
   { author: 'R. Bradbury', title: "The Martian Chronicles", year: 1950, genre: 'Sci-fi', formatID: 3 },
   { author: 'R. Bradbury', title: "Fahrenheit 451", year: 1953, genre: 'Dystopian novel', formatID: 2 },	
   { author: 'C. Dickens', title: "Great Expectations", year: 1861, genre: 'Realistic fiction', formatID: 2 },
   { author: 'F. Scott Fitzgerald', title: "The Great Gatsby", year: 1925, genre: 'Novel', formatID: 1 },
   { author: 'E. Hemingway', title: "For Whom the Bell Tolls", year: 1940, genre: 'War novel', formatID: 3 },
   { author: 'E. Hemingway', title: "Farewell to Arms", year: 1929, genre: 'War novel', formatID: 3 },
   { author: 'J. Austen', title: "Pride and Prejudice", year: 1813, genre: 'Novel of manners', formatID: 2 }
];

var formats = [
    { id: 1, format: 'hardcover' },
    { id: 2, format: 'paperback' },
    { id: 3, format: 'e-book' },
];

//<!--@Knockout-->
var myViewModel = {
    books: books,
    formats: formats
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.formats = formats;
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
            'year', 'genre',
            { dataField: 'formatID', caption: 'Format', lookup: { dataSource: formats, valueExpr: 'id', displayExpr: 'format' } }
        ],
        paging: { pageSize: 7 },
        filterRow: { visible: true },
        editing: { allowUpdating: true }
    });
});
//<!--/@jQuery-->