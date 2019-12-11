var source = [
    { author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, genre: 'Comedy, sci-fi', format: 'hardcover' },
    { author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, genre: 'Satire, sci-fi', format: 'e-book' },
    { author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, genre: 'Historical fiction', format: 'hardcover' },
    { author: 'H. Lee', title: "To Kill a Mockingbird", year: 1960, genre: 'Novel', format: 'e-book' },
    { author: 'G. Orwell', title: "Nineteen Eighty-Four", year: 1949, genre: 'Dystopian novel, political fiction', format: 'hardcover' },
    { author: 'R. Bradbury', title: "The Martian Chronicles", year: 1950, genre: 'Sci-fi', format: 'e-book' },
    { author: 'K. Vonnegut', title: "God Bless You, Mr. Rosewater, or Pearls Before Swine", year: 1965, genre: 'Novel', format: 'paperback' },
    { author: 'J. D. Salinger', title: 'The Catcher in the Rye', year: 1951, genre: 'Bildungsroman', format: 'paperback' },
    { author: 'C. Dickens', title: "Great Expectations", year: 1861, genre: 'Realistic fiction', format: 'paperback' },
    { author: 'J. Austen', title: "Pride and Prejudice", year: 1813, genre: 'Novel of manners', format: 'paperback' }
];

$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: source,
        allowColumnReordering: true,
        editing: { mode: 'batch' }
    });

    $("#columnIndexContainer").dxNumberBox({
        value: 0,
        step: 1,
        showSpinButtons: true,
        min: 0,
        max: 4,
        height: 35,
        width: 100
    });

    $("#rowIndexContainer").dxNumberBox({
        value: 0,
        step: 1,
        showSpinButtons: true,
        min: 0,
        max: 9,
        height: 35,
        width: 100
    });

    $("#editButton").dxButton({
        text: 'Edit Cell',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            var rowIndex = $('#rowIndexContainer').dxNumberBox('instance').option('value');
            var columnIndex = $('#columnIndexContainer').dxNumberBox('instance').option('value');
            dataGrid.editCell(rowIndex, columnIndex);
        }
    });

    $("#closeButton").dxButton({
        text: 'Close Cell',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.closeEditCell();
        }
    });
});