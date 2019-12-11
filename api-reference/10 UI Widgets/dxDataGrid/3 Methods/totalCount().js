$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author', 'title', 'year', 'genre',
            { dataField: 'price', format: { type: 'currency', precision: 2 } },
            'format'
        ],
        paging: { pageSize: 8 },
        filterRow: { visible: true }
    });

    $("#getTotalCountButton").dxButton({
        text: 'Get Total Count',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            $('#textArea').html('');
            $('#textArea').html(dataGrid.totalCount());
        }
    });
});