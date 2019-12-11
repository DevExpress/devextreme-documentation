$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year', 'genre', 'language', 'format'
        ],
        paging: { pageSize: 8 },
        selection: {
            mode: 'multiple',
            allowSelectAll: false
        }
    });

    $("#selectAllButton").dxButton({
        text: 'Select All Records',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.selectAll();
        }
    });

});