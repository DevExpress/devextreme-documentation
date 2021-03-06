With the TreeList UI component, a user can sort by single and multiple columns. Use the **sorting**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/sorting/mode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/sorting/#mode') property to specify the current sorting mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            sorting: {
                mode: "single" // or "multiple" | "none"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-sorting
            mode="single"> <!-- or "multiple" | "none" -->
        </dxo-sorting>
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
        <DxTreeList>
            <DxSorting mode="single"/> <!-- or "multiple" | "none" -->
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeList, DxSorting } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxSorting
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { TreeList, Sorting } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList>
                    <Sorting mode="single"/> {/* or "multiple" | "none" */}
                </TreeList>
            );
        }
    }
    export default App;
    
---

In single mode, the user can click a column header to sort by the column. Subsequent clicks on the same header reverse the sort order. When the user sorts by a column, the sorting settings of other columns are canceled. 

In multiple mode, the user clicks a column header while pressing the Shift key to sort by the column. Sorting settings of other columns remain intact.

In both modes, the user can use the column header's context menu to apply sorting. Note that no matter how user applies sorting, rows are sorted within their hierarchical level.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Sorting](/images/treelist/visual_elements/sorting_sorted_columns.png)

To cancel a column's sorting settings, the user clicks the column's header while pressing Ctrl or uses the context menu:

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Sorting](/images/treelist/visual_elements/sorting_context_menu.png)

To disable sorting in the whole UI component, set the **sorting**.**mode** property to *"none"*; to disable sorting only in a specific column, use its [allowSorting](/api-reference/_hidden/GridBaseColumn/allowSorting.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowSorting') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columns: [{
                // ...
                allowSorting: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column [allowSorting]="false"></dxi-column>
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
        <DxTreeList>
            <DxColumn :allow-sorting="false"/>
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeList, DxColumn } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { TreeList, Column } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList>
                    <Column allowSorting={false}/>
                </TreeList>
            );
        }
    }
    export default App;
    
---

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/')