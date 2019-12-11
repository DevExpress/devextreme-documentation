$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author', 'title', 'year', 'genre',
            { dataField: 'price', format: { type: 'currency', precision: 2 } },
            'format'
        ],
        paging: { pageSize: 8 }
    });

    $("#valueTextBox").dxTextBox({
        placeholder: 'Enter a search string...',
        height: 35,
        width: 250
    });

    $("#searchButton").dxButton({
        text: 'Search',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            var searchString = $("#valueTextBox").dxTextBox('instance').option('value');
            dataGrid.searchByText(searchString);
        }
    });

    $("#resetButton").dxButton({
        text: 'Reset',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.searchByText('');
        }
    });
});