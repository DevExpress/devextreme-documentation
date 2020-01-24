---
id: exportDataGrid
type: function(options)
---
---
##### shortDescription
Exports grid data to Excel.

##### param(options): Object
Export settings.

##### return: Promise<any>
A Promise that is resolved with an object of coordinates the last cell position after the export is finished. The object has structure as {row: index, column: index}. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a>

##### param(options.component): dxDataGrid // default value: undefined
The [*DataGrid*](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/) widget's instance.
[note] **required**

##### param(options.worksheet): any // default value: undefined
The **worksheet** argument exposes the Excel worksheet configuration. For more information, refer to how to create [workbook](https://github.com/exceljs/exceljs#create-a-workbook) and add [worksheet](https://github.com/exceljs/exceljs#add-a-worksheet).
[note] **required**

##### param(options.topLeftCell): Object // default { row: 1, column: 1 }
The object that specified a start position for export dxDataGrid. Has the following format: { row: *rowIndex*, column: *cellIndex*}.

##### param(options.selectedRowsOnly): Boolean // default false
Allows an end user to export selected rows only. 

##### param(options.autoFilterEnabled): Boolean // default undefined
Specifies whether to enable Excel filtering for the exported data in the resulting XLSX file.

##### param(options.keepColumnWidths): Boolean // default true
Specifies whether to automatically initialize the Excel column width in accordance with its source DataGrid column width.

##### param(options.customizeCell ): function(options) // default undefined
Customizes an Excel cell after it is created.

// TODO describe params
The 'options.excelCell' field contains an ExcelJS object that describes an Excel cell. 

Refer to the following topics for more details about its members: 

- value and type - https://github.com/exceljs/exceljs#value-types 
- alignment - https://github.com/exceljs/exceljs#alignment 
- border - https://github.com/exceljs/exceljs#borders 
- fill - https://github.com/exceljs/exceljs#fills
- richText - https://github.com/exceljs/exceljs#rich-text
- font - https://github.com/exceljs/exceljs#fonts 
- numFmt - https://github.com/exceljs/exceljs#number-formats 

 The 'options.gridCell' object fields are described in https://js.devexpress.com/Documentation/ApiReference/Common/Object_Structures/ExcelDataGridCell/ 

##### param(options.LoadPanel ): Object // default: loadPanel: { enabled: true, text: messageLocalization.format('dxDataGrid-exporting')}

// TODO describe params
Configures the load panel, that shown when data exporting. The ‘loadPanel’ object fields are described in https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/

Code snippets:
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

---
#include common-demobutton with { 
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelCellCustomization/"
}

#####See Also##### //?????????
- [Advanced Document Customization](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting/05%20API/05%20Customize%20Excel%20Data.md '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/#API/Customize_Excel_Data')