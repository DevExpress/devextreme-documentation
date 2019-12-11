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

    $("#expandButton").dxButton({
        text: 'Expand Groups',
        onClick: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.expandAll();
        }
    });

    $("#collapseButton").dxButton({
        text: 'Collapse Groups',
        onClick: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.collapseAll();
        }
    });
});