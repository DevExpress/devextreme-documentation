A user can click the **Export** button to save an Excel file with the exported data. Data types, sorting, filtering, and grouping settings are maintained.

![DevExtreme HTML5 JavaScript DataGrid Export Button](/images/DataGrid/exported_data.png)

To allow a user to export data, set the **export**.[enabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#enabled') option to **true**.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            export: {
                enabled: true
            }
        });
    });


#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-export [enabled]="true"></dxo-export>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

You can disable exporting a specific column by setting its [allowExporting](/api-reference/_hidden/dxDataGridColumn/allowExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowExporting') option to **false**:

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            export: {
                enabled: true
            },
            columns: [{
                dataField: "id",
                allowExporting: false
            }, 
                // ...
            ]
        });
    });


#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-export [enabled]="true"></dxo-export>
        <dxi-column dataField="id" [allowExporting]="false"></dxi-column>
        <!-- ... -->
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

The resulting file is renamed according to the [fileName](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/fileName.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#fileName') option, and contains only the selected rows if you set the [allowExportSelectedData](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/allowExportSelectedData.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#allowExportSelectedData') option to **true**.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            export: {
                enabled: true,
                allowExportSelectedData: true,
                fileName: "NewFileName"
            }
        });
    });


#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-export 
            [enabled]="true"
            [allowExportSelectedData]="true"
            fileName="NewFileName">
        </dxo-export>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExportToExcel/"
}

