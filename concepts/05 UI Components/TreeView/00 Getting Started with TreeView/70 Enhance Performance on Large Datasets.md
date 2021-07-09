If the dataset is large, enable the Virtual Mode to enhance performance. In this mode, the TreeView loads a set of child nodes once a user expands the parent node for the first time. 

To enable this feature, set the [virtualModeEnabled](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#virtualModeEnabled) property to **true**. Note that this mode is only available when the TreeView's [dataStructure](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataStructure) is plain.

When the data source is remote, the TreeView requests data for each expanded node. To prevent this for nodes that do not nest others, set the [hasItems](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#hasItems) field to **false** for the corresponding data objects.

As an alternative to virtual mode, you can use a custom logic to process requested data. To do this, specify the [createChildren](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#createChildren) function as shown in the [Load Data on Demand](/Demos/WidgetsGallery/Demo/TreeView/LoadDataOnDemand) demo.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeView({
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
            <DxTreeView ... >
                <!-- ... -->
                <DxPaging
                    :enabled="true"
                    :page-size="10"
                />
            </DxTreeView>
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
                <TreeView ... >
                    {/* ... */}
                    <Paging
                        enabled={true}
                        defaultPageSize={10} 
                    />
                </TreeView>
            </div>
        );
    }

    export default App;


---

For further information on the TreeView component, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/Overview/)
* [API Reference](/Documentation/ApiReference/UI_Components/dxTreeView/)