$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            { dataField: 'author', cssClass: 'red' },
            { dataField: 'title', width: 210, cssClass: 'green' },
            { dataField: 'year', cssClass: 'blue' },
            { dataField: 'genre', cssClass: 'purple' },
            { dataField: 'format', cssClass: 'gray' }
        ],
        paging: { pageSize: 8 }
    });

    $('#applyCssClassButton').click(function () {
        var selectedColumnIndex = +$("input[name='columnIndex']:checked").val();
        var styleToBeApplied = $("#styleSelector").val();
        var grid = $('#gridContainer').dxDataGrid('instance');
        grid.columnOption(selectedColumnIndex, 'cssClass', styleToBeApplied);
    });

    $('#removeCssClassButton').click(function () {
        var selectedColumnIndex = +$("input[name='columnIndex']:checked").val();
        var grid = $('#gridContainer').dxDataGrid('instance');
        grid.columnOption(selectedColumnIndex, 'cssClass', undefined);
    });
});
