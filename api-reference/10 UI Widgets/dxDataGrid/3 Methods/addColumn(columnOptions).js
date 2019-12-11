var dataFields = ['genre', 'price', 'language', 'length', 'format'];

$(function () {
    $('#gridContainer').dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year'
        ],
        paging: { pageSize: 8 }
    });

    $("#dataFieldSelectBox").dxSelectBox({
        height: 35,
        width: 150,
        items: dataFields,
        value: dataFields[0]
    });

    $('#addColumnButton').dxButton({
        text: 'Add Column',
        onClick: function () {
            var dataFieldSelectBox = $('#dataFieldSelectBox').dxSelectBox('instance');
            var selectedDataField = dataFieldSelectBox.option('value');
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.addColumn(selectedDataField);
            var indexToRemove = dataFields.indexOf(selectedDataField);
            if (indexToRemove != -1) {
                dataFields.splice(indexToRemove, 1);
                dataFieldSelectBox.option('items', dataFields);
                if (dataFields.length === 0) {
                    dataFieldSelectBox.option('value', null);
                    $('#addColumnButton').dxButton('instance').option('disabled', true);
                } else {
                    dataFieldSelectBox.option('value', dataFields[0]);
                }
            }
        }
    });
});