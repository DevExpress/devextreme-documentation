PivotGrid allows users to export grid data as Excel documents. This feature requires the following third-party libraries:

- <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> v4+
- <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> v2.0.2+

To configure export operations, use the [exportPivotGrid(options)](/Documentation/ApiReference/Common/Utils/excelExporter/#exportPivotGridoptions) method from the [excelExporter](/Documentation/ApiReference/Common/Utils/excelExporter/) module. It requires a PivotGrid instance and a target Excel worksheet.

This method can be called at any point in your application. The following code calls it in the PivotGrid's [onExporting](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#onExporting) event handler. In this code, **exportPivotGrid(options)** exports grid data as a <a href="https://en.wikipedia.org/wiki/Binary_large_object" target="_blank">blob</a> that is then saved to an XLSX file. The `e.cancel` parameter disables the deprecated built-in export functionality. The **onExporting** event handler is executed when users click the Export button. The [export](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/export/).[enabled](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/export/#enabled) property adds this button to the PivotGrid.

---
##### jQuery

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.0.1/exceljs.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js"></script>

            <!-- DevExtreme scripts are referenced here -->
            <!-- ... -->
        </head>
    </html>

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            export: {
                enabled: true
            },
            onExporting: function(e) {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Sales');
                
                DevExpress.excelExporter.exportPivotGrid({
                    component: e.component,
                    worksheet: worksheet
                }).then(function() {
                    workbook.xlsx.writeBuffer().then(function(buffer) {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Sales.xlsx');
                    });
                });
                e.cancel = true;
            }
        });
    });

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/ExcelJSOverview/"
}

#include uiwidgets-grids-export-csv with {
    componentName: "PivotGrid"
}

For further information on the PivotGrid component, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/Overview/)
* [API Reference](/Documentation/ApiReference/UI_Components/dxPivotGrid/)
