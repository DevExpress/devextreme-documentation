DataGrid columns have equal widths in the default configuration (**width** is set to *"auto"*). The total column width matches the component (container) width. Configure the following properties to change the column layout:

- **columns[]**.[width](/api-reference/_hidden/GridBaseColumn/width.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#width')/**columns[]**.[minWidth](/api-reference/_hidden/GridBaseColumn/minWidth.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#minWidth'): Specify width/minimum width for a specific column.
- [columnWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnWidth.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnWidth')/[columnMinWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnMinWidth.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnMinWidth'): Specify width/minimum width for all columns.
- [columnAutoWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnAutoWidth.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnAutoWidth'): Adjusts all columns to fit cell values.

Your data or component configuration may result in column layout issues:

- Truncated cell values.
- Collapsed (hidden) columns.
- Columns with excess blank space.

To resolve these issues, specify column width or minimum width values, or enable auto-width.

When the specified width of all columns exceeds the component's width, DataGrid activates horizontal [scrolling](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/scrolling '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/').

---

##### jQuery

    <!-- tab: index.js -->
    $("#data-grid-container").dxDataGrid({
        columnMinWidth: 100,
        columns: [{
            dataField: "Title",
            width: 200,
        }, {
            dataField: "Address",
            minWidth: 150,
        }, ... ]
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-data-grid ...
        [columnMinWidth]="100"
    >
        <dxi-data-grid-column dataField="Title" [width]="200"></dxi-data-grid-column>
        <dxi-data-grid-column dataField="Address" [minWidth]="150"></dxi-data-grid-column>
        <!-- ... -->
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { DxDataGridModule } from "devextreme-angular";

    // ...
    @NgModule({
        imports: [
            DxDataGridModule
        ],
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            :column-min-width="100"
        >
            <DxColumn data-field="Title" :width="200" />
            <DxColumn data-field="Address" :min-width="150" />
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script>
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
    // ...

    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, Column } from 'devextreme-react/data-grid';

    function App() {
        return (
            <DataGrid ...
                columnMinWidth={100}
            >
                <Column dataField="Title" width={200} />
                <Column dataField="Address" minWidth={150} />
                {/* ... */}
            </DataGrid>
        );
    }
    
---

DataGrid also allows you to use the mouse to resize columns at runtime. To activate this feature, set [allowColumnResizing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnResizing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#allowColumnResizing') to `true` and select a [columnResizingMode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnResizingMode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnResizingMode'):

- *"nextColumn"*: Adjusts the width of the two columns on either side of a column separator.
- *"widget"*: Adjusts the width of the column to the left of a column separator and the component width.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnResizing/"
}

To disable mouse resizing for a specific column, set **columns[]**.[allowResizing](/api-reference/_hidden/GridBaseColumn/allowResizing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowResizing') to `false`.

---

##### jQuery

    <!-- tab: index.js -->
    $("#data-grid-container").dxDataGrid({
        allowColumnResizing: true,
        columnResizingMode: 'widget',
        columns: [{
            dataField: "Title",
            allowResizing: false
        }, ... ]
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-data-grid ...
        [allowColumnResizing]="true"
        columnResizingMode="widget"
    >
        <dxi-data-grid-column dataField="Title" [allowResizing]="false"></dxi-data-grid-column>
        <!-- ... -->
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            :allow-column-resizing="true"
            column-resizing-mode="widget"
        >
            <DxColumn data-field="Title" :allow-resizing="false" />
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script>
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
    // ...

    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, Column } from 'devextreme-react/data-grid';

    function App() {
        return (
            <DataGrid ...
                allowColumnResizing={true}
                columnResizingMode="widget"
            >
                <Column dataField="Title" allowResizing={false} />
                {/* ... */}
            </DataGrid>
        );
    }
    
---

#####See Also#####
- [DataGrid - Column Reordering](/concepts/05%20UI%20Components/DataGrid/15%20Columns/25%20Column%20Reordering '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Reordering/')
