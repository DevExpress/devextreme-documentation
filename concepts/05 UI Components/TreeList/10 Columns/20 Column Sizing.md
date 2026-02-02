TreeList calculates column width values based on the component's width. You can also configure [columnWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnWidth) or **columns[]**.[width](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#width) to specify column widths.

The default TreeList behavior is to assign equal width values to columns. To fit all columns within the component container, TreeList may shrink columns with default **width** values (*"auto"*). This may truncate cell values or collapse columns to zero width. To avoid this behavior, specify one of the following properties:

- **columns[]**.[minWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#minWidth) (for all columns)/[columnMinWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnMinWidth)
- **columns[]**.[width](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#width) (for all columns)/[columnWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnWidth)
- [columnAutoWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnAutoWidth)

The **columnAutoWidth** property adjusts columns to fit cell values.

When the specified width of all columns exceeds the component's width, TreeList enables horizontal [scrolling](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/scrolling/).

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
