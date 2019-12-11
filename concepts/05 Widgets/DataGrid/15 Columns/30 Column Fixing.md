In some cases, the widget contains so many columns that they cause horizontal scrolling. If specific columns should be on screen constantly regardless of how far the widget is scrolled, a user can fix them.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid ColumnFixing](/images/DataGrid/visual_elements/column_fixing.png)

To allow this, set the **columnFixing**.[enabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnFixing/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/#enabled') option to **true**. If a user should never fix (or unfix) a specific column, set its [allowFixing](/api-reference/_hidden/GridBaseColumn/allowFixing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFixing') option to **false**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columnFixing: {
                enabled: true
            },
            columns: [{
                // ...
                allowFixing: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-column-fixing [enabled]="true"></dxo-column-fixing>
        <dxi-column [allowFixing]="true" ... ></dxi-column>
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

If a column should be fixed initially, assign **true** to its [fixed](/api-reference/_hidden/GridBaseColumn/fixed.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed') option and specify its target position in the widget using the [fixedPosition](/api-reference/_hidden/GridBaseColumn/fixedPosition.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixedPosition') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                // ...
                fixed: true,
                fixedPosition: "left"
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column [fixed]="true" fixedPosition="left" ... ></dxi-column>
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

[note] Once you assign **true** to the **columnFixing**.**enabled** or **fixed** option, [command columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/') become fixed automatically.

Since column fixing is effective only with horizontal scrolling, using it makes sense only if the [columnAutoWidth](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnAutoWidth.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnAutoWidth') option is **false** and when the total width of columns exceeds the container width. Otherwise, fixed columns behave just like regular ones.

#####See Also#####
- [Adaptability](/concepts/05%20Widgets/DataGrid/15%20Columns/50%20Adaptability.md '/Documentation/Guide/Widgets/DataGrid/Columns/Adaptability/')
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource)