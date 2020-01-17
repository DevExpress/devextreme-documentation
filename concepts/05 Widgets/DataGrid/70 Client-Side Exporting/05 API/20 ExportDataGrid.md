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

##### param(options.component): dxDataGrid
The [*DataGrid*](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/) widget's instance.

##### param(options.worksheet): any // TODO type
The worksheet object. See how to create [workbook](https://github.com/exceljs/exceljs#create-a-workbook) and add [worksheet](https://github.com/exceljs/exceljs#add-a-worksheet).

##### param(options.topLeftCell): Object
The object that specified a start position for export dxDataGrid. Has the following format: { row: *rowIndex*, column: *cellIndex*}.

##### param(options.selectedRowsOnly): Boolean
Allows an end user to export selected rows only. 

##### param(options.autoFilterEnabled): Boolean
Specifies whether to enable Excel filtering for the exported data in the resulting XLSX file.

##### param(options.keepColumnWidths): Boolean
Specifies whether to automatically initialize the Excel column width in accordance with its source DataGrid column width.

##### param(options.customizeCell ): function(options)
Customizes an Excel cell after it is created.

// TODO describe params
The 'options.excelCell' field contains an ExcelJS object that describes an Excel cell. 

Refer to the following topics for more details about its members: 

- value and type - https://github.com/exceljs/exceljs#value-types 

- alignment - https://github.com/exceljs/exceljs#alignment 

- border - https://github.com/exceljs/exceljs#borders 

- fill - https://github.com/exceljs/exceljs#fills 

- font - https://github.com/exceljs/exceljs#fonts 

- numFmt - https://github.com/exceljs/exceljs#number-formats 

 The 'options.gridCell' object fields are described in https://js.devexpress.com/Documentation/ApiReference/Common/Object_Structures/ExcelDataGridCell/ 

##### param(options.LoadPanel ): Object

// TODO describe params
Configures the load panel, that shown when data exporting. The ‘loadPanel’ object fields are described in https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/

---
#include common-demobutton with { 
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelCellCustomization/"
}

#####See Also##### //?????????
- [Advanced Document Customization](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting/05%20API/05%20Customize%20Excel%20Data.md '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/#API/Customize_Excel_Data')