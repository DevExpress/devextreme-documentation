When pagination is enabled, TreeList loads records page by page instead of loading them all at once. To configure pagination, set the **paging**.[enabled](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/#enabled) property to **true** and use the **paging**.[pageSize](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/#pageSize) property to specify the optimal number of records per page. Use this feature if your tests show noticeable lags without it.


---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            paging: {
                enabled: true,
                pageSize: 10
            }   
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list ... >
        <!-- ... -->
        <dxo-paging 
            [enabled]="true"
            [pageSize]="10">
        </dxo-paging>
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList ... >
                <!-- ... -->
                <DxPaging
                    :enabled="true"
                    :page-size="10"
                />
            </DxTreeList>
        </div>
    </template>

    <script>
    import {
        // ...
        DxPaging
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            // ...
            DxPaging
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        // ...
        Paging
    } from 'devextreme-react/tree-list';

    function App() {
        return (
            <div className="App">
                <TreeList ... >
                    {/* ... */}
                    <Paging
                        enabled={true}
                        defaultPageSize={10} 
                    />
                </TreeList>
            </div>
        );
    }

    export default App;


---

For further information on the TreeList component, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview/)
* [API Reference](/Documentation/ApiReference/UI_Components/dxTreeList/)