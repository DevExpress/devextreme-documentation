Enable the [searchEnabled](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEnabled) property to add the search bar. Use the [searchMode](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchMode) property to specify whether items should contain (default), start with, or match the search string. In this tutorial, the search mode is *"startswith"*:

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#treeView").dxTreeView({ 
            // ...
            searchEnabled: true,
        });
    });


##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-view ...
        searchEnabled=true
    >
          <!-- ... -->
    </dx-tree-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeView ...
            :search-enabled="true"
        />
    </template>
    // ...


##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';
    import products from './products';

    function App() {
        // ...

        return (
            <TreeView ...
                searchEnabled={true}
            />
        );
    }

    export default App;

---
