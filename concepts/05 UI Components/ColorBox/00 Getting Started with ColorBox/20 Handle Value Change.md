Users can change the value after they pick a shade or after they click the **OK** button. To switch between value change modes, use the [applyValueMode](/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/#applyValueMode) property. Implement the [onValueChanged](/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/#onValueChanged) function to handle value changes when users select a color in the drop-down editor or type a color code in.

The following code displays a notification every time users change the ColorBox value. The notification's background assumes the picked color. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#color-box").dxColorBox({
            // ...
            onValueChanged(e) {
                const toastColor = e.value;
                if (toastColor) {
                    DevExpress.ui.notify({
                        message: "The color has been changed",
                        onShowing(e) {
                            $(e.component.content()).css("background-color", toastColor);
                        }
                    });
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-color-box ...
        (onValueChanged)="onValueChanged($event)"
    >
    </dx-color-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import notify from 'devextreme/ui/notify';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
        toastColor: string;
        onValueChanged(e) {
            this.toastColor = e.value;
            if (this.toastColor) {
                notify({
                    message: 'The color has been changed',
                    onShowing: (e) => {
                        e.component.content().style.backgroundColor = this.toastColor;
                    }
                });
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxColorBox ...
            @value-changed="onValueChanged"
        />
    </template>

    <script>
    // ...
    import notify from "devextreme/ui/notify";

    export default {
        components: {
            DxColorBox
        },
        data() {
            return {
                toastColor: ''
            };
        },
        methods: {
            onValueChanged(e) {
                this.toastColor = e.value;
                if (this.toastColor) {
                    notify({
                        message: 'The color has been changed',
                        onShowing: (e) => {
                            e.component.content().style.backgroundColor = this.toastColor;
                        }
                    });
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from "react";
    import "devextreme/dist/css/dx.light.css";

    import { ColorBox } from 'devextreme-react/color-box';
    import notify from "devextreme/ui/notify";

    function App() {
        const onValueChanged = useCallback((e) => {
            const toastColor = e.value;
            if (toastColor) {
                notify({
                    message: 'The color has been changed',
                    onShowing: (e) => {
                        e.component.content().style.backgroundColor = toastColor;
                    }
                });
            }
        }, []);

        return (
            <ColorBox ...
                onValueChanged={onValueChanged}
            />
        );
    }

    export default App;

---
