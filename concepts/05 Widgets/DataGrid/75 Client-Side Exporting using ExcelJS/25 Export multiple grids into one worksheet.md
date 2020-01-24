**Exporting multiple dataGrids to the same worksheet**

Call the [exportDataGrid] function for export first DataGrid widget. The function return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is resolved with an object of coordinates the last cell position. Then use the [then](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) method for positioning the second DataGrid widget and its exporting.

To save the document to a .xlsx file use saveAs() method from FileSaver.js library.

The following example demonstrates how to export two DataGrids on one worksheet in the same Excel document.
---

#####jQuery

    <!--JavaScript-->
    $(function () {
        var workbook = new ExcelJS.Workbook();    
        var worksheet = workbook.addWorksheet('Sheet Name');

        DevExpress.excelExporter.exportDataGrid({   
            worksheet,    
            component: dataGridInstance,    
            topLeftCell: { row: 4, column: 2 }   
        }).then(function(dataGridRange) {
            return DevExpress.excelExporter.exportDataGrid({   
                worksheet,    
                component: dataGrid2,    
                topLeftCell: { row: 4, column: (dataGridRange.to.column + 2) }   
            });
        }).then(function() {   
            workbook.xlsx.writeBuffer().then(function(buffer) {   
                saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx");   
            });
        });
    });

#####Angular

    <!--TypeScript-->
    import { exportDataGrid } from 'devextreme/exporter/exceljs/excelExporter';
    // ...
    export class AppComponent {
        // ...
        onExporting(e) { 
            var workbook = new ExcelJS.Workbook();    
            var worksheet = workbook.addWorksheet('Sheet Name');

            DevExpress.excelExporter.exportDataGrid({   
                worksheet,    
                component: dataGridInstance,    
                topLeftCell: { row: 4, column: 2 }   
            }).then(function(dataGridRange) {
                return DevExpress.excelExporter.exportDataGrid({   
                    worksheet,    
                    component: dataGridInstance2,    
                    topLeftCell: { row: 4, column: (dataGridRange.to.column + 2) }   
                });
            }).then(function() {   
                workbook.xlsx.writeBuffer().then(function(buffer) {   
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx");   
                });
            });

            e.cancel = true;
        }
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSExportMultipleGrids/"
}