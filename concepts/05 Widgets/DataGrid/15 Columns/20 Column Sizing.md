If you do not explicitly specify certain columns' [width](/api-reference/_hidden/GridBaseColumn/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width'), the **DataGrid** distributes the available space equally among columns at startup. As a result, cell values may appear truncated. Use the [columnMinWidth](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnMinWidth.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnMinWidth') option to specify a minimum width for all columns and the [minWidth](/api-reference/_hidden/GridBaseColumn/minWidth.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#minWidth') for an individual column. Note that all these settings may cause horizontal scrolling if columns cannot fit into the widget's width.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columnMinWidth: 100,
            columns: [{
                dataField: "Title",
                width: 200
            }, {
                dataField: "Address",
                minWidth: 150
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        [columnMinWidth]="100">
        <dxi-column dataField="Title" [width]="200"></dxi-column>
        <dxi-column dataField="Address" [minWidth]="150"></dxi-column>
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

Set the [columnAutoWidth](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnAutoWidth.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnAutoWidth') option to **true** to make all columns adjust their widths to their content.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columnAutoWidth: true
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        [columnAutoWidth]="true">
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

The widget allows a user to resize columns in two different modes: by changing the next column's width or the widget's width. To enable this functionality and set the mode, specify the [allowColumnResizing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/allowColumnResizing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnResizing') and [columnResizingMode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnResizingMode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnResizingMode') options, respectively. Note that you can prevent a specific column from being resized by assigning **false** to its [allowResizing](/api-reference/_hidden/GridBaseColumn/allowResizing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowResizing') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            allowColumnResizing: true,
            columnResizingMode: 'widget', // or 'nextColumn'
            columns: [{
                dataField: "Title",
                allowResizing: false
            }, 
            // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        [allowColumnResizing]="true"
        columnResizingMode="widget"> <!-- or 'nextColumn' -->
        <dxi-column dataField="Title" [allowResizing]="false"></dxi-column>
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnResizing/"
}

#####See Also#####
- [DataGrid - Column Reordering](/concepts/05%20Widgets/DataGrid/15%20Columns/25%20Column%20Reordering '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Reordering/')
