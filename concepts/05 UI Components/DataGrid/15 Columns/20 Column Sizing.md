DataGrid calculates column width values based on the component's width. You can also configure [columnWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnWidth) or **columns[]**.[width](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#width) to specify column widths.

The default DataGrid behavior is to assign equal width values to columns. To fit all columns within the component container, DataGrid may shrink columns with default **width** values (*"auto"*). This may truncate cell values or collapse columns to zero width. To avoid this behavior, specify one of the following properties:

- **columns[]**.[minWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#minWidth) (for all columns)/[columnMinWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnMinWidth)
- **columns[]**.[width](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#width) (for all columns)/[columnWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnWidth)
- [columnAutoWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnAutoWidth) - adjusts columns to fit cell values.


When the specified width of all columns exceeds the component's width, DataGrid activates horizontal [scrolling](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/).

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

DataGrid also allows you to use the mouse to resize columns at runtime. To activate this functionality, set [allowColumnResizing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnResizing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#allowColumnResizing') to `true`. Select a [columnResizingMode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnResizingMode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnResizingMode'):

- *"nextColumn"*: Adjusts the width of two columns (on either side of a column separator).
- *"widget"*: Adjusts the width of one column (on the left of a column separator) and the component's width.

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
