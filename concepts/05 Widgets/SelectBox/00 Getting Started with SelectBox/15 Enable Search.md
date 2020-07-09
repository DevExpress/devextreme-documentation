To allow users to search through **SelectBox** values, set [searchEnabled](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#searchEnabled) to **true**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#selectBox").dxSelectBox({
            // ...

            $("#selectBox").dxSelectBox({
                // ...
                searchEnabled: "true"
            });
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box ...
        searchEnabled="true"
    >
    </dx-select-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox ...
            :search-enabled="true"
        />
    </template>

    <script>
        // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import { SelectBox } from 'devextreme-react/select-box';
    import DataSource from 'devextreme/data/data_source';

    // ...

    class App extends React.Component {
        render() {
            return (
                <SelectBox ...
                    searchEnabled={true}
                />
            );
        }
    }
    export default App;

---

There are additional search options demonstrated in the following demo:

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/SearchAndEditing"
}

In the next step, we will process the **SelectBox**'s value change event.