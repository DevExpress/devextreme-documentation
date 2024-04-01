---
##### jQuery

To show the Popup, call its [show()](/api-reference/10%20UI%20Components/dxOverlay/3%20Methods/show().md '/Documentation/ApiReference/UI_Components/dxPopup/Methods/#show') method. In the code below, this method is called when users click the Open Popup button. You can also enable the [visible](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#visible') property to show the Popup immediately after creation.

Call the Popup's [hide()](/api-reference/10%20UI%20Components/dxOverlay/3%20Methods/hide().md '/Documentation/ApiReference/UI_Components/dxPopup/Methods/#hide') method to hide the Popup. Users can also hide the Popup when they click outside its boundaries. To enable this functionality, set the [hideOnOutsideClick](/api-reference/10%20UI%20Components/dxOverlay/1%20Configuration/hideOnOutsideClick.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#hideOnOutsideClick') property to **true**.

    <!-- tab: index.js -->
    $(function () {
        $("#popup").dxPopup({
            // ...
            visible: true,
            hideOnOutsideClick: true
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


Enable the [visible](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#visible') property to show the Popup. In the code below, the value of this property is two-way bound to a variable. The `togglePopup()` method toggles the value between **true** and **false** when users click the Open Popup button.

Users can hide the Popup when they click outside its boundaries. To enable this functionality, set the [hideOnOutsideClick](/api-reference/10%20UI%20Components/dxOverlay/1%20Configuration/hideOnOutsideClick.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#hideOnOutsideClick') property to **true**.

    <!-- tab: app.component.html -->
    <dx-popup
        [(visible)]="isPopupVisible"
        [hideOnOutsideClick]="true">
        <!-- ... -->
    </dx-popup>
    <dx-button
        text="Open popup"
        (onClick)="togglePopup()">
    </dx-button>

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

Enable the [visible](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#visible') property to show the Popup. In the code below, the value of this property is two-way bound to a variable. The `togglePopup()` method toggles the value between **true** and **false** when users click the Open Popup button.

Users can hide the Popup when they click outside its boundaries. To enable this functionality, set the [hideOnOutsideClick](/api-reference/10%20UI%20Components/dxOverlay/1%20Configuration/hideOnOutsideClick.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#hideOnOutsideClick') property to **true**.

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxPopup
                v-model:visible="isPopupVisible"
                :hide-on-outside-click="true">
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

Enable the [visible](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#visible') property to show the Popup. In the code below, the value of this property is bound to a state variable with the React <a href="https://react.dev/reference/react/useState" target="_blank">useState</a> hook. The `togglePopup` function toggles the value between **true** and **false** when users click the Open Popup button.

Call the togglePopup function when the [onHiding](/api-reference/10%20UI%20Components/dxOverlay/1%20Configuration/onHiding.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#onHiding') event fires to hide the Popup. Users can also hide the Popup when they click outside its boundaries. To enable this functionality, set the [hideOnOutsideClick](/api-reference/10%20UI%20Components/dxOverlay/1%20Configuration/hideOnOutsideClick.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#hideOnOutsideClick') property to **true**.

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
                    hideOnOutsideClick={true}
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
