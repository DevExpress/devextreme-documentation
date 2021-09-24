---
##### jQuery

To show the Popup, call its [show()](/Documentation/ApiReference/UI_Components/dxPopup/Methods/#show) method. In the code below, this method is called when users click the Open Popup button. You can also enable the [visible](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#visible) property to show the Popup immediately after creation.

Call the Popup's [hide()](/Documentation/ApiReference/UI_Components/dxPopup/Methods/#hide) method to hide the Popup. Users can also hide the Popup when they click outside its boundaries. To enable this functionality, set the [closeOnOutsideClick](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#closeOnOutsideClick) property to **true**.

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
 
##### Angular


Enable the [visible](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#visible) property to show the Popup. In the code below, the value of this property is two-way bound to a variable. The `togglePopup()` method toggles the value between **true** and **false** when users click the Open Popup button.

Users can hide the Popup when they click outside its boundaries. To enable this functionality, set the [closeOnOutsideClick](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#closeOnOutsideClick) property to **true**.

    <!-- tab: app.component.html -->
    <dx-popup
        [(visible)]="isPopupVisible"
        [closeOnOutsideClick]="true">
        <!-- ... -->
    </dx-popup>
    <dx-button
        text="Open popup"
        (onClick)="togglePopup()">
    </dx-button>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    #include angular-component-decorator
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

Enable the [visible](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#visible) property to show the Popup. In the code below, the value of this property is two-way bound to a variable. The `togglePopup()` method toggles the value between **true** and **false** when users click the Open Popup button.

Users can hide the Popup when they click outside its boundaries. To enable this functionality, set the [closeOnOutsideClick](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#closeOnOutsideClick) property to **true**.

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxPopup
                v-model:visible="isPopupVisible"
                :close-on-outside-click="true">
                <!-- ... -->
            </DxPopup>
            <DxButton
                text="Open popup"
                @click="togglePopup"
            />
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

Enable the [visible](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#visible) property to show the Popup. In the code below, the value of this property is bound to a state variable with the React <a href="https://reactjs.org/docs/hooks-state.html" target="_blank">useState</a> hook. The `togglePopup` function toggles the value between **true** and **false** when users click the Open Popup button.

Call the togglePopup function when the [onHiding](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#onHiding) event fires to hide the Popup. Users can also hide the Popup when they click outside its boundaries. To enable this functionality, set the [closeOnOutsideClick](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#closeOnOutsideClick) property to **true**.

    <!-- tab: App.js -->
    import React, { useState } from 'react';

    // ...
    import { Button } from 'devextreme-react/button';

    const App = () =>  {
        const [isPopupVisible, setPopupVisibility] = useState(true);

        const togglePopup = () => {
            setPopupVisibility(!isPopupVisible);
        };
        return (
            <div className="App">
                <Popup
                    visible={isPopupVisible}
                    closeOnOutsideClick={true}
                    onHiding={togglePopup}
                />
                <Button 
                    text="Open popup"
                    onClick={togglePopup}
                />
            </div>
        );
    }

    export default App;


---
