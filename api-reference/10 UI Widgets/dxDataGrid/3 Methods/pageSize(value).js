$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: {
            store: {
                type: 'odata',
                url: 'https://sampleservices.devexpress.com/Northwind.svc/Products'
            }
        },
        columns: [
            { dataField: 'ProductID', caption: 'ID' },
            { dataField: 'ProductName', caption: 'Name', width: 220 },
            { dataField: 'QuantityPerUnit', caption: 'Quantity', width: 150 },
            { dataField: 'UnitPrice', caption: 'Price' },
            { dataField: 'UnitsInStock', caption: 'In Stock' }
        ],
        paging: { pageSize: 8 }
    });

    $("#numberBoxContainer").dxNumberBox({
        value: 8,
        step: 1,
        showSpinButtons: true,
        min: 1,
        height: 35,
        width: 100,
        onValueChanged: function (info) {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.pageSize(info.value);
        }
    });
});