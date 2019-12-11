$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year', 'genre', 'format'
        ],
        paging: { pageSize: 8 }
    });

    $("#showPagerCheckbox").dxCheckBox({
        value: true,
        text: 'Show Pager',
        onValueChanged: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.option('pager.visible', info.value);
        }
    });
});