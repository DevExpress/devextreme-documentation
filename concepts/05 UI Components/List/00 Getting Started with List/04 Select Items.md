The List supports *"single"*, *"multiple"*, and *"all"* item selection modes. To enable selection, assign one of these modes to the [selectionMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode) property.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list').dxList({
            // ...
            selectionMode: 'single',
         });
    });
##### Angular

    <!-- tab: app.component.html -->
    <dx-list...
        selectionMode="single">
    </dx-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxList...
                selection-mode="single">
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
                    selectionMode="single">
                </List>
            </div>
        );
    }

    export default App;


    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/"
}
