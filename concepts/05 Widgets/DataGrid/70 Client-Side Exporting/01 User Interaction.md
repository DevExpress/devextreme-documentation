A user clicks the **Export** button to save an Excel file with the exported data. Data types, sorting, filtering, and grouping settings are maintained.

![DevExtreme HTML5 JavaScript DataGrid Export Button](/images/DataGrid/exported_data.png)

Client-side exporting requires referencing the [JSZip](https://stuk.github.io/jszip) library on the page. See the guides in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section for more information. After that, you can enable exporting in the **DataGrid** by setting the **export**.[enabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#enabled') option to **true**.

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
    import { DxDataGridModule } from 'devextreme-angular';
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

You can disable exporting a specific column by setting its [allowExporting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowExporting') option to **false**:

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
    import { DxDataGridModule } from 'devextreme-angular';
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
    import { DxDataGridModule } from 'devextreme-angular';
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExportToExcel/jQuery/Light/"
}

