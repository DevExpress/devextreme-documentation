Instead of default export you can use [exportDataGrid](//Todo: link) function that uses the [ExcelJS](https://github.com/exceljs/exceljs) library.

For more information about ExcelJS, see:
- https://github.com/exceljs/exceljs#contents 
- https://github.com/exceljs/exceljs#browser 

For export you need to call [exportDataGrid](//Todo: link) function and pass two required properties in object parameter([worksheet](https://github.com/exceljs/exceljs#add-a-worksheet) and [datagrid's instance](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/)) to export data programmatically. All object properties you can find in exportDataGrid documentation API topic.

[note]Client-side exporting requires [ExcelJS](https://github.com/exceljs/exceljs) and [FileSaver](https://github.com/eligrey/FileSaver.js/) libraries. Reference or import this libraryes in you project as follows:
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/3.3.1/exceljs.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js"></script>

These are the steps for using this function with preventing default export:
1. The trigger point is an event handler for the [onExporting](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) event. Technically you can run the export functionality at any point, but if you use this event you can take advantage of the standard Export button supported by the Data Grid. Note that standard processing is deactivated at the end of the code snippet by setting e.cancel = true. 
2. Using ExcelJS API calls, a new workbook/worksheet combination is created 
3. Using our new API, the Data Grid is exported to the given worksheet 
4. To save the document to a file, the saveAs function from [FileSaver.js](https://github.com/eligrey/FileSaver.js/) is called.


This approach is shown in the code samples below
---
##### jQuery

    <!--JavaScript-->
    onExporting: e => { 
        var workbook = new ExcelJS.Workbook(); 
        var worksheet = workbook.addWorksheet('Main sheet'); 
    
        DevExpress.excelExporter.exportDataGrid({ 
                worksheet: worksheet, 
                component: e.component 
        }).then(function() {
            // save to .xlsx file
            workbook.xlsx.writeBuffer().then(function(buffer) { 
                saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx'); 
            }); 
        }); 
        e.cancel = true; 
    };

##### Angular

    <!--TypeScript-->
    import { exportDataGrid } from 'devextreme/exporter/exceljs/excelExporter';
    import ExcelJS from 'exceljs';
    import saveAs from 'file-saver';
    // ...
    export class AppComponent {
        onExporting(e) {
            var workbook = new ExcelJS.Workbook();    
            var worksheet = workbook.addWorksheet('Main sheet');

            exportDataGrid({
                component: e.component,
                worksheet: worksheet
            }).then(function() {
                // save to .xlsx file
                workbook.xlsx.writeBuffer().then(function(buffer) { 
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx'); 
                }); 
            }); 
            e.cancel = true; 
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

[note]You are free to customize this approach, for example by referring to any existing worksheet, or by post-processing the document after the export has taken place.