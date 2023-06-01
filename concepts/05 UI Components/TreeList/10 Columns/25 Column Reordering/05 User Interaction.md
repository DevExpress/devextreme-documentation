Set the [allowColumnReordering](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#allowColumnReordering') property to **true** to allow a user to reorder columns. 
If a specific column should not be moved, set its [allowReordering](/api-reference/_hidden/GridBaseColumn/allowReordering.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowReordering') property to **false**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            allowColumnReordering: true,
            columns: [
                { dataField: "CompanyName", allowReordering: false },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        [allowColumnReordering]="true">
        <dxi-column dataField="CompanyName" [allowReordering]="false"></dxi-column>
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
        <DxTreeList ...
            :allow-column-reordering="true">
            <DxColumn data-field="CompanyName" :allow-reordering="false" />
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
            <TreeList ...
                allowColumnReordering={true}>
                <Column dataField="CompanyName" allowReordering={false} />
            </TreeList>
        );
    }
    
---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/Reordering/"
}
