$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            { dataField: 'year', sortOrder: 'asc' },
            'genre', 'language', 'format'
        ],
        paging: { pageSize: 8 },
        sorting: { mode: 'multiple' }
    });

    $("#clearSortingButton").dxButton({
        text: 'Clear Sorting',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.clearSorting();
        }
    });
});