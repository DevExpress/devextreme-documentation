The TreeList UI component allows a user to add, delete and update data. Assign **true** to the corresponding field of the [editing](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/') object to enable an operation. You can set a column's [allowEditing](/api-reference/_hidden/GridBaseColumn/allowEditing.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowEditing') property to **false** if its data should not be edited.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowUpdating: true, 
                allowAdding: true, 
                allowDeleting: true 
            },
            columns: [
                { dataField: 'id', allowEditing: false },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing
            [allowUpdating]="true"
            [allowAdding]="true"
            [allowDeleting]="true">
        </dxo-editing>
        <dxi-column dataField="id" [allowEditing]="false"></dxi-column>
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
            <DxEditing
                :allow-updating="true"
                :allow-adding="true"
                :allow-deleting="true"
            />
            <DxColumn data-field="id" :allow-editing="false" />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxEditing,
        DxColumn
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxEditing,
            DxColumn
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Editing,
        Column
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <Editing
                        allowUpdating={true}
                        allowAdding={true}
                        allowDeleting={true}
                    />
                    <Column dataField="id" allowEditing={false} />
                </TreeList>
            );
        }
    }
    export default App;
    
---

With the TreeList you can edit data in several modes. Use the **editing**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode') property to specify it. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                mode: 'row' // 'batch' | 'cell' | 'form' | 'popup'
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing
            mode="row"> <!-- 'batch' | 'cell' | 'form' | 'popup' -->
        </dxo-editing>
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
            <DxEditing ...
                mode="row" /> <!-- 'batch' | 'cell' | 'form' | 'popup' -->
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxEditing
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxEditing
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Editing
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <Editing ...
                        mode="row" /> {/* 'batch' | 'cell' | 'form' | 'popup' */}
                </TreeList>
            );
        }
    }
    export default App;
    
---

The following sections detail the TreeList's appearance and behavior in each editing mode.
