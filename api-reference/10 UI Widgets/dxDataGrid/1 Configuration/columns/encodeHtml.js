$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: [
            { author: 'D. Adams', title: "<i>The Hitchhiker's Guide to the Galaxy</i>", year: 1979, genre: 'Comedy, sci-fi', format: 'hardcover' },
            { author: 'K. Vonnegut', title: "<i>Cat's Cradle</i>", year: 1963, genre: 'Satire, sci-fi', format: 'e-book' },
            { author: 'M. Mitchell', title: "<i>Gone with the Wind</i>", year: 1936, genre: 'Historical fiction', format: 'hardcover' },
            { author: 'H. Lee', title: "<i>To Kill a Mockingbird</i>", year: 1960, genre: 'Novel', format: 'e-book' },
            { author: 'G. Orwell', title: "<i>Nineteen Eighty-Four</i>", year: 1949, genre: 'Dystopian novel, political fiction', format: 'hardcover' },
            { author: 'R. Bradbury', title: "<i>The Martian Chronicles</i>", year: 1950, genre: 'Sci-fi', format: 'e-book' },
            { author: 'K. Vonnegut', title: "<i>God Bless You, Mr. Rosewater, or Pearls Before Swine</i>", year: 1965, genre: 'Novel', format: 'paperback' },
            { author: 'J. D. Salinger', title: "<i>The Catcher in the Rye</i>", year: 1951, genre: 'Bildungsroman', format: 'paperback' },
            { author: 'C. Dickens', title: "<i>Great Expectations</i>", year: 1861, genre: 'Realistic fiction', format: 'paperback' },
            { author: 'J. Austen', title: "<i>Pride and Prejudice</i>", year: 1813, genre: 'Novel of manners', format: 'paperback' }
        ],
        columns: [
            'author',
            { dataField: 'title', encodeHtml: false },
            { dataField: 'year', width: 70 },
            'genre', 'format'
        ],
        paging: { pageSize: 7 }
    });

    $("#encodeHtmlCheckbox").dxCheckBox({
        value: false,
        text: 'Encode HTML',
        onValueChanged: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.columnOption('title', 'encodeHtml', info.value);
        }
    });
});