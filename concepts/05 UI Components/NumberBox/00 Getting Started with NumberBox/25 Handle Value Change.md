Users can enter a new value or change the component value with spin buttons, Up and Down arrow keys, and mouse wheel. Implement the [onValueChanged](/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#onValueChanged) callback to handle value changes.

The following code displays a notification every time users change the NumberBox value.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#number-box").dxNumberBox({
            // ...
            onValueChanged(e) {
                if (e.value) {
                    DevExpress.ui.notify({
                        message: "The sum is $" + e.value
                    });
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-number-box ...
        (onValueChanged)="onValueChanged($event)"
    >
    </dx-number-box>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import notify from "devextreme/ui/notify";

    @Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.css"]
    })
    export class AppComponent {
        // ...
        onValueChanged(e) {
            if (e.value) {
                notify({
                    message: "The sum is $" + e.value
                });
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxNumberBox ...
            @value-changed="onValueChanged($event)"
        />
    </template>

    <script>
    // ...
    import { DxNumberBox } from "devextreme-vue/number-box";
    import notify from "devextreme/ui/notify";

    export default {
        components: {
            DxNumberBox
        },
        methods: {
            onValueChanged(e) {
                if (e.value) {
                    notify({
                        message: "The sum is $" + e.value
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

    import { NumberBox } from "devextreme-react/number-box";
    import notify from "devextreme/ui/notify";

    function App() {
        const onValueChanged = useCallback((e) => {
            if (e.value) {
                notify({
                    message: "The sum is $" + e.value
                });
            }
        }, []);

        return (
            <NumberBox ...
                onValueChanged={onValueChanged}
            />
        );
    }

    export default App;

---
