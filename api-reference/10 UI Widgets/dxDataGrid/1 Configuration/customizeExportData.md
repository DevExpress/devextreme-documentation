---
id: dxDataGrid.Options.customizeExportData
type: function(columns, rows)
---
---
##### shortDescription
Customizes data before export. You can use the **export**.[customizeExcelCell](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/customizeExcelCell.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#customizeExcelCell') function instead.

##### param(columns): Array<dxDataGridColumn>
All column [configurations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

##### param(rows): Array<dxDataGridRowObject>
The [Row](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/') objects. This array contains only exported rows.

---
This function is called between the [onExporting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting') and [onExported](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExported.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported') functions. This function customizes data; the other functions can be used to customize grid columns.
 
In the following code, the **customizeExportData** function replaces empty values with the *"Is Blank"* value:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            customizeExportData: function (columns, rows) {
                rows.forEach(function (row) {
                    var rowValues = row.values;
                    for (var i = 0; i < rowValues.length; i++) {
                        if (rowValues[i] == "")
                            rowValues[i] = "Is Blank";
                    }
                })
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeExportData (columns, rows) {
            rows.forEach(function (row) {
                let rowValues =  row.values;
                for(let i = 0; i < rowValues.length; i++) {
                    if (rowValues[i] == "")
                        rowValues[i] = "Is Blank";
                }
            })
        };
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        [customizeExportData]="customizeExportData">
    </dx-data-grid>

---

#####See Also#####
- [Client-Side Exporting](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/')
- [export](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/').**enabled**
- **columns[]**.[allowExporting](/api-reference/_hidden/dxDataGridColumn/allowExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowExporting')