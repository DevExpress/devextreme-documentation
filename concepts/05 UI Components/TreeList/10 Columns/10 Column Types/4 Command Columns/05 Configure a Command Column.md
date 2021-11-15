All columns are configured in the [columns](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/') array. Assign a command column's name to the [type](/api-reference/_hidden/dxTreeListColumn/type.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#type') property and specify the other column properties.

The following example shows how to specify the adaptive column's [width](/api-reference/_hidden/GridBaseColumn/width.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#width'):

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                type: "adaptive",
                width: 50
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column type="adaptive" [width]="50"></dxi-column>
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
            <DxColumn type="adaptive" :width="50" />
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
            DxColumn
        },
        data() {
            return {
                // ...
            }
        }
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
                <Column type="adaptive" width={50} />
            </TreeList>
        );
    }
    
---
