To allow users to delete items from the List, set the [allowItemDeleting](/Documentation/ApiReference/UI_Components/dxList/Configuration/#allowItemDeleting) property to **true**. Use the [itemDeleteMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemDeleteMode) property to select the UI elements and/or user actions that remove items.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list').dxList({
            // ...
            allowItemDeleting: true,
        });
    });
##### Angular

    <!-- tab: app.component.html -->
    <dx-list...
        [allowItemDeleting]="true">
    </dx-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxList...
                :allow-item-deleting="true">
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
                    allowItemDeleting={true}>
                </List>
            </div>
        );
    }

    export default App;


        
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/"
}
