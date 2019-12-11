$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year', 'genre', 'language',
            { dataField: 'format', groupIndex: 0 }
        ],
        paging: { pageSize: 7 },
        groupPanel: { visible: true }
    });

    $("#clearGroupingButton").dxButton({
        text: 'Clear Grouping',
        onClick: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.clearGrouping();
        }
    });
});