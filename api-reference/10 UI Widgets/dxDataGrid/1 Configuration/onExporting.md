---
id: dxDataGrid.Options.onExporting
type: function(e)
default: null
EventForAction: dxDataGrid.exporting
---
---
##### shortDescription
A function that is executed before data is exported.

##### param(e): Object
Information about the event that caused the function execution.

##### field(e.cancel): Boolean
Allows you to cancel exporting data.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.fileName): String
The name of the file where grid data is about to be exported.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
You can use this function with the [onExported](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExported.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported') function to adjust columns before export. In the following code, these functions are used to export a hidden `ID` column:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "ID",
                visible: false
            }, // ...
            ]
            onExporting: function (e) {
                e.component.beginUpdate();
                e.component.columnOption("ID", "visible", true);
            },
            onExported: function (e) {
                e.component.columnOption("ID", "visible", false);
                e.component.endUpdate();
            }
        });
    });


##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onExporting (e) {
            e.component.beginUpdate();
            e.component.columnOption("ID", "visible", true);
        };
        onExported (e) {
            e.component.columnOption("ID", "visible", false);
            e.component.endUpdate();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML--><dx-data-grid ...
        (onExporting)="onExporting($event)"
        (onExported)="onExported($event)">
        <!-- ... -->
        <dxi-column dataField="ID" [visible]="false"></dxi-column>
    </dx-data-grid>

---

#####See Also#####
- [Client-Side Exporting](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/')
- [export](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/')
- [customizeExportData](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/customizeExportData.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeExportData')
- [onFileSaving](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFileSaving.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFileSaving')