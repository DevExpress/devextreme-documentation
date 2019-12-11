$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author', 'title', 'year', 'genre', 'format',
            { dataField: 'price', visible: false },
            { dataField: 'language', visible: false },
            { dataField: 'length', visible: false }
        ],
        paging: { pageSize: 7 },
        columnChooser: { enabled: true }
    });

    $("#enableColumnChooserCheckbox").dxCheckBox({
        value: true,
        text: 'Enable Column Chooser',
        onValueChanged: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.option({
                columnChooser: { enabled: info.value }
            });
            dataGrid.repaint();
        }
    });
});