$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year', 'genre', 'language', 'format'
        ],
        paging: { pageSize: 8 },
        onCellClick: function (clickedCell) {
            var dataGrid = $("#gridContainer").dxDataGrid('instance');
            dataGrid.columnOption(clickedCell.column.index, 'cssClass', 'clicked');
        }
    });
});