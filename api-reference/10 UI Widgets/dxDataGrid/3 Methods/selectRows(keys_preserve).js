var booksArray = [
    { bookID: 1, author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, genre: 'Comedy, sci-fi', format: 'hardcover' },
    { bookID: 2, author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, genre: 'Satire, sci-fi', format: 'e-book' },
    { bookID: 3, author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, genre: 'Historical fiction', format: 'hardcover' },
    { bookID: 4, author: 'H. Lee', title: "To Kill a Mockingbird", year: 1960, genre: 'Novel', format: 'e-book' },
    { bookID: 5, author: 'G. Orwell', title: "Nineteen Eighty-Four", year: 1949, genre: 'Dystopian novel, political fiction', format: 'hardcover' },
    { bookID: 6, author: 'R. Bradbury', title: "The Martian Chronicles", year: 1950, genre: 'Sci-fi', format: 'e-book' },
    { bookID: 7, author: 'K. Vonnegut', title: "God Bless You, Mr. Rosewater, or Pearls Before Swine", year: 1965, genre: 'Novel', format: 'paperback' },
    { bookID: 8, author: 'J. D. Salinger', title: 'The Catcher in the Rye', year: 1951, genre: 'Bildungsroman', format: 'paperback' },
    { bookID: 9, author: 'C. Dickens', title: "Great Expectations", year: 1861, genre: 'Realistic fiction', format: 'paperback' },
    { bookID: 10, author: 'J. Austen', title: "Pride and Prejudice", year: 1813, genre: 'Novel of manners', format: 'paperback' }
];

$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: {
            store: {
                data: booksArray,
                type: 'array',
                key: 'bookID'
            }
        },
        columns: [
            'author',
            { dataField: 'title', width: 220 },
            { dataField: 'year', width: 50 },
            'genre', 'format'
        ]
    });

    $("#keys").dxTagBox({
        height: 35,
        width: 300,
        dataSource: booksArray,
        displayExpr: 'bookID',
        valueExpr: 'bookID',
        placeholder: 'Choose keys to select grid records...',
        onValueChanged: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            var values = info.component.option('values');
            dataGrid.selectRows(values);
        }
    });
});