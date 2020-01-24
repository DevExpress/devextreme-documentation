Export images

DevExtreme export allows you to export images from DataGrid cells to exporting Excel document. The following code snippet demonstrates how to do it.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        onExporting: function(e) {
        var workbook = new ExcelJS.Workbook();    
        var worksheet = workbook.addWorksheet('Main sheet');

        DevExpress.excelExporter.exportDataGrid({
            component: e.component,
            worksheet: worksheet,
            topLeftCell: { row: 2, column: 2 },
            autoFilterEnabled: true,
            customizeCell: (options) => {
                var { excelCell, gridCell } = options;
                if(gridCell.rowType === "data") {
                    if(gridCell.column.dataField === "Picture") {
                        excelCell.value = undefined;

                        const image = workbook.addImage({
                            base64: gridCell.value,
                            extension: 'png',
                        });

                        worksheet.getRow(excelCell.row).height = 90;
                        worksheet.addImage(image, {
                            tl: { col: excelCell.col - 1, row: excelCell.row - 1 },
                            br: { col: excelCell.col, row: excelCell.row }
                        });
                    }
                }
            }
        }).then(function() {
            workbook.xlsx.writeBuffer().then(function(buffer) {
            saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx");
            });
        });
        e.cancel = true;
        }
    });

#####Angular

    <!--TypeScript-->
    import { exportDataGrid } from 'devextreme/exporter/exceljs/excelExporter';
    // ...
    export class AppComponent {
        // ...
        onExporting(e) {
            var workbook = new ExcelJS.Workbook();    
            var worksheet = workbook.addWorksheet('Main sheet');

            exportDataGrid({
                component: e.component,
                worksheet: worksheet,
                topLeftCell: { row: 2, column: 2 },
                autoFilterEnabled: true,
                customizeCell: (options) => {
                    var { excelCell, gridCell } = options;
                    if(gridCell.rowType === "data") {
                        if(gridCell.column.dataField === "Picture") {
                        excelCell.value = undefined;

                        const image = workbook.addImage({
                            base64: gridCell.value,
                            extension: 'png',
                        });

                        worksheet.getRow(excelCell.row).height = 90;
                        worksheet.addImage(image, {
                            tl: { col: excelCell.col - 1, row: excelCell.row - 1 },
                            br: { col: excelCell.col, row: excelCell.row }
                        });
                    }
                }
                }
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSExportImages/"
}