$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author', 'title', 'year', 'genre', 'format',
            { dataField: 'price', visible: false },
            { dataField: 'language', visible: false },
            { dataField: 'length', visible: false }
        ],
        paging: { pageSize: 8 }
    });

    $("#showColumnChooserButton").dxButton({
        text: 'Show Column Chooser',
        onClick: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.showColumnChooser();
            var hideColumnChooserButton = $('#hideColumnChooserButton').dxButton('instance');
            if (hideColumnChooserButton.option('disabled'))
                hideColumnChooserButton.option('disabled', false);
            info.component.option('disabled', true)
        }
    });

    $("#hideColumnChooserButton").dxButton({
        text: 'Hide Column Chooser',
        disabled: true,
        onClick: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.hideColumnChooser();
            var showColumnChooserButton = $('#showColumnChooserButton').dxButton('instance');
            if (showColumnChooserButton.option('disabled'))
                showColumnChooserButton.option('disabled', false);
            info.component.option('disabled', true)
        }
    });
});