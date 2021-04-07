---
##### jQuery

Use the **visibility** parameter to control whether the popup is hidden or shown by default. With this parameter set to **true**, the popup will displayed by default and cannot be reopened once closed. In order to toggle popup's visibility, you can use [show()](/Documentation/ApiReference/UI_Components/dxPopup/Methods/#show) and [hide()](/Documentation/ApiReference/UI_Components/dxPopup/Methods/#hide) methods. Add a [button](/Documentation/ApiReference/UI_Components/dxButton/) and implement popup toggle in its **onClick** handler. Use the [closeOnOutsideClick](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#closeOnOutsideClick) do define whether users can close the popup on outside clicks:

    <!-- tab: index.js -->
    $(function () {
        $("#popup").dxPopup({
            // ...
            visible: true,
            closeOnOutsideClick: true
        });

        const popup = $("#popup").dxPopup("instance");

        $("#button").dxButton({
            text: "Open popup",
            onClick: () => {
                popup.show();
            }
        });
    });

    // ...
 
##### Angular

Use the **visibile** parameter to control whether the popup is hidden or shown by default. With this parameter set to **true**, the popup will displayed by default and cannot be reopened once closed. In order to toggle popup's visibility two-way bind the **visibile** property to manipulate its value. Add a [button](/Documentation/ApiReference/UI_Components/dxButton/) and implement popup toggle in its **onClick** handler. Use the [closeOnOutsideClick](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#closeOnOutsideClick) do define whether users can close the popup on outside clicks:

    <!-- tab: app.component.html -->
    <dx-button
        text="Open popup"
        (onClick)="togglePopup()"
    >
    </dx-button>
    <dx-popup
        [(visible)]="isPopupVisible"
        [closeOnOutsideClick]="true"
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
        isPopupVisible: boolean;

        constructor() {
            this.isPopupVisible = true;
        }

        togglePopup(): void {
            this.isPopupVisible = !this.isPopupVisible;
        }
    }


##### Vue

Use the **visibile** parameter to control whether the popup is hidden or shown by default. With this parameter set to **true**, the popup will displayed by default and cannot be reopened once closed. In order to toggle popup's visibility two-way bind the **visibile** property to manipulate its value. Add a [button](/Documentation/ApiReference/UI_Components/dxButton/) and implement popup toggle in its **click** handler. Use the [closeOnOutsideClick](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#closeOnOutsideClick) do define whether users can close the popup on outside clicks:

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxButton
                text="Open popup"
                @click="togglePopup"            
            />
            <DxPopup
                v-model:visible="isPopupVisible"
                :close-on-outside-click="true"            
            >
                <template #content>
                    // ...
                </template>            
            </DxPopup>
        </div>
    </template>

    <script>
    // ...
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            // ...
            DxButton,
        },
    }
    </script>


##### React

Use the **visibile** parameter to control whether the popup is hidden or shown by default. With this parameter set to **true**, the popup will displayed by default and cannot be reopened once closed. In order to toggle popup's visibility, bind the **visibile** property to a constant and manipulate its value with React **useState** hook. As React does not support two-way data binding, use the [onHiding](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#onHiding) property to adjust the value of the **visible** property when popup is closed. Add a [button](/Documentation/ApiReference/UI_Components/dxButton/) and implement popup toggle in its **onClick** handler. Use the [closeOnOutsideClick](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#closeOnOutsideClick) do define whether users can close the popup on outside clicks:

    <!-- tab: App.js -->
    import React, { useState } from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    // ...
    import { Button } from 'devextreme-react/button';

    function App() {
        const [isPopupVisible, setPopupVisivility] = useState(true);

        const togglePopup = () => {
            setPopupVisivility(!isPopupVisible);
        };
        return (
            <div className="App">
                <Button 
                    text="Open popup"
                    onClick={togglePopup} 
                />
                <Popup
                    visible={isPopupVisible}
                    closeOnOutsideClick={true}
                    onHiding={togglePopup}                
                >
                    // ...
                </Popup>
            </div>
        );
    }

    export default App;


---