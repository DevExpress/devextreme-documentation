The **DataGrid** raises the following export-related events:

- [exporting](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/exporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#exporting')  
- [options.customizeCell of excelExporter.exportDataGrid.customizeCell](// TODO: add link)

To customize the generated Excel file during exporting, use the **customizeCell** callback. By default, Excel shows all cells according to their default styles according the DataGrid. The [options.customizeCell of excelExporter.exportDataGrid.customizeCell](// TODO: add link) function allows you to change the appearance of the cells for Excel cell font, background color and fill pattern, as well as align, format, modify the cell value and etc.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJS/"
}

// See also 
// TODO: how to export invisible columns https://supportcenter.devexpress.com/ticket/details/t826206/datagrid-exceljs-ctp-export-how-to-export-invisible-datagrid-columns-into-excel-using

For more details see https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJS/

[note] If you can export cells as hyperlinks use the [hyperlink value](https://github.com/exceljs/exceljs#hyperlink-value) as follows

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        var workbook = new ExcelJS.Workbook();    
        var worksheet = workbook.addWorksheet('Sheet Name');

        DevExpress.excelExporter.exportDataGrid({
            component: e.component,
            worksheet: worksheet,
            customizeCell: function(options) {
            const { gridCell, excelCell } = options;
            
                if(gridCell.column.dataField === "HyperLink"){
                    excelCell.value = {
                        text: gridCell.value,
                        hyperlink: gridCell.value
                    }
                }
            }
        }).then(function() {
            workbook.xlsx.writeBuffer().then(function(buffer) {
                saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx");
            });
        });
    });

---

#####See Also#####
#include common-link-handleevents
