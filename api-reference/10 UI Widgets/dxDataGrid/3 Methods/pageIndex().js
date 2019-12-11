$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: orders,
        columns: [
            "OrderID", "CustomerID",
            { dataField: "OrderDate", dataType: 'date', format: 'shortDate' },
            { dataField: "RequiredDate", dataType: 'date', format: 'shortDate' },
            "Freight", "ShipName", "ShipCity"
        ],
        paging: { pageSize: 8 }
    });

    $("#getPageIndexButton").dxButton({
        text: 'Get the Current Page Index',
        onClick: function () {
            var dataGrid = $('#gridContainer').dxDataGrid('instance');
            $('#textArea').html('');
            $('#textArea').html('Page Index: ' + dataGrid.pageIndex());
        }
    });
});