To add a search bar to the List, set the [searchEnabled](/api-reference/10%20UI%20Components/dxList/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchEnabled') property to **true**. Use the [searchMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchMode') property to specify whether found list items should start with, contain, or match the search string.

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
