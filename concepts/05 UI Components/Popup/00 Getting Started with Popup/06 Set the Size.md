Use [hight](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#height) and [width](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#width) properties to set popup's size:

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#popup").dxPopup({
            // ...
            width: 500,
            height: 500,
        });
        // ...
    });

    // ...
 
##### Angular

    <!-- tab: app.component.html -->
    // ...
    <dx-popup
        [height]="500"
        [width]="500"
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
                :height="500"
                :width="500"        
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
                    width={500}
                    height={500}            
                >
                    // ...
                </Popup>
            </div>
        );
    }

    export default App;


---