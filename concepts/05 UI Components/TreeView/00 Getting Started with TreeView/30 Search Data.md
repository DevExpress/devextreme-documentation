The TreeView can display a search bar that allows users to search nodes. Enable the [searchEnabled](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEnabled) property to add the search bar. Use the [searchMode](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchMode) property to specify whether nodes should contain (default), start with, or match the search string. In this tutorial, search results include only nodes that start with the search string:

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#treeView").dxTreeView({ 
            // ...
            searchEnabled: true,
            searchMode: "startswith"
        });
    });


##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-view ...
        [searchEnabled]="true"
        searchMode="startswith">
          <!-- ... -->
    </dx-tree-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeView ...
            :search-enabled="true"
            search-mode="startswith"
        >
            <!-- ... -->
        </DxTreeView>
    </template>
    // ...


##### React

    <!-- tab: App.js -->
    // ...
    function App() {
        // ...

        return (
            <TreeView ...
                searchEnabled={true}
                searchMode="startswith"
            />
        );
    }

    export default App;

---
