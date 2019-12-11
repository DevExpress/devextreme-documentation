$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year', 'genre', 'language', 'format'
        ],
        paging: { pageSize: 8 }
    });

    $("#insertRowButton").dxButton({
        text: 'Add a New Row',
        onClick: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.addRow();
        }
    });

    $("#saveRowButton").dxButton({
        text: 'Save the Row',
        onClick: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.saveEditData();
        }
    });

    $("#cancelRow").dxButton({
        text: 'Cancel',
        onClick: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.cancelEditData();
        }
    });
});