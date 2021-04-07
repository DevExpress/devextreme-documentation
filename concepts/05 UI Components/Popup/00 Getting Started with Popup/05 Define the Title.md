Set the [showTitle](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#showTitle) property to **true** to display popup's title and use the [title](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#title) property to define its content: 

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#popup").dxPopup({
            // ...
            showTitle: true,
            title: "Information",
        });
        // ...
    });

    // ...
 
##### Angular

    <!-- tab: app.component.html -->
    // ...
    <dx-popup
        [showTitle]="true"
        title="Information"
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
            <DxPopup
                :show-title="true"
                title="Information"         
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
    import React, { useState } from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    // ...

    function App() {
        // ...
        return (
            <div className="App">
                // ...
                <Popup
                    showTitle={true}
                    title="Information"              
                >
                    // ...
                </Popup>
            </div>
        );
    }

    export default App;


---