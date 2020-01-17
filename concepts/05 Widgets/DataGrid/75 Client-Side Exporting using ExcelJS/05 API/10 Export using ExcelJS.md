Instead of default export you can use [exportDataGrid](//Todo: link) function that uses the [ExcelJS](https://github.com/exceljs/exceljs) library.

For more information about ExcelJS, see:
- https://github.com/exceljs/exceljs#contents 
- https://github.com/exceljs/exceljs#browser 

For export you need to call [exportDataGrid](//Todo: link) function and pass two required properties in object parameter([worksheet](https://github.com/exceljs/exceljs#add-a-worksheet) and [datagrid's instance](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/)) to export data programmatically. All object properties you can find in exportDataGrid documentation API topic.

These are the steps for using this function with preventing default export:
1. The trigger point is an event handler for the [onExporting](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) event. Technically you can run the export functionality at any point, but if you use this event you can take advantage of the standard Export button supported by the Data Grid. Note that standard processing is deactivated at the end of the code snippet by setting e.cancel = true. 
2. Using ExcelJS API calls, a new workbook/worksheet combination is created 
3. Using our new API, the Data Grid is exported to the given worksheet 
4. To save the document to a file, the saveAs function from [FileSaver.js](https://github.com/eligrey/FileSaver.js/) is called.


