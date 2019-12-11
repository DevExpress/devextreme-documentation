$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 170 },
            { dataField: 'year', width: 50 },
            'genre',
            { dataField: 'language', width: 80 }, 'format'
        ],
        grouping: { contextMenuEnabled: true },
        groupPanel: { visible: true },
        scrolling: { mode: 'virtual' }
    });
});