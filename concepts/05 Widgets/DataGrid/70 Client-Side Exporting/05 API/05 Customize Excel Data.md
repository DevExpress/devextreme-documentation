The [customizeExcelCell](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/customizeExcelCell.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#customizeExcelCell') function allows you to change the Excel cell font, background color and fill pattern, as well as align, format, and modify the cell value.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelCellCustomization/"
}

In the code below, Excel cells are customized. Values in the `Cost` column are formatted according to values in the `Currency` column. Cells in the  `Product` column have a different appearance if the product costs more than 3000. 

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: ['Product', 'Cost'],
            dataSource: [
                { Product: 'Projector', Cost: 3500, Currency: '$' },
                { Product: 'Video Player', Cost: 170, Currency: '€' },
                // ...
            ],
            export: {
                enabled: true,
                customizeExcelCell: function(e) {
                    if(e.gridCell.rowType === 'data') {
                        if(e.gridCell.column.dataField == "Cost") {
                            e.numberFormat = `&quot;${e.gridCell.data.Currency}&quot;#,##0.00`;
                        }
                        if(e.gridCell.column.dataField == "Product" && e.gridCell.data.Cost > 3000) {
                            e.fillPatternType = "lightGray";
                            e.fillPatternColor = "#FF0000";
                        }
                    }
                }
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        dataSource = [
            { Product: 'Projector', Cost: 3500, Currency: '$' },
            { Product: 'Video Player', Cost: 170, Currency: '€' },
            // ...
        ];
        customizeExcelCell(e) {
            if(e.gridCell.rowType === 'data') {
                if(e.gridCell.column.dataField == "Cost") {
                    e.numberFormat = `&quot;${e.gridCell.data.Currency}&quot;#,##0.00`;
                }
                if(e.gridCell.column.dataField == "Product" && e.gridCell.data.Cost > 3000) {
                    e.fillPatternType = "lightGray";
                    e.fillPatternColor = "#FF0000";
                }
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid 
        [columns]="['Product', 'Cost']"
        [dataSource]="dataSource">
        <dxo-export 
            [enabled]="true" 
            [customizeExcelCell]="customizeExcelCell">
        </dxo-export>
    </dx-data-grid>

---

Hidden columns are ignored on export. If you still need to export them, use the [onExporting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting') and **onExported** functions. Refer to the **onExporting** description for an example.
