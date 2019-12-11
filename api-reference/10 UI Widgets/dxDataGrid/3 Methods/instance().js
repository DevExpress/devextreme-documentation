$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year', 'genre', 'language', 'format'
        ],
        paging: { pageSize: 8 },
        selection: { mode: 'multiple' }
    });

    $("#clearSelectionButton").dxButton({
        text: 'Clear Selection',
        onClick: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.clearSelection();
        }
    });
});