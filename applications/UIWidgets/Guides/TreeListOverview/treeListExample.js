$(function() {
    var filter = undefined;

    $("#treeList").dxTreeList({
        dataSource: employees,
        columns: [{
            caption: "Full Name",
            calculateCellValue: function(rowData) {
                return rowData.FirstName + " " + rowData.LastName;
            },
            width: 160,
            allowSorting: true,
            allowFiltering: true
        }, "Title", {
            dataField: "BirthDate", 
            dataType: "date",
            width: 100
        }, {
            caption: "City",
            calculateCellValue: function(rowData) {
                return rowData.City + ", " + rowData.Region;
            },
            width: 110,
            allowSorting: true,
            allowFiltering: true
        }, "Address", "HomePhone"
        ],
        parentIdExpr: "ReportsTo",
        keyExpr: "EmployeeID",
        expandedRowKeys: [2, 5],
        showRowLines: true,
        allowColumnResizing: true,
        allowColumnReordering: true,
        columnFixing: { enabled: true },
        columnChooser: { enabled: true },
        filterRow: { visible: true },
        searchPanel: { visible: true },
        selection: { mode: "single" },
        onContentReady: function (e) {
            if (e.component.getCombinedFilter() == undefined && filter != undefined) {
                e.component.beginUpdate();
                e.component.expandRow(5)
                e.component.expandRow(2);
                e.component.endUpdate();
            }
            filter = e.component.getCombinedFilter();
        }
    });
});