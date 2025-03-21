All export operations use the [exportPivotGrid(options)](/api-reference/50%20Common/utils/excelExporter/exportPivotGrid(options).md '/Documentation/ApiReference/Common/Utils/excelExporter/#exportPivotGridoptions') method from the [excelExporter](/api-reference/50%20Common/utils/excelExporter '/Documentation/ApiReference/Common/Utils/excelExporter/') module.

Before starting with **exportPivotGrid**, obtain:

- A PivotGrid instance.
- A target Excel worksheet.

An instance can be obtained through an event handler like [onExporting](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#onExporting'), while the worksheet needs pre-creation:

    <!--JavaScript-->
    const workbook = new ExcelJS.Workbook(); 
    const worksheet = workbook.addWorksheet('Main sheet');

The following code snippet exports PivotGrid data as a <a href="https://en.wikipedia.org/wiki/Binary_large_object" target="_blank">blob</a> that is then saved to an XLSX file.

---
##### jQuery

    DevExpress.excelExporter.exportPivotGrid({
        component: pivotGridInstance,
        worksheet: worksheet
    }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer) {
            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Sales.xlsx');
        });
    });

##### Angular

    exportPivotGrid({ 
        worksheet: worksheet, 
        component: pivotGridInstance
    }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) { 
            saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Sales.xlsx"); 
        }); 
    });

##### Vue

    exportPivotGrid({ 
        worksheet: worksheet, 
        component: pivotGridInstance
    }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) { 
            saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Sales.xlsx"); 
        }); 
    });

##### React

    exportPivotGrid({ 
        worksheet: worksheet, 
        component: pivotGridInstance
    }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer: BlobPart) { 
            saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Sales.xlsx"); 
        }); 
    });

---

[note] You can pass a PivotGrid instance, a worksheet, and other properties to **exportPivotGrid** to customize your Excel sheet. For a full list, refer to [PivotGridExportOptions](/api-reference/50%20Common/Object%20Structures/PivotGridExportOptions '/Documentation/ApiReference/Common/Object_Structures/PivotGridExportOptions/').