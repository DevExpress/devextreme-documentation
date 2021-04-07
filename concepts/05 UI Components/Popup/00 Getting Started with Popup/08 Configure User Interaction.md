Users can drag the popup. To configure this functionalty, use the [dragEnabled](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#dragEnabled) property.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#popup").dxPopup({
            // ...
            dragEnabled: false,
        });
        // ...
    });

    // ...
 
##### Angular

    <!-- tab: app.component.html -->
    // ...
    <dx-popup...
        [dragEnabled]="true"
    >
        <div *dxTemplate="let data of 'content'">
            // ...
        </div>
    </dx-popup>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }


##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            // ...
            <DxPopup...
                :drag-enabled="true"       
            >
                <template #content>
                    // ...
                </template>            
            </DxPopup>
        </div>
    </template>

    <script>
    // ...

    export default {
        // ...
    }
    </script>


##### React

    <!-- tab: App.js -->
    // ...

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    // ...

    function App() {
        // ...
        return (
            <div className="App">
                // ...
                <Popup
                    dragEnabled={true}          
                >
                    // ...
                </Popup>
            </div>
        );
    }

    export default App;


---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup"
}