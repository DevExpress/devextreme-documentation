To add a search bar to the List, set the [searchEnabled](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchEnabled) property to **true**. Use the [searchMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchMode) property to specify whether found list items should start with, contain, or match the search string.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list').dxList({
            // ...
            searchEnabled: true,
            searchMode: 'contains',
        });
    });
##### Angular

    <!-- tab: app.component.html -->
    <dx-list...
        [searchEnabled]="true"
        searchMode="contains">
    </dx-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxList...
                :search-enabled="true"
                search-mode="contains">
            </DxList>
        </div>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    function App() {
        return (
            <div className="App">
                <List...
                    searchEnabled={true}
                    searchMode="contains">
                </List>
            </div>
        );
    }

    export default App;


        
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListWithSearchBar/"
}
