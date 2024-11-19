In some cases, the UI component contains so many columns that they cause horizontal scrolling. If specific columns should be on screen constantly regardless of how far the UI component is scrolled, a user can fix them.

![DevExtreme TreeList Column Fixing](/images/treelist/visual_elements/column_fixing.png)

To allow this, set the **columnFixing**.[enabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing/enabled.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnFixing/#enabled') property to **true**. If a user should never fix (or unfix) a specific column, set its [allowFixing](/api-reference/_hidden/GridBaseColumn/allowFixing.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowFixing') property to **false**.

[note] Once you assign **true** to the **columnFixing**.**enabled** or **fixed** property, [command columns](/concepts/05%20UI%20Components/TreeList/10%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/UI_Components/TreeList/Columns/Column_Types/Command_Columns/') become fixed automatically.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list ... >
        <dxo-column-fixing [enabled]="true"></dxo-column-fixing>
        <dxi-column [allowFixing]="true" ... ></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxColumnFixing :enabled="true" />
            <DxColumn :allow-fixing="false" ... />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxColumn,
        DxColumnFixing
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn,
            DxColumnFixing
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column,
        ColumnFixing
    } from 'devextreme-react/tree-list';

    export default function App() {
	    return (
            <TreeList ... >
                <ColumnFixing enabled={true} />
                <Column allowFixing={false} ... />
            </TreeList>
        );
    }
    
---

If a column should be fixed initially, assign **true** to its [fixed](/api-reference/_hidden/GridBaseColumn/fixed.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#fixed') property and specify its target position in the UI component using the [fixedPosition](/api-reference/_hidden/GridBaseColumn/fixedPosition.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#fixedPosition') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columns: [{
                // ...
                fixed: true,
                fixedPosition: "left"
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column [fixed]="true" fixedPosition="left" ... ></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxColumn :fixed="true" fixed-position="left" ... />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxColumn
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn,
            DxColumnFixing
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column
    } from 'devextreme-react/tree-list';

    export default function App() {
	    return (
            <TreeList ... >
                <Column fixed={true} fixedPosition="left" ... />
            </TreeList>
        );
    }
    
---

Column fixing works only with horizontal scrolling. If a user scrolls TreeList horizontally, the fixed columns do not move. Horizontal scrolling is enabled when the total column width is wider than the component width (or its container width if the component width is not specified). If the total column width is less than the component width, the fixed column behaves like a regular column.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/ColumnFixing/"
}

#####See Also#####
- [Adaptability](/concepts/05%20UI%20Components/TreeList/10%20Columns/50%20Adaptability '/Documentation/Guide/UI_Components/TreeList/Columns/Adaptability/')