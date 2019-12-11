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

    $("#beginLoadingButton").dxButton({
        text: 'Begin Custom Loading',
        onClick: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.beginCustomLoading();
            var endLoadingButton = $('#endLoadingButton').dxButton('instance');
            if (endLoadingButton.option('disabled'))
                endLoadingButton.option('disabled', false);
            info.component.option('disabled', true)
        }
    });

    $("#endLoadingButton").dxButton({
        text: 'End Custom Loading',
        disabled: true,
        onClick: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.endCustomLoading();
            var beginLoadingButton = $('#beginLoadingButton').dxButton('instance');
            if (beginLoadingButton.option('disabled'))
                beginLoadingButton.option('disabled', false);
            info.component.option('disabled', true)
        }
    });
});