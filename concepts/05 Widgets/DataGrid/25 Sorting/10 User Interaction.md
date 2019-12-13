With the **DataGrid** widget, a user can sort by single and multiple columns. Use the **sorting**.[mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/sorting/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/sorting/#mode') option to specify the current sorting mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            sorting: {
                mode: "single" // or "multiple" | "none"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-sorting
            mode="single"> <!-- or "multiple" | "none" -->
        </dxo-sorting>
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

In single mode, the user can click a column header to sort by the column. Subsequent clicks on the same header reverse the sort order. When the user sorts by a column, the sorting settings of other columns are canceled. 

In multiple mode, the user clicks a column header while pressing the Shift key to sort by the column. Sorting settings of other columns remain intact.

In both modes, the user can use the column header's context menu to apply sorting.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Sorting](/images/DataGrid/visual_elements/sorting_sorted_columns.png)

To cancel a column's sorting settings, the user clicks the column's header while pressing Ctrl or uses the context menu:

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Sorting](/images/DataGrid/visual_elements/sorting_context_menu.png)

To disable sorting in the whole widget, set the **sorting**.**mode** option to *"none"*; to disable sorting only in a specific column, use its [allowSorting](/api-reference/_hidden/GridBaseColumn/allowSorting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowSorting') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                // ...
                allowSorting: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column [allowSorting]="false"></dxi-column>
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleSorting/"
}

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/')
