var stringFilters = [ 'contains', 'notcontains', 'startswith', 'endswith', '=', '<>' ],
    numericFilters = ['=', '<>', '<', '>', '<=', '>='];

$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author', 'title', 'year', 'genre',
            { dataField: 'price', format: { type: 'currency', precision: 2 } },
            'format'
        ],
        paging: { pageSize: 8 },
        customizeColumns: function (columns) {
            $("#columnsSelectBox").dxSelectBox({
                height: 35,
                width: 150,
                dataSource: columns,
                valueExpr: 'dataField',
                displayExpr: 'caption',
                placeholder: 'Select a column...',
                onValueChanged: function (info) {
                    $.each(info.component.option('dataSource'), function(index, element) {
                        if (info.value == element.dataField) {
                            var filtersSelectBox = $("#filtersSelectBox").dxSelectBox('instance');
                            var columnDataType = $("#gridContainer").dxDataGrid("instance").columnOption(index, "dataType");
                            columnDataType == 'string' ? filtersSelectBox.option('items', stringFilters) : filtersSelectBox.option('items', numericFilters);
                        }
                    });
                }
            });
        }
    });

    $("#filtersSelectBox").dxSelectBox({
        height: 35,
        width: 150,
        placeholder: 'Select a filter...'
    });

    $("#valueTextBox").dxTextBox({
        placeholder: 'Enter a value to compare with...',
        height: 35,
        width: 200
    });

    $("#applyFilterButton").dxButton({
        text: 'Apply Filter',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            var column = $("#columnsSelectBox").dxSelectBox('instance').option('value');
            var filter = $("#filtersSelectBox").dxSelectBox('instance').option('value');
            var value = $("#valueTextBox").dxTextBox('instance').option('value');
            if (column.length > 0 && filter.length > 0)
                dataGrid.filter([column, filter, value]);
        }
    });

    $("#clearFilterButton").dxButton({
        text: 'Clear Filter',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.clearFilter('dataSource');
        }
    });
});