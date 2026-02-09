TreeList columns have equal widths in the default configuration (**width** is set to *"auto"*). The total column width matches the component (container) width. Configure the following properties to change the column layout:

- **columns[]**.[width](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#width)/**columns[]**.[minWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#minWidth): Specify width/minimum width for a specific column.
- [columnWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnWidth)/[columnMinWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnMinWidth): Specify width/minimum width for all columns.
- [columnAutoWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnAutoWidth): Adjusts all columns to fit cell values.

Your data or component configuration may result in column layout issues:

- Truncated cell values.
- Collapsed (hidden) columns.
- Columns with excess blank space.

To resolve these issues, specify column width or minimum width, or enable auto-width.

When the specified width of all columns exceeds the component's width, TreeList activates horizontal [scrolling](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/scrolling/).

---

##### jQuery

    <!-- tab: index.js -->
    $("#tree-list-container").dxTreeList({
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
    <dx-tree-list ...
        [columnMinWidth]="100"
    >
        <dxi-tree-list-column dataField="Title" [width]="200"></dxi-tree-list-column>
        <dxi-tree-list-column dataField="Address" [minWidth]="150"></dxi-tree-list-column>
        <!-- ... -->
    </dx-tree-list>

    <!-- tab: app.component.ts -->
    import { DxTreeListModule } from "devextreme-angular";

    // ...
    @NgModule({
        imports: [
            DxTreeListModule
        ],
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...
            :column-min-width="100"
        >
            <DxColumn data-field="Title" :width="200" />
            <DxColumn data-field="Address" :min-width="150" />
            <!-- ... -->
        </DxTreeList>
    </template>

    <script>
    import { DxTreeList, DxColumn } from 'devextreme-vue/tree-list';
    // ...

    </script>

##### React

    <!-- tab: App.tsx -->
    import { TreeList, Column } from 'devextreme-react/tree-list';

    function App() {
        return (
            <TreeList ...
                columnMinWidth={100}
            >
                <Column dataField="Title" width={200} />
                <Column dataField="Address" minWidth={150} />
                {/* ... */}
            </TreeList>
        );
    }
    
---

TreeList also allows you to use the mouse to resize columns at runtime. To enable this functionality, set [allowColumnResizing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnResizing.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#allowColumnResizing') to `true`. TreeList includes two column resizing modes ([columnResizingMode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnResizingMode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnResizingMode')):

- *"nextColumn"*: Adjusts the width of two columns (on either side of a column separator).
- *"widget"*: Adjusts the width of one column (on the left of a column separator) and the component's width.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/ColumnResizing/"
}

To disable mouse resizing for a specific column, set **columns[]**.[allowResizing](/api-reference/_hidden/GridBaseColumn/allowResizing.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowResizing') to `false`.

---

##### jQuery

    <!-- tab: index.js -->
    $("#tree-list-container").dxTreeList({
        allowColumnResizing: true,
        columnResizingMode: 'widget',
        columns: [{
            dataField: "Title",
            allowResizing: false
        }, ... ]
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-tree-list ...
        [allowColumnResizing]="true"
        columnResizingMode="widget"
    >
        <dxi-tree-list-column dataField="Title" [allowResizing]="false"></dxi-tree-list-column>
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...
            :allow-column-resizing="true"
            column-resizing-mode="widget"
        >
            <DxColumn data-field="Title" :allow-resizing="false" />
            <!-- ... -->
        </DxTreeList>
    </template>

    <script>
    import { DxTreeList, DxColumn } from 'devextreme-vue/tree-list';
    // ...

    </script>

##### React

    <!-- tab: App.tsx -->
    import { TreeList, Column } from 'devextreme-react/tree-list';

    function App() {
        return (
            <TreeList ...
                allowColumnResizing={true}
                columnResizingMode="widget"
            >
                <Column dataField="Title" allowResizing={false} />
                {/* ... */}
            </TreeList>
        );
    }
    
---

#####See Also#####
- [TreeList - Column Reordering](/concepts/05%20UI%20Components/TreeList/10%20Columns/25%20Column%20Reordering '/Documentation/Guide/UI_Components/TreeList/Columns/Column_Reordering/')
