The TreeList UI component supports single and multiple row selection. Use the **selection**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#mode') property to change the current mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            selection: {
                mode: "single" // or "multiple" | "none"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-selection
            mode="single"> <!-- "multiple" | "none" -->
        </dxo-selection>
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
            <DxSelection mode="single" /> <!-- "multiple" | "none" -->
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxSelection
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxSelection
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Selection
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <Selection mode="single" /> {/* "multiple" | "none" */}
                </TreeList>
            );
        }
    }
    export default App;
    
---

In the single mode, only one row can be selected at a time. In multiple mode, rows are supplied with check boxes for multiple selection. A check box in the first column's header allows a user to select all rows at once. Clicking this check box selects only those rows that meet the filtering conditions if a filter is applied.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Sorting](/images/treelist/selection.png)

You can disable the latter feature by setting the **selection**.[allowSelectAll](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#allowSelectAll') property to **false**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            selection: {
                mode: "multiple",
                allowSelectAll: false
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-selection
            mode="multiple"
            [allowSelectAll]="false">
        </dxo-selection>
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
            <DxSelection
                mode="single"
                :allow-select-all="false"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxSelection
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxSelection
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Selection
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <Selection
                        mode="single"
                        allowSelectAll={false}
                    />
                </TreeList>
            );
        }
    }
    export default App;
    
---

Selection is non-recursive by default, that is, only the clicked row is selected. Assign **true** to the **selection**.[recursive](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/selection/recursive.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#recursive') property to make selection recursive. After that, a click on a row also selects nested rows, and a click on the column header's check box selects all rows disregarding applied filters.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            selection: {
                mode: "multiple",
                recursive: true
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-selection
            mode="multiple"
            [recursive]="true">
        </dxo-selection>
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
            <DxSelection
                mode="multiple"
                :recursive="true"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxSelection
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxSelection
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Selection
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <Selection
                        mode="multiple"
                        recursive={true}
                    />
                </TreeList>
            );
        }
    }
    export default App;
    
---

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/SingleRowSelection/",
    name: "Single Selection"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/MultipleRowSelection/",
    name: "Multiple Selection"
}