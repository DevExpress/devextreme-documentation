---
EventForAction: ..\4 Events\exporting.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed before data is exported.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.fileName): String
The name of the file to which grid data is about to be exported.

##### field(e.cancel): Boolean
Allows you to cancel exporting.

---
You can use this function with the [onExported](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExported.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported') function to adjust columns before exporting. In the following code, these functions are used to change a column's caption for the exported file without changing it in the widget:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onExporting: function (e) {
                // Changes the caption 
                e.component.beginUpdate();
                e.component.columnOption("dataField", "caption", "New Caption");
            },
            onExported: function (e) {
                // Restores the original caption
                e.component.columnOption("dataField", "caption", "Original Caption");
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
            // Changes the caption 
            e.component.beginUpdate();
            e.component.columnOption("dataField", "caption", "New Caption");
        };
        onExported (e) {
            // Restores the original caption
            e.component.columnOption("dataField", "caption", "Original Caption");
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
    </dx-data-grid>

---

#####See Also#####
- [Client-Side Exporting](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/')
- [export](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/')
- [customizeExportData](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/customizeExportData.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeExportData')
- [onFileSaving](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFileSaving.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFileSaving')