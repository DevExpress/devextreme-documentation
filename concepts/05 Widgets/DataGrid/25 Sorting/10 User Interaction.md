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

In the single mode, a user selects a sort order from the context menu or clicks a column header to apply sorting. Subsequent clicks on the same header reverse the sort order. Applying sorting to another column clears the previous column's sorting settings. In the multiple mode, sorting settings applied to other columns remain intact when a user selects a sort order from another column's context menu.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Sorting](/images/DataGrid/visual_elements/sorting_sorted_columns.png)

The context menu can also be used to clear a column's sorting settings.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Sorting](/images/DataGrid/visual_elements/sorting_context_menu.png)

To disable sorting in the whole widget, set the **sorting**.**mode** option to *"none"*; to disable sorting only in a specific column, use its [allowSorting](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/allowSorting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowSorting') option.

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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleSorting/jQuery/Light/"
}

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/')