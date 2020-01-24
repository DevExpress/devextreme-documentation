A user can click the **Export** button to save an Excel file with the exported data. Data types, sorting, filtering, and grouping settings are maintained.

![DevExtreme HTML5 JavaScript DataGrid Export Button](/images/DataGrid/exported_data.png) // TODO: update image

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

You can specify file name as follows // https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJS/
You can export only selected rows using [allowExportSelectedData](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/allowExportSelectedData.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#allowExportSelectedData') option to **true**. For more details see  https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJS/


#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJS/"
}

