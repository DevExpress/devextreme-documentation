---
id: ExportDataGridProps.customizeCell
type: function(options)
---
---
##### shortDescription
Customizes an Excel cell after creation.

##### param(options): Object
An object passed to this callback function.

##### field(options.excelCell): Object
An ExcelJS object that describes an Excel cell. Use its properties to customize the cell. For information on them, refer to the ExcelJS documentation:

- <a href="https://github.com/exceljs/exceljs#value-types" target="_blank">value</a>
- <a href="https://github.com/exceljs/exceljs#alignment" target="_blank">alignment</a>
- <a href="https://github.com/exceljs/exceljs#borders" target="_blank">border</a>
- <a href="https://github.com/exceljs/exceljs#fills" target="_blank">fill</a>
- <a href="https://github.com/exceljs/exceljs#rich-text" target="_blank">richText</a>
- <a href="https://github.com/exceljs/exceljs#fonts" target="_blank">font</a>
- <a href="https://github.com/exceljs/exceljs#number-formats" target="_blank">numFmt</a>

##### field(options.gridCell): ExcelDataGridCell
A **DataGrid** cell.

---