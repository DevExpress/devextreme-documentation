$(function() {
    $("#dataGrid").dxDataGrid({
        dataSource: employees,
        columns: [{
            caption: "Full Name",
            calculateCellValue: function(rowData) {
                return rowData.FirstName + " " + rowData.LastName;
            },
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
            width: 120,
            allowSorting: true,
            allowFiltering: true
        }, "Address"
        ],
        showRowLines: true,
        allowColumnResizing: true,
        allowColumnReordering: true,
        columnFixing: { enabled: true },
        columnChooser: { enabled: true },
        filterRow: { visible: true },
        searchPanel: { visible: true },
        selection: { mode: "single" },
        masterDetail: {
            enabled: true,
            template: function (container, options) {
                var currentEmployeeData = options.data;
                container.append($('<div class="employeeInfo"><img class="employeePhoto" src="' + currentEmployeeData.Photo + '" /><p class="employeeNotes">' + currentEmployeeData.Notes + '</p></div>'));
            }
        },
        summary: {
            totalItems: [{
                column: "Full Name",
                summaryType: "count",
                showInColumn: "Address",
                alignment: "right"
            }]
        }
    });
});