**Exporting multiple dataGrids in a separate worksheet**

The following example demonstrates how to export two DataGrids into separate worksheets in the same Excel document.
---

#####jQuery

    <!--JavaScript-->
    $(function () {
        var dataGrid1 = $("#gridContainer1").dxDataGrid("instance");   
        var dataGrid2 = $("#gridContainer2").dxDataGrid("instance");   
        var workbook = new ExcelJS.Workbook();       
        var worksheet1 = workbook.addWorksheet('Costs');
        var worksheet2 = workbook.addWorksheet('Ratings');  

        DevExpress.excelExporter.exportDataGrid({   
            worksheet: worksheet1,
            component: dataGrid1,
            topLeftCell: { row: 4, column: 2 }
        }).then(function(dataGridRange) {
            return DevExpress.excelExporter.exportDataGrid({   
                worksheet: worksheet2,
                component: dataGrid2,
                topLeftCell: { row: 4, column: 2 }
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
            var worksheet1 = workbook.addWorksheet('Costs');
            var worksheet2 = workbook.addWorksheet('Ratings');  

            DevExpress.excelExporter.exportDataGrid({
                worksheet: worksheet1,
                component: dataGrid1,
                topLeftCell: { row: 4, column: 2 }
            }).then(function(dataGridRange) {
                return DevExpress.excelExporter.exportDataGrid({   
                    worksheet: worksheet2,
                    component: dataGrid2,
                    topLeftCell: { row: 4, column: 2 }
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJS/" // TODO: add link to demo
}